import type { CollectionConfig } from 'payload'

import { publicDraftContent } from '../access'
import { notifyMailingList } from '../hooks/notifyMailingList'
import { revalidateCollection, revalidateCollectionDelete } from '../hooks/revalidate'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: publicDraftContent,
  admin: { useAsTitle: 'title', group: 'Content' },
  versions: { drafts: true },
  hooks: {
    afterChange: [notifyMailingList('Project'), revalidateCollection()],
    afterDelete: [revalidateCollectionDelete()],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'cover_images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    { name: 'description', type: 'textarea', required: true },
    { name: 'subtext', type: 'text', required: true },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'HTML. Carried over from CKEditor; rendered as-is by the frontend.',
      },
    },
  ],
}
