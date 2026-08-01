import type { CollectionConfig } from 'payload'

import { publicContent } from '../access'
import { copySharedImageBuffers } from '../hooks/copySharedImageBuffers'

export const Media: CollectionConfig = {
  slug: 'media',
  access: publicContent,
  hooks: { beforeChange: [copySharedImageBuffers] },
  admin: {
    useAsTitle: 'filename',
    // Make the list/relationship search bar actually search these fields.
    // Without this, typing an image number (e.g. "77") in the "choose from
    // existing" media search returned nothing.
    listSearchableFields: ['filename', 'alt'],
  },
  upload: {
    mimeTypes: ['image/*', 'video/*'],
    // Mirrors the breakpoints Strapi generated, so existing frontend markup
    // that picks a size by width keeps working.
    imageSizes: [
      { name: 'xsmall', width: 156, position: 'centre' },
      { name: 'small', width: 500, position: 'centre' },
      { name: 'medium', width: 750, position: 'centre' },
      { name: 'large', width: 1000, position: 'centre' },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: { description: 'Describes the image for screen readers and search engines.' },
    },
  ],
}
