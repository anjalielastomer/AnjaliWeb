# Payload CMS migration — implementation notes

Replaces the standalone Strapi 5 backend (`newStrapi`) with Payload CMS 3 mounted
inside this Next.js app at `/admin`. See `../../plan.md` for the phase plan.

## Layout

| Path | Purpose |
|---|---|
| `src/payload.config.ts` | Root config: collections, globals, db, storage, email |
| `src/payload/access.ts` | Shared access-control policies |
| `src/payload/collections/` | One file per content type |
| `src/payload/globals/` | Was a Strapi `singleType` |
| `src/payload/hooks/` | Email notifications (ported from `newStrapi/src/index.ts`) |
| `src/payload/email.ts` | Nodemailer transport + notification inboxes |
| `src/app/(payload)/` | Payload's admin UI, REST/GraphQL routes, and the `/cached` read route |
| `src/app/(frontend)/` | The existing site — moved here, unchanged |
| `src/lib/payload.ts` | Strapi→Payload compatibility layer for the frontend |

## Database — Azure Postgres, isolated in a schema

Runs on **Azure Database for PostgreSQL flexible server** in **Central India**
(`itzsnjdb`), sharing one database (`techfiesta26`) with an unrelated project.
This app's ~41 tables + 22 enums live in a dedicated **`client_project` schema**;
the other project's tables stay in `public` and are never touched.

- Set via env: `DATABASE_URI` (connection string, `sslmode=require`) and
  `DATABASE_SCHEMA=client_project`. The adapter reads `schemaName` from the
  latter (`src/payload.config.ts`). Unset `DATABASE_SCHEMA` → default `public`.
- **Moving to the client's own DB later** is just changing those two env vars
  and re-pushing/migrating — no code changes. The schema is created once with
  `CREATE SCHEMA client_project AUTHORIZATION <role>`.
- Payload's custom-schema support is **experimental** and breaks if a same-named
  table/enum exists in another schema. A collision check MUST pass first: the
  other project here is all PascalCase (`User`, `Event`), Payload is lowercase
  `snake_case` / `enum_`-prefixed, so there is zero overlap.
- **Latency:** ~50ms round-trip from India (vs Neon Ohio's 265ms). This
  co-location is the fix for the slow admin — the app and DB are in the same
  region. Neon was dropped after its free tier silently reset the DB password
  mid-session.
- Tier: Burstable B1ms (dev/test). Fine for this workload; General Purpose is
  the upgrade if this becomes high-traffic production.

## Why the frontend moved into `(frontend)`

Payload's admin needs its own root layout (`<html>`/`<body>`). Two root layouts
cannot coexist in one App Router tree, so the site moved into a `(frontend)`
route group. Route groups do not appear in URLs — every path is unchanged.

## The compatibility layer

The site was written against Strapi's REST conventions. Rather than rewrite 49
client components, `src/lib/payload.ts` translates both directions:

| Strapi | Payload |
|---|---|
| `populate=*`, `populate[a][populate]=*` | `depth=2` |
| `pagination[page]` / `pagination[pageSize]` | `page` / `limit` |
| `filters[a][b][$eq]=v` | `where[a.b][equals]=v` |
| `{ data, meta.pagination }` | `{ docs, totalDocs, page, totalPages }` |
| `documentId` (opaque string) | numeric `id`, re-exposed as `documentId` |
| upload `formats.medium` | upload `sizes.medium` |
| — | join fields return `{ docs: [] }`, flattened to a plain array |

Consequences worth knowing:

- **`documentId` is now the stringified numeric id.** Existing links, query keys
  and filters keep working, but the values are no longer Strapi's opaque ids.
- **Default page size is 200** (`DEFAULT_LIMIT`). Payload defaults to 10 and
  Strapi defaulted to 25; without an override, listing pages would silently
  truncate. Raise it or paginate properly if the catalogue grows.
- **Server components need an absolute URL.** `resolveApiBase()` returns a
  relative `/api` in the browser and an absolute origin on the server, derived
  from `NEXT_PUBLIC_SITE_URL` (or `VERCEL_*`). Set `NEXT_PUBLIC_SITE_URL` per
  environment or server-side fetches will fail.

## Drafts and access control

Every content type that had Strapi's `draftAndPublish` uses
`versions: { drafts: true }`. **`read: () => true` is not sufficient with drafts
enabled** — it exposes unpublished documents publicly. Drafts-enabled
collections use `publicDraftContent`, whose read policy returns a
`_status: 'published'` constraint for anonymous callers and `true` for admins.

Documents created through the REST API default to **draft**. Content will not
appear on the site until published.

PII collections (`career-requests`, `contact-us-messages`, `mailing-lists`,
`resumes`) use `submissionOnly`: anyone may create, only admins may read.

### File serving and resumes

Files are **not** served from the blob CDN directly. `plugin-cloud-storage`
keeps `url` pointing at Payload's own `/api/<collection>/file/<name>` route and
streams the object from the blob store behind it, so collection access control
still applies. Verified: an anonymous resume download returns **403**, an
authenticated one **200**, while media returns 200 for everyone.

The blob store itself is public, so the underlying object URL bypasses that
check for anyone who knows it. Media is public anyway. Resumes get a random
per-document `prefix` (`resumes/<32 hex chars>/`, set in `Resumes.ts`) so the
object key cannot be derived from the filename.

Two constraints worth remembering:

- **`addRandomSuffix` must stay off.** It rewrites `filename` after `url` has
  been generated, so every file 404s — including all site images.
- **The database and the blob store must stay in sync.** Payload dedupes
  filenames against the database. Restoring or resetting the database while
  blob objects persist will re-issue names that already exist, and uploads fail
  with "This blob already exists". Relevant to the Phase 7 database swap.

## Email

Ported from `newStrapi/src/index.ts` with three defects fixed:

1. **Sends are awaited.** The originals fired a floating `(async () => {})()`,
   which on serverless can be killed before the SMTP handshake completes.
2. **The Ethereal fallback is gone.** `mailer.ts` silently defaulted to a fake
   inbox that discards mail. Missing SMTP config now fails loudly: the app
   refuses to boot in production, warns in development, and hooks log an error
   instead of pretending to send. (The check is skipped during `next build`,
   which legitimately has no runtime secrets.)
3. **Notification links include the route segment.** The original built
   `anjalielastomer.com/{documentId}`, which is not a route on this site.

Hook failures are logged but never fail the content save.

## Local development

```bash
cp .env.example .env     # fill in DATABASE_URI and PAYLOAD_SECRET
npm run dev              # /admin creates the first user on first visit
npm run generate:types   # after changing any collection
npm run generate:importmap  # after adding a plugin or custom component
```

Payload auto-pushes schema in development. For anything beyond local, use
migrations (`npx payload migrate:create` / `npx payload migrate`) — see Phase 6.

Running a **local production build** (`npm run build && npm start`) sets
`NODE_ENV=production`, which trips the email guard. Pass `ALLOW_MISSING_SMTP=true`
to boot without SMTP for local/CI testing only — never on the deployed site.

## Caching

The public site reads through a dedicated cached route; the admin never does.

- **`/cached/[...slug]`** (`src/app/(payload)/cached/`) runs Payload's in-process
  Local API — no HTTP hop — wrapped in `unstable_cache`. It is anonymous and
  published-only (`overrideAccess: false`), and **safelisted to public
  collections**; PII collections (career-requests, contact-us-messages,
  mailing-lists, resumes, users) return 404. It returns the same raw shape as
  `/api`, so the compat layer's `toStrapiResponse` wrapper is unchanged.
- The compat layer (`src/lib/payload.ts`) routes **reads** here (`CACHED_API`)
  and **writes** to `/api` (`PAYLOAD_API`). Measured: cached reads ~4ms vs ~300ms
  direct.
- **Freshness is time-based (`REVALIDATE_SECONDS`, currently 30s).** As of
  Next 16, `revalidateTag` does NOT reliably purge `unstable_cache` entries
  (verified in dev and a production build), so the `afterChange`/`afterDelete`
  revalidate hooks (`src/payload/hooks/revalidate.ts`) are best-effort and
  currently inert — retained for a future migration to the `'use cache'`
  directive, where tag revalidation works. Editors still see their own changes
  instantly because the admin reads `/api`, not the cache.
- Client-side: TanStack Query `staleTime` is 60s (`src/providers/query-provider.tsx`),
  down from 24h, so a warm client also refreshes within a minute.

## Deviations from the plan

- `home-page-featured-projects` follows `newStrapi`'s schema (`index` +
  `project` relation), not the plan's field list. The plan names the Strapi
  schema as the source of truth.
- Resumes live in their own `resumes` collection rather than `media`, which is
  publicly readable.
- Strapi's many-to-many is modelled as one owning `relationship`
  (`products.product_categories`) plus a `join` on the inverse side, rather than
  two independent `hasMany` lists that would drift apart.
- Field names keep Strapi's snake_case so the frontend types are unchanged.
