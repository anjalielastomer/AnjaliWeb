import type { CollectionConfig } from 'payload'

import { publicDraftContent } from '../access'
import { revalidateCollection, revalidateCollectionDelete } from '../hooks/revalidate'

export const CustomerReviews: CollectionConfig = {
  slug: 'customer-reviews',
  access: publicDraftContent,
  admin: { useAsTitle: 'customer_name', group: 'Catalogue' },
  versions: { drafts: true },
  hooks: {
    // Reviews render on the product page (join field), so bust products too.
    afterChange: [revalidateCollection(['products'])],
    afterDelete: [revalidateCollectionDelete(['products'])],
  },
  fields: [
    { name: 'customer_name', type: 'text', required: true },
    {
      name: 'rating',
      type: 'number',
      required: true,
      defaultValue: 5,
      min: 1,
      max: 5,
    },
    { name: 'review', type: 'textarea' },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
    },
  ],
}
