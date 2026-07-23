/**
 * Strapi -> Payload compatibility layer.
 *
 * The site was written against Strapi 5's REST conventions. Payload serves the
 * same data at the same origin under /api, but with different query parameters
 * and a different response envelope. Rather than rewrite 49 components, this
 * module translates in both directions:
 *
 *   request   populate=* / pagination[..] / filters[..][$eq]  ->  depth / limit / where[..][equals]
 *   response  { docs, totalDocs, page }                       ->  { data, meta.pagination }
 *   document  numeric id                                      ->  + documentId (string)
 *             upload `sizes`                                  ->  + `formats` (Strapi names)
 *             join field { docs: [...] }                      ->  plain array
 *
 * Frontend code should keep using the Strapi-shaped types in src/types.
 */

/**
 * Payload is mounted inside this Next app, so the browser can use a relative
 * path. Server components cannot — `fetch` there has no origin to resolve
 * against — so on the server we build an absolute origin.
 */
function resolveOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_API_URL
  // Honour an explicit override, but strip a trailing /api so we can derive
  // both bases from one origin.
  if (explicit && explicit.length > 0) return explicit.replace(/\/api\/?$/, '').replace(/\/$/, '')

  if (typeof window !== 'undefined') return ''

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`)

  return origin.replace(/\/$/, '')
}

const ORIGIN = resolveOrigin()

/** Payload's REST API. Writes and any authenticated read go here. */
export const PAYLOAD_API = `${ORIGIN}/api`

/**
 * Cached public read endpoint (src/app/(payload)/cached/[...slug]/route.ts).
 * Anonymous, published-only, server-cached. Public GET reads route here so the
 * database is hit at most once per revalidation window per query.
 */
export const CACHED_API = `${ORIGIN}/cached`

/** Strapi image-format names mapped onto the imageSizes defined in Media.ts. */
const SIZE_TO_FORMAT: Record<string, string> = {
  xsmall: 'thumbnail',
  small: 'small',
  medium: 'medium',
  large: 'large',
}

type AnyDoc = Record<string, any>

/**
 * Strapi referenced documents by an opaque `documentId`; Payload uses a numeric
 * `id`. Routes like /products/[id] pass that value straight back into a fetch,
 * so exposing `documentId` as the stringified id keeps every existing link,
 * query key and filter working unchanged.
 */
export function normalizeDoc<T = AnyDoc>(value: T): T {
  if (Array.isArray(value)) return value.map((v) => normalizeDoc(v)) as unknown as T
  if (value === null || typeof value !== 'object') return value
  if (value instanceof Date) return value

  const input = value as AnyDoc

  // A join/relationship field arrives as a paginated envelope; the frontend
  // expects a plain array (e.g. product.customer_reviews.map(...)).
  if (Array.isArray(input.docs) && typeof input.hasNextPage !== 'undefined') {
    return normalizeDoc(input.docs) as unknown as T
  }

  const out: AnyDoc = {}
  for (const [key, val] of Object.entries(input)) out[key] = normalizeDoc(val)

  if (typeof out.id !== 'undefined' && typeof out.documentId === 'undefined') {
    out.documentId = String(out.id)
  }

  // Uploads: expose Payload's `sizes` under Strapi's `formats` names.
  if (out.sizes && typeof out.sizes === 'object' && !out.formats) {
    const formats: AnyDoc = {}
    for (const [sizeName, format] of Object.entries(out.sizes as AnyDoc)) {
      const mapped = SIZE_TO_FORMAT[sizeName]
      if (mapped && format && (format as AnyDoc).url) formats[mapped] = format
    }
    out.formats = formats
  }

  // Strapi always exposed publishedAt; drafts-enabled Payload uses _status.
  if (typeof out._status !== 'undefined' && typeof out.publishedAt === 'undefined') {
    out.publishedAt = out._status === 'published' ? out.updatedAt ?? null : null
  }

  return out as T
}

/** Wrap a Payload response in the Strapi envelope the frontend expects. */
export function toStrapiResponse(payload: AnyDoc): AnyDoc {
  if (payload && Array.isArray(payload.docs)) {
    return {
      data: normalizeDoc(payload.docs),
      meta: {
        pagination: {
          page: payload.page ?? 1,
          pageSize: payload.limit ?? payload.docs.length,
          pageCount: payload.totalPages ?? 1,
          total: payload.totalDocs ?? payload.docs.length,
        },
      },
    }
  }
  // Single document, or a global.
  return { data: normalizeDoc(payload), meta: {} }
}

/**
 * Translate Strapi query parameters into Payload equivalents.
 * Unknown parameters are passed through untouched.
 */
export function translateParams(input: URLSearchParams): URLSearchParams {
  const out = new URLSearchParams()
  let needsDepth = false

  for (const [key, value] of input.entries()) {
    // populate=* / populate[project][populate]=* -> relationship depth
    if (key === 'populate' || key.startsWith('populate[')) {
      needsDepth = true
      continue
    }

    if (key === 'pagination[page]') {
      out.set('page', value)
      continue
    }
    if (key === 'pagination[pageSize]') {
      out.set('limit', value)
      continue
    }

    // filters[a][b][$eq]=v -> where[a.b][equals]=v
    const filterMatch = key.match(/^filters\[(.+)\]$/)
    if (filterMatch) {
      const segments = filterMatch[1].split('][')
      let operator = 'equals'
      const last = segments[segments.length - 1]
      if (last.startsWith('$')) {
        segments.pop()
        operator = STRAPI_OPERATORS[last] ?? 'equals'
      }
      // documentId is our alias for Payload's primary key.
      const path = segments.map((s) => (s === 'documentId' ? 'id' : s)).join('.')
      out.set(`where[${path}][${operator}]`, value)
      needsDepth = true
      continue
    }

    out.append(key, value)
  }

  // depth=2 covers product -> categories -> media, which is what populate=*
  // resolved to in practice.
  if (needsDepth && !out.has('depth')) out.set('depth', '2')

  // Payload defaults to 10 documents; Strapi defaulted to 25. Listing pages
  // that never passed a page size would silently lose rows, so raise the
  // ceiling well above the current catalogue size rather than truncate.
  if (!out.has('limit')) out.set('limit', String(DEFAULT_LIMIT))

  return out
}

/** Applied when the caller specifies no page size. */
export const DEFAULT_LIMIT = 200

const STRAPI_OPERATORS: Record<string, string> = {
  $eq: 'equals',
  $ne: 'not_equals',
  $in: 'in',
  $notIn: 'not_in',
  $lt: 'less_than',
  $lte: 'less_than_equal',
  $gt: 'greater_than',
  $gte: 'greater_than_equal',
  $contains: 'contains',
  $null: 'exists',
}

/**
 * Build a fully translated Payload URL from a Strapi-style endpoint.
 * `base` selects the endpoint: reads default to the cached route, writes pass
 * `PAYLOAD_API` explicitly.
 */
export function buildUrl(
  endpoint: string,
  params?: Record<string, string>,
  base: string = CACHED_API,
): string {
  const [path, existingQuery] = endpoint.split('?')
  const merged = new URLSearchParams(existingQuery ?? '')
  if (params) for (const [k, v] of Object.entries(params)) merged.append(k, v)

  const translated = translateParams(merged)
  const query = translated.toString()
  return `${base}${path}${query ? `?${query}` : ''}`
}

/** GET a collection or document (through the cache) and return it in Strapi shape. */
export async function payloadGet<T = AnyDoc>(
  endpoint: string,
  params?: Record<string, string>,
): Promise<T> {
  const res = await fetch(buildUrl(endpoint, params, CACHED_API), {
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  return toStrapiResponse(await res.json()) as T
}
