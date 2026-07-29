/**
 * One-off: rewrite inline <img src="/api/media/file/NAME"> in article/project
 * content to the media's real Vercel Blob URL.
 *
 * Why: media now uses `disablePayloadAccessControl`, which un-registers the
 * /api/media/file/<name> route (see payload.config.ts). Cover images are fine —
 * they read `url` from the API, which the adapter regenerates — but these inline
 * URLs are baked into the stored HTML and would 404 after deploy.
 *
 * Idempotent: re-running finds nothing to change. Updates keep `_status:
 * 'published'`, and the mailing-list blast only fires on `create`, so no email
 * goes out.
 *
 * Run: npx payload run scripts/rewrite-inline-media-urls.ts
 */
import { getPayload } from 'payload'
import config from '@payload-config'

const DRY_RUN = process.argv.includes('--dry-run')

const payload = await getPayload({ config })

// filename -> blob URL
const media = await payload.find({ collection: 'media', limit: 0, depth: 0 })
const urlByFilename = new Map<string, string>()
for (const m of media.docs) {
  if (m.filename && m.url) urlByFilename.set(m.filename as string, m.url as string)
}
console.log(`Loaded ${urlByFilename.size} media URLs.`)

const PATTERN = /\/api\/media\/file\/([^"'\s>]+)/g

let changed = 0
let missing = 0

for (const collection of ['articles', 'projects'] as const) {
  const { docs } = await payload.find({ collection, limit: 0, depth: 0 })

  for (const doc of docs) {
    const before = String(doc.content ?? '')
    if (!before.includes('/api/media/file/')) continue

    const after = before.replace(PATTERN, (whole, filename: string) => {
      const url = urlByFilename.get(decodeURIComponent(filename))
      if (!url) {
        console.warn(`  !! no media found for "${filename}" — leaving as-is`)
        missing++
        return whole
      }
      return url
    })

    if (after === before) continue

    const hits = [...before.matchAll(PATTERN)].map((m) => m[1])
    console.log(`${collection} #${doc.id} "${doc.title}": ${hits.join(', ')}`)

    if (!DRY_RUN) {
      await payload.update({
        collection,
        id: doc.id,
        data: { content: after, _status: 'published' },
        overrideAccess: true,
      })
    }
    changed++
  }
}

console.log(
  `${DRY_RUN ? '[dry run] would update' : 'Updated'} ${changed} document(s).` +
    (missing ? ` ${missing} filename(s) had no matching media.` : ''),
)
process.exit(0)
