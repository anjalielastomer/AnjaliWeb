import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig, type Plugin } from 'payload'
import sharp from 'sharp'

import { emailAdapter } from './payload/email'
import { revealErrorToAdmins } from './payload/hooks/revealErrorToAdmins'
import { Articles } from './payload/collections/Articles'
import { CustomerReviews } from './payload/collections/CustomerReviews'
import {
  AboutUsTexts,
  FeaturedProducts,
  HomePageFeaturedProjects,
  HomePageLatestInsights,
  HomePageMapTexts,
} from './payload/collections/HomePage'
import { Media } from './payload/collections/Media'
import { ProductCategories } from './payload/collections/ProductCategories'
import { Products } from './payload/collections/Products'
import { Projects } from './payload/collections/Projects'
import { Resumes } from './payload/collections/Resumes'
import {
  CareerRequests,
  ContactUsMessages,
  MailingLists,
} from './payload/collections/Submissions'
import { Users } from './payload/collections/Users'
import { HomeScreenActionVideo } from './payload/globals/HomeScreenActionVideo'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const blobToken = process.env.BLOB_READ_WRITE_TOKEN

const STOCK_BLOB_UPLOAD_HANDLER =
  '@payloadcms/storage-vercel-blob/client#VercelBlobClientUploadHandler'

/**
 * Swap the storage plugin's client-upload handler for ours, which appends a
 * unique suffix to every uploaded filename.
 *
 * Must run AFTER vercelBlobStorage, which is what registers the stock provider.
 * See UniqueFilenameBlobUploadHandler.tsx for why the stock one cannot replace
 * an existing file.
 */
const useUniqueBlobFilenames: Plugin = (incoming) => {
  const providers = incoming.admin?.components?.providers
  if (!providers) return incoming

  return {
    ...incoming,
    admin: {
      ...incoming.admin,
      components: {
        ...incoming.admin?.components,
        providers: providers.map((provider) =>
          typeof provider === 'object' && provider.path === STOCK_BLOB_UPLOAD_HANDLER
            ? {
                ...provider,
                path: '/payload/uploads/UniqueFilenameBlobUploadHandler#UniqueFilenameBlobUploadHandler',
              }
            : provider,
        ),
      },
    },
  }
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [
    Users,
    Media,
    Resumes,
    Products,
    ProductCategories,
    CustomerReviews,
    Articles,
    Projects,
    FeaturedProducts,
    HomePageFeaturedProjects,
    HomePageLatestInsights,
    HomePageMapTexts,
    AboutUsTexts,
    CareerRequests,
    ContactUsMessages,
    MailingLists,
  ],
  globals: [HomeScreenActionVideo],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      // The Azure server allows only ~26 usable connections (max_connections
      // 50, minus 15 reserved and Azure's own backends). Every warm Vercel
      // instance holds its own pool, and each one used to squat up to 10 slots
      // for minutes after its last request — a burst of parallel requests then
      // exhausted the server and Payload failed to boot entirely
      // (`FATAL 53300: remaining connection slots are reserved...` → 500s
      // across /admin).
      //
      // Do NOT drop this to 1: Payload's schema introspection (and any code
      // path that queries while holding a transaction client) needs a second
      // connection and deadlocks on a pool of one — verified, `payload run`
      // hangs forever at "Pulling schema from database".
      max: 3,
      idleTimeoutMillis: 10_000,
      allowExitOnIdle: true,
    },
    // Isolate this app's tables in a dedicated schema when set (Azure server
    // shared with another project). Unset → default `public` schema.
    // NOTE: Payload's custom-schema support is experimental and breaks on a
    // same-name table/enum in another schema — a collision check must pass
    // before enabling this. See docs/PAYLOAD-MIGRATION.md.
    ...(process.env.DATABASE_SCHEMA
      ? { schemaName: process.env.DATABASE_SCHEMA }
      : {}),
  }),
  sharp,
  hooks: { afterError: [revealErrorToAdmins] },
  ...(emailAdapter ? { email: emailAdapter } : {}),
  cors: ['http://localhost:3000', 'https://www.anjalielastomer.com'],
  csrf: ['http://localhost:3000', 'https://www.anjalielastomer.com'],
  plugins: [
    // Local disk is not writable on Vercel, so blob storage is required there.
    // Without a token we fall back to local storage for development.
    //
    // Resumes are served through Payload's own /api/resumes/file/<name> route,
    // which enforces collection access control and streams from the blob store
    // behind it, so resume downloads 403 for anonymous callers (verified).
    //
    // Media is NOT: `disablePayloadAccessControl` points media URLs straight at
    // the public blob CDN. Routing them through Payload meant every single
    // image — including the dozens of 156x156 admin thumbnails a collection
    // screen paints — was a separate serverless invocation that booted Payload
    // and opened a DB connection just to proxy a file. That is what exhausted
    // the Postgres connection limit and 500'd the admin. Media is public
    // content, so there is no access control to lose.
    //
    // `addRandomSuffix` must stay OFF: `adapter.handleUpload` mutates one shared
    // `data` object per file (original + every generated size), so the last
    // write wins and `filename` ends up holding a size's suffixed name while
    // `sizes[*].filename` keep the unsuffixed ones — every URL 404s. Uniqueness
    // is handled by `useUniqueBlobFilenames` below instead.
    //
    // The blob store is public, so the underlying object URL bypasses access
    // control for anyone who knows it. Media is public anyway; resumes get an
    // unguessable random prefix (see Resumes.ts) so that object key cannot be
    // derived from the filename.
    ...(blobToken
      ? [
          vercelBlobStorage({
            collections: {
              media: { disablePayloadAccessControl: true },
              resumes: { prefix: 'resumes' },
            },
            token: blobToken,
            addRandomSuffix: false,
            // Upload the file straight from the browser to Blob, bypassing the
            // Next.js/Vercel serverless request-body limit (~4.5 MB). Without
            // this, admin uploads of large (DSLR-sized) images fail in
            // production with a generic "Something went wrong".
            clientUploads: true,
          }),
          useUniqueBlobFilenames,
        ]
      : []),
  ],
})
