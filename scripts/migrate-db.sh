#!/usr/bin/env bash
#
# migrate-db.sh — copy this app's Payload schema from one Azure Postgres to another.
#
# It moves ONLY the `client_project` schema (this app's tables, incl. users and
# Payload internals) — the rest of the source database is never touched. Media
# FILES are NOT migrated: they live in Vercel Blob and keep working as long as
# the same BLOB_READ_WRITE_TOKEN is used. This script moves database rows only.
#
# USAGE
#   # source is read from AnjaliWeb/.env (DATABASE_URI) automatically.
#   bash scripts/migrate-db.sh --target 'postgresql://user:pass@NEWHOST:5432/db?sslmode=require'
#
#   # or set env vars and run with no args:
#   TARGET_DATABASE_URI='postgresql://...' bash scripts/migrate-db.sh
#
# COMMON FLAGS
#   --target <uri>   destination connection string (or $TARGET_DATABASE_URI)
#   --source <uri>   override source (default: DATABASE_URI from .env)
#   --schema <name>  schema to move (default: client_project)
#   --fresh          DROP the schema on the target first (clean re-import)
#   --dump-only      only create the dump file, do not touch the target
#   --yes            skip the confirmation prompt (for automation)
#
# AFTER A SUCCESSFUL RUN
#   Point the app at the new database: update DATABASE_URI in Vercel (and .env)
#   to the target connection string. Keep DATABASE_SCHEMA=client_project.
#
set -euo pipefail

SCHEMA="client_project"
SOURCE="${SOURCE_DATABASE_URI:-}"
TARGET="${TARGET_DATABASE_URI:-}"
FRESH=0; YES=0; DUMP_ONLY=0

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DUMP_DIR="$REPO_DIR/scripts/.db-dumps"
STAMP="$(date +%Y%m%d-%H%M%S)"

# ---- args ----
while [ $# -gt 0 ]; do
  case "$1" in
    --target) TARGET="$2"; shift 2;;
    --source) SOURCE="$2"; shift 2;;
    --schema) SCHEMA="$2"; shift 2;;
    --fresh) FRESH=1; shift;;
    --dump-only) DUMP_ONLY=1; shift;;
    --yes) YES=1; shift;;
    -h|--help) sed -n '2,40p' "$0"; exit 0;;
    *) echo "Unknown option: $1" >&2; exit 1;;
  esac
done

red() { printf "\033[31m%s\033[0m\n" "$1"; }
grn() { printf "\033[32m%s\033[0m\n" "$1"; }
ylw() { printf "\033[33m%s\033[0m\n" "$1"; }

# ---- preflight: tools ----
if ! command -v pg_dump >/dev/null 2>&1 || ! command -v pg_restore >/dev/null 2>&1; then
  red "pg_dump / pg_restore not found."
  cat <<EOF

Install the Postgres 18 client tools (the server is Postgres 18):

  brew install libpq
  echo 'export PATH="\$(brew --prefix libpq)/bin:\$PATH"' >> ~/.zshrc
  source ~/.zshrc

Then re-run this script. (pg_dump must be v18 or newer to dump an v18 server.)
EOF
  exit 1
fi

PGD_MAJOR="$(pg_dump --version | grep -oE '[0-9]+' | head -1)"
if [ "$PGD_MAJOR" -lt 18 ]; then
  red "pg_dump is v$PGD_MAJOR but the server is v18. A newer pg_dump is required."
  echo "  brew install libpq   (then put \$(brew --prefix libpq)/bin on PATH)"
  exit 1
fi

# ---- source from .env if not provided ----
if [ -z "$SOURCE" ]; then
  if [ -f "$REPO_DIR/.env" ]; then
    SOURCE="$(grep -E '^DATABASE_URI=' "$REPO_DIR/.env" | head -1 | cut -d= -f2-)"
  fi
fi
[ -z "$SOURCE" ] && { red "No source. Set DATABASE_URI in .env or pass --source."; exit 1; }
[ -z "$TARGET" ] && { red "No target. Pass --target <uri> or set TARGET_DATABASE_URI."; exit 1; }

mask() { echo "$1" | sed -E 's#://([^:]+):[^@]*@#://\1:***@#'; }

echo "Schema : $SCHEMA"
echo "Source : $(mask "$SOURCE")"
echo "Target : $(mask "$TARGET")"
echo

# ---- verify both connect + show source stats (uses the app's pg driver) ----
count_json() { # $1 = uri  -> prints JSON {table: rows} for the schema
  ( cd "$REPO_DIR" && SCHEMA="$SCHEMA" URI="$1" node --input-type=module -e '
    import pg from "pg"
    const c = new pg.Client({ connectionString: process.env.URI })
    await c.connect()
    const t = await c.query(
      "select table_name from information_schema.tables where table_schema=$1 order by 1",
      [process.env.SCHEMA])
    const out = {}
    for (const { table_name } of t.rows) {
      const r = await c.query(`select count(*)::int n from "${process.env.SCHEMA}"."${table_name}"`)
      out[table_name] = r.rows[0].n
    }
    await c.end()
    process.stdout.write(JSON.stringify(out))
  ' 2>/dev/null )
}

ylw "Reading source schema..."
SRC_COUNTS="$(count_json "$SOURCE")" || { red "Cannot connect to source (check firewall / URI)."; exit 1; }
SRC_TABLES="$(echo "$SRC_COUNTS" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{const o=JSON.parse(d);console.log(Object.keys(o).length+" tables, "+Object.values(o).reduce((a,b)=>a+b,0)+" rows total")})')"
echo "  source: $SRC_TABLES"

# ---- confirm ----
if [ "$DUMP_ONLY" -eq 0 ] && [ "$YES" -eq 0 ]; then
  echo
  ylw "This will import '$SCHEMA' into the TARGET database."
  [ "$FRESH" -eq 1 ] && red "  --fresh: the existing '$SCHEMA' schema on the target WILL BE DROPPED first."
  printf "Type 'yes' to continue: "
  read -r ans
  [ "$ans" = "yes" ] || { echo "Aborted."; exit 1; }
fi

# ---- dump source schema ----
mkdir -p "$DUMP_DIR"
DUMP_FILE="$DUMP_DIR/${SCHEMA}-${STAMP}.dump"
ylw "Dumping $SCHEMA from source -> $DUMP_FILE"
pg_dump --dbname="$SOURCE" --schema="$SCHEMA" --no-owner --no-privileges \
        --format=custom --file="$DUMP_FILE"
grn "  dump complete ($(du -h "$DUMP_FILE" | cut -f1))"

if [ "$DUMP_ONLY" -eq 1 ]; then
  grn "Dump-only mode. File kept at: $DUMP_FILE"
  exit 0
fi

# ---- optional: drop target schema for a clean import ----
if [ "$FRESH" -eq 1 ]; then
  ylw "Dropping existing '$SCHEMA' on target..."
  ( cd "$REPO_DIR" && SCHEMA="$SCHEMA" URI="$TARGET" node --input-type=module -e '
    import pg from "pg"
    const c = new pg.Client({ connectionString: process.env.URI }); await c.connect()
    await c.query(`DROP SCHEMA IF EXISTS "${process.env.SCHEMA}" CASCADE`)
    await c.end()' )
fi

# ---- restore into target ----
ylw "Restoring into target..."
# --clean/--if-exists let a re-run overwrite existing objects gracefully.
pg_restore --dbname="$TARGET" --no-owner --no-privileges --clean --if-exists \
           --exit-on-error "$DUMP_FILE"
grn "  restore complete"

# ---- verify: compare row counts ----
ylw "Verifying row counts (source vs target)..."
TGT_COUNTS="$(count_json "$TARGET")"
node -e '
  const src = JSON.parse(process.argv[1]), tgt = JSON.parse(process.argv[2])
  const keys = [...new Set([...Object.keys(src), ...Object.keys(tgt)])].sort()
  let ok = true
  for (const k of keys) {
    const s = src[k] ?? "-", t = tgt[k] ?? "-"
    const match = s === t
    if (!match) ok = false
    if (!match || s !== 0) console.log(`  ${match ? "ok " : "MISMATCH"}  ${k.padEnd(38)} src=${s}  tgt=${t}`)
  }
  console.log(ok ? "\nALL COUNTS MATCH ✓" : "\nMISMATCH — review above ✗")
  process.exit(ok ? 0 : 1)
' "$SRC_COUNTS" "$TGT_COUNTS"

echo
grn "Migration done."
cat <<EOF

Next step — point the app at the new database:
  • Vercel → Project → Settings → Environment Variables → set DATABASE_URI to the
    target connection string. Keep DATABASE_SCHEMA=client_project. Redeploy.
  • Update .env locally the same way.
  • Media files stay in Vercel Blob — keep the same BLOB_READ_WRITE_TOKEN.

Dump kept at: $DUMP_FILE
EOF
