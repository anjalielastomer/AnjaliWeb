import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { emailAdapter } from './payload/email'
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
    pool: { connectionString: process.env.DATABASE_URI || '' },
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
  ...(emailAdapter ? { email: emailAdapter } : {}),
  cors: ['http://localhost:3000', 'https://www.anjalielastomer.com'],
  csrf: ['http://localhost:3000', 'https://www.anjalielastomer.com'],
  plugins: [
    // Local disk is not writable on Vercel, so blob storage is required there.
    // Without a token we fall back to local storage for development.
    //
    // Files are served through Payload's own /api/<collection>/file/<name>
    // route, which enforces collection access control, and streamed from the
    // blob store behind it. Resume downloads therefore 403 for anonymous
    // callers (verified).
    //
    // `addRandomSuffix` must stay OFF: it rewrites `filename` after `url` has
    // been generated, so every file 404s.
    //
    // The blob store is public, so the underlying object URL bypasses access
    // control for anyone who knows it. Media is public anyway; resumes get an
    // unguessable random prefix (see Resumes.ts) so that object key cannot be
    // derived from the filename.
    ...(blobToken
      ? [
          vercelBlobStorage({
            collections: { media: true, resumes: { prefix: 'resumes' } },
            token: blobToken,
            addRandomSuffix: false,
            // Upload the file straight from the browser to Blob, bypassing the
            // Next.js/Vercel serverless request-body limit (~4.5 MB). Without
            // this, admin uploads of large (DSLR-sized) images fail in
            // production with a generic "Something went wrong".
            clientUploads: true,
          }),
        ]
      : []),
  ],
})
