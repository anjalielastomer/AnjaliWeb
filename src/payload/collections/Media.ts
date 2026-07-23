import type { CollectionConfig } from 'payload'

import { publicContent } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  access: publicContent,
  admin: { useAsTitle: 'filename' },
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
