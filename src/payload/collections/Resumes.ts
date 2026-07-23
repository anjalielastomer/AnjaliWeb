import crypto from 'crypto'

import type { CollectionConfig } from 'payload'

import { submissionOnly } from '../access'

/**
 * Applicant resumes are kept OUT of `media`, which is publicly readable.
 * Anyone may upload one through the career form; only admins may read one back.
 */
export const Resumes: CollectionConfig = {
  slug: 'resumes',
  access: submissionOnly,
  admin: { useAsTitle: 'filename', group: 'Submissions' },
  upload: {
    mimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    disableLocalStorage: false,
  },
  fields: [
    {
      // The cloud-storage plugin stores each file at `<prefix>/<filename>`.
      // Because the blob store is public, a predictable key would let anyone
      // fetch a CV directly and bypass the access control on this collection.
      // A random per-document prefix makes the object key underivable from the
      // filename. The plugin merges this field with its own, keeping the
      // default value below.
      name: 'prefix',
      type: 'text',
      defaultValue: () => `resumes/${crypto.randomBytes(16).toString('hex')}`,
      admin: { hidden: true, readOnly: true },
    },
  ],
}
