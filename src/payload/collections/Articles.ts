import type { CollectionConfig } from 'payload'

import { publicDraftContent } from '../access'
import { notifyMailingList } from '../hooks/notifyMailingList'
import { revalidateCollection, revalidateCollectionDelete } from '../hooks/revalidate'

export const Articles: CollectionConfig = {
  slug: 'articles',
  access: publicDraftContent,
  admin: { useAsTitle: 'title', group: 'Content' },
  versions: { drafts: true },
  hooks: {
    afterChange: [notifyMailingList('Article'), revalidateCollection()],
    afterDelete: [revalidateCollectionDelete()],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'short_description', type: 'textarea', required: true },
    {
      name: 'cover_image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    { name: 'author', type: 'text', required: true },
    {
      name: 'publish_time',
      type: 'date',
      required: true,
      admin: { date: { pickerAppearance: 'dayOnly' } },
    },
    { name: 'read_time_text', type: 'text', required: true },
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
