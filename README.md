# Anjali Elastomer — Website + CMS

The company website for **Anjali Elastomer** (RDSO-approved railway fastening
systems, rubber pads, cast track components, and bridge/track fabrication), built
as a single **Next.js 16** app with **Payload CMS 3** embedded at `/admin`.

One repo, one deploy, one database — the site and its content management run in
the same application. This replaced a previous split of a standalone Next.js
frontend and a separate Strapi 5 backend.
---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| CMS | Payload CMS 3 (mounted at `/admin`) |
| Database | Azure Database for PostgreSQL (Central India) — schema `client_project` |
| Media storage | Vercel Blob |
| Email | Nodemailer via GoDaddy SMTP |
| Data fetching | TanStack Query + a Strapi→Payload compatibility layer |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel |

---

## Getting started

```bash
npm install
cp .env.example .env        # fill in the values (see below)
npm run dev                 # http://localhost:3000
```

- Site: `http://localhost:3000`
- Admin: `http://localhost:3000/admin` (first visit creates the first admin user)

Useful scripts:

```bash
npm run dev                 # dev server
npm run build               # production build
npm run generate:types      # regenerate Payload TS types after editing a collection
npm run generate:importmap  # after adding a Payload plugin / custom component
```

---

## Environment variables

| Variable | Purpose |
|---|---|
| `DATABASE_URI` | Postgres connection string (`?sslmode=require`) |
| `DATABASE_SCHEMA` | `client_project` — isolates this app's tables in the shared DB |
| `PAYLOAD_SECRET` | Signs admin sessions. Use a strong, unique value per environment |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token for media uploads |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Mail server (GoDaddy: `smtpout.secureserver.net` / `587` / `false`) |
| `SMTP_USERNAME` / `SMTP_PASSWORD` | Mailbox credentials |
| `SMTP_FULL_NAME` | Display name on outgoing mail |
| `CAREERS_EMAIL` / `CONTACT_EMAIL` | Where career / contact form submissions are sent |
| `NEXT_PUBLIC_SITE_URL` | Public origin, e.g. `https://www.anjalielastomer.com` |

Never commit `.env`. In production these live in Vercel's Environment Variables.
Running a **local production build** (`npm run build && npm start`) without SMTP
requires `ALLOW_MISSING_SMTP=true` (local/CI only — never on the deployed site).

---

## Project layout

```
src/
├─ app/
│  ├─ (frontend)/        # the public website (all original pages, unchanged URLs)
│  └─ (payload)/         # Payload admin UI, REST/GraphQL, and the /cached read route
├─ payload.config.ts     # Payload root config (collections, db, storage, email)
├─ payload/
│  ├─ collections/       # one file per content type
│  ├─ globals/           # Payload globals (was a Strapi singleType)
│  ├─ hooks/             # email notifications + cache revalidation
│  ├─ access.ts          # access-control policies
│  └─ email.ts           # SMTP transport
├─ lib/payload.ts        # Strapi→Payload compatibility layer for the frontend
├─ hooks/ · lib/ · components/   # frontend data hooks, services, UI
scripts/
└─ migrate-db.sh         # Azure Postgres → Postgres data migration
docs/
└─ PAYLOAD-MIGRATION.md  # detailed implementation notes
```

---

## Content model

**16 collections + 1 global.** Public content (products, categories, reviews,
projects, articles, home-page sections, media) is publicly readable when
published; PII collections (`career-requests`, `contact-us-messages`,
`mailing-lists`, `resumes`, `users`) are admin-only.

Catalog collections of note:

- **products** — title, images (gallery), description, `key_features` (repeatable),
  `specification` (HTML), category relationship, and a `customer-reviews` join.
- **product-categories**, **customer-reviews**, **projects**, **articles**,
  plus home-page **featured-products / featured-projects / latest-insights / map-texts**.

Content with `versions.drafts` is hidden from the public until **published** —
new documents default to draft.

---

## Key behaviours

- **Caching** — public reads go through `/cached/[...slug]`, which runs Payload's
  in-process Local API wrapped in `unstable_cache` (≈4 ms vs ≈300 ms direct).
  Freshness is time-based (30 s); the admin panel always reads fresh (`/api`).
- **Media** — served through Payload's own access-controlled route and stored in
  Vercel Blob. `addRandomSuffix` must stay **off** (it breaks file serving).
- **Email** — `afterChange` hooks send: a mailing-list blast on project/article
  create, and career/contact form notifications. Missing SMTP fails loudly rather
  than silently dropping mail.
- **Frontend compatibility layer** (`src/lib/payload.ts`) — translates the old
  Strapi query syntax and response envelope to Payload, so the existing site code
  did not need rewriting.

See **`docs/PAYLOAD-MIGRATION.md`** for the full details and rationale.

---

## Database

Runs on **Azure Postgres (Central India)** for low latency to the India-based team.
This app's tables live in a dedicated **`client_project`** schema, sharing the
server with an unrelated project (whose tables stay in `public`, untouched).

Moving to a different Postgres account later is a single command:

```bash
bash scripts/migrate-db.sh --target 'postgresql://user:pass@NEW-HOST:5432/db?sslmode=require'
```

It moves only the `client_project` schema, verifies row counts, and prints the
env changes to make afterward. Media files stay in Vercel Blob (keep the same
`BLOB_READ_WRITE_TOKEN`).

---

## Deployment (Vercel)

1. Set all environment variables in the Vercel project.
2. Ensure the **Azure firewall allowlists Vercel's egress** (Vercel runs on AWS —
   "Allow Azure services" does not cover it; a missing rule shows as a connection
   timeout).
3. Install command `npm install`, build command `npm run build`.
   > The linux binaries for `sharp`, `lightningcss`, and `@tailwindcss/oxide` are
   > pinned in `package.json` `optionalDependencies` so Vercel's build gets the
   > correct native modules. Do not reintroduce `bun.lock`.
4. For schema changes beyond local, use Payload migrations
   (`npx payload migrate:create` / `npx payload migrate`) rather than dev auto-push.

---

## Admin

- URL: `/admin`
- Accounts are created only by an existing admin (no public signup).
- Forgot a password? Use the login page's **Forgot password** link (email-based).
- Login lockout (5 attempts → 10 min) and 2-hour sessions are enabled.

---


Developed and maintained by **[Suman Jain](https://github.com/itz-snj)**.

