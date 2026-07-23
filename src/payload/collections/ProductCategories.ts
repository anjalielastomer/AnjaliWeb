import type { CollectionConfig } from 'payload'

import { publicDraftContent } from '../access'
import { revalidateCollection, revalidateCollectionDelete } from '../hooks/revalidate'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  access: publicDraftContent,
  admin: { useAsTitle: 'name', group: 'Catalogue' },
  versions: { drafts: true },
  hooks: {
    // Category names appear on product listings/filters.
    afterChange: [revalidateCollection(['products'])],
    afterDelete: [revalidateCollectionDelete(['products'])],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      // Inverse of products.product_categories. A join keeps one source of
      // truth; two independent hasMany relationships would drift apart.
      name: 'products',
      type: 'join',
      collection: 'products',
      on: 'product_categories',
    },
  ],
}
