'use client'

import { createClientUploadHandler, getFileKey } from '@payloadcms/plugin-cloud-storage/client'
import { upload } from '@vercel/blob/client'
import { formatAdminURL } from 'payload/shared'

/**
 * Drop-in replacement for `@payloadcms/storage-vercel-blob/client#VercelBlobClientUploadHandler`
 * that gives every uploaded file a unique name.
 *
 * WHY THIS EXISTS
 *
 * `clientUploads: true` makes the browser PUT the file straight to Vercel Blob
 * under `file.name`. The adapter never passes `allowOverwrite`, so Blob rejects
 * any upload whose key already exists:
 *
 *   Vercel Blob: This blob already exists, use `allowOverwrite: true` ...
 *
 * The admin surfaces that as a failed save, so replacing a cover image by
 * re-uploading a file with the same name was impossible — verified against the
 * live store.
 *
 * The obvious lever, `addRandomSuffix: true`, is broken in this plugin version:
 * `adapter.handleUpload` mutates the shared `data` object once per file (the
 * original AND each generated size), so the last write wins and `doc.filename`
 * ends up holding a *size's* suffixed name while `sizes[*].filename` keep the
 * unsuffixed ones. Every URL then 404s. Do not turn it on.
 *
 * Suffixing here instead fixes both problems at the source:
 *  - the Blob key is always new, so no 409 and no overwrite,
 *  - the URL is always new, so the 1-year immutable CDN cache can never serve a
 *    stale image after a replacement.
 *
 * Only the client-side pathname changes. The generated sizes are derived from
 * this name server-side, so they stay consistent automatically.
 *
 * Registered by `useUniqueBlobFilenames` in payload.config.ts, which repoints
 * the provider the storage plugin installs.
 */

/** `hero photo.jpg` -> `hero photo-mfk3x9a1.jpg` */
const uniquify = (filename: string): string => {
  const suffix = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
  const dot = filename.lastIndexOf('.')
  return dot <= 0
    ? `${filename}-${suffix}`
    : `${filename.slice(0, dot)}-${suffix}${filename.slice(dot)}`
}

export const UniqueFilenameBlobUploadHandler = createClientUploadHandler({
  handler: async ({
    apiRoute,
    collectionSlug,
    docPrefix,
    file,
    prefix,
    serverHandlerPath,
    serverURL,
    updateFilename,
  }) => {
    const { fileKey, sanitizedDocPrefix, sanitizedFilename } = getFileKey({
      collectionPrefix: prefix,
      docPrefix,
      filename: uniquify(file.name),
    })

    await upload(fileKey, file, {
      access: 'public',
      clientPayload: collectionSlug,
      contentType: file.type,
      handleUploadUrl: formatAdminURL({ apiRoute, path: serverHandlerPath, serverURL }),
    })

    // The document must record the same name we just wrote to Blob — the server
    // fetches the file back by this name to generate the image sizes.
    updateFilename(sanitizedFilename)

    return { prefix: sanitizedDocPrefix }
  },
})
