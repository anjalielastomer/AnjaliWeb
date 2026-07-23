import config from '@payload-config'
import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { parse } from 'qs-esm'
import { getPayload, type Where } from 'payload'

/**
 * Cached public read endpoint.
 *
 * The frontend's compat layer (src/lib/payload.ts) routes GET reads here
 * instead of /api. This runs Payload's in-process Local API — no HTTP hop, and
 * in production co-located with the database — wrapped in `unstable_cache` and
 * tagged by collection. The revalidate hooks (src/payload/hooks/revalidate.ts)
 * bust the tag on admin change, so edits appear immediately.
 *
 * Returns the SAME raw shape as Payload's REST endpoint (`{ docs, ... }` for a
 * list, the document for a by-id/global read) so the compat layer's existing
 * `toStrapiResponse` wrapper works identically whether a call goes to /api or
 * here.
 *
 * Reads are ALWAYS anonymous (`overrideAccess: false`, no user), so the
 * collection's own access policy applies — drafts are hidden and only the
 * safelisted public collections are reachable. PII collections are never
 * served here; the safelist is the guard.
 */

// Only these may be read through the cache. Everything else (career-requests,
// contact-us-messages, mailing-lists, resumes, users) is rejected.
const PUBLIC_COLLECTIONS = new Set([
  'products',
  'product-categories',
  'customer-reviews',
  'projects',
  'articles',
  'featured-products',
  'home-page-featured-projects',
  'home-page-latest-insights',
  'home-page-map-texts',
  'about-us-texts',
  'media',
])

const PUBLIC_GLOBALS = new Set(['home-screen-action-video'])

// Time-based freshness is the ACTUAL invalidation mechanism here: Next 16's
// `revalidateTag` does not reliably purge unstable_cache entries, so a short
// window keeps public content fresh. The DB is cheap (Azure Central India,
// ~50ms, tiny tables), so 30s is a comfortable balance of freshness vs load.
// The admin panel reads /api (uncached) and always sees edits immediately.
const REVALIDATE_SECONDS = 30

const num = (v: unknown): number | undefined => {
  if (typeof v !== 'string' || v.length === 0) return undefined
  const n = Number(v)
  return Number.isFinite(n) ? n : undefined
}

async function readPayload(
  segments: string[],
  search: string,
): Promise<{ status: number; body: unknown }> {
  const payload = await getPayload({ config })
  const parsed = parse(search, { ignoreQueryPrefix: true, depth: 10 }) as Record<string, unknown>

  const common = {
    overrideAccess: false as const, // enforce access.read (published-only, safelist)
    draft: false as const,
    depth: num(parsed.depth) ?? 1,
  }

  // /cached/globals/<slug>
  if (segments[0] === 'globals') {
    const slug = segments[1]
    if (!slug || !PUBLIC_GLOBALS.has(slug)) return { status: 404, body: { errors: [{ message: 'Not found' }] } }
    const doc = await payload.findGlobal({ slug: slug as never, ...common })
    return { status: 200, body: doc }
  }

  const collection = segments[0]
  if (!collection || !PUBLIC_COLLECTIONS.has(collection)) {
    return { status: 404, body: { errors: [{ message: 'Not found' }] } }
  }

  // /cached/<collection>/<id>
  if (segments[1]) {
    try {
      const doc = await payload.findByID({
        collection: collection as never,
        id: segments[1],
        ...common,
      })
      return { status: 200, body: doc }
    } catch {
      // Not found, or a draft an anonymous caller may not read.
      return { status: 404, body: { errors: [{ message: 'Not found' }] } }
    }
  }

  // /cached/<collection>
  const result = await payload.find({
    collection: collection as never,
    ...common,
    limit: num(parsed.limit) ?? 200,
    page: num(parsed.page),
    sort: typeof parsed.sort === 'string' ? parsed.sort : undefined,
    where: (parsed.where as Where | undefined) ?? undefined,
  })

  return { status: 200, body: result }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params
  const search = new URL(request.url).search

  const tag = slug[0] === 'globals' ? slug[1] : slug[0]

  const getCached = unstable_cache(
    () => readPayload(slug, search),
    ['cached-read', ...slug, search],
    { tags: tag ? [tag] : [], revalidate: REVALIDATE_SECONDS },
  )

  const { status, body } = await getCached()
  return NextResponse.json(body, { status })
}
