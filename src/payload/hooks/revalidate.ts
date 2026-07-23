import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'
import { revalidateTag } from 'next/cache'

/**
 * Attempt to bust the server-side cache when an admin saves or deletes.
 *
 * IMPORTANT: as of Next 16, `revalidateTag` does NOT reliably purge entries
 * created by `unstable_cache` — verified in both dev and a production build.
 * Cache freshness is therefore driven by the SHORT time-based `revalidate`
 * window on the /cached route (see REVALIDATE_SECONDS there), not by these
 * hooks. They are retained because they become effective once the read layer
 * migrates to the `'use cache'` directive, where tag revalidation works.
 *
 * The admin panel reads through /api (uncached), so editors always see their
 * own changes immediately regardless.
 *
 * `also` lists dependent tags: e.g. a customer-review change affects the
 * product page, so it also targets `products`.
 */
const bust = (slug: string, also: string[] = []) => {
  for (const tag of [slug, ...also]) {
    try {
      revalidateTag(tag, 'max')
    } catch {
      // Never fail a write over cache housekeeping.
    }
  }
}

export const revalidateCollection =
  (also: string[] = []): CollectionAfterChangeHook =>
  ({ collection, doc }) => {
    bust(collection.slug, also)
    return doc
  }

export const revalidateCollectionDelete =
  (also: string[] = []): CollectionAfterDeleteHook =>
  ({ collection, doc }) => {
    bust(collection.slug, also)
    return doc
  }

export const revalidateGlobal =
  (): GlobalAfterChangeHook =>
  ({ global, doc }) => {
    bust(global.slug)
    return doc
  }
