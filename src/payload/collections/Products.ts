import type { CollectionConfig } from 'payload'

import { publicDraftContent } from '../access'
import { revalidateCollection, revalidateCollectionDelete } from '../hooks/revalidate'

export const Products: CollectionConfig = {
  slug: 'products',
  access: publicDraftContent,
  admin: { useAsTitle: 'title', group: 'Catalogue' },
  versions: { drafts: true },
  hooks: {
    // Product cards also surface through featured-products, so bust that too.
    afterChange: [revalidateCollection(['featured-products'])],
    afterDelete: [revalidateCollectionDelete(['featured-products'])],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    { name: 'description', type: 'textarea', required: true },
    {
      // Was a repeatable `common.text` component in Strapi.
      name: 'key_features',
      type: 'array',
      required: true,
      minRows: 1,
      labels: { singular: 'Key feature', plural: 'Key features' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'specification',
      type: 'textarea',
      admin: {
        description:
          'HTML. Carried over from CKEditor; rendered as-is by the frontend.',
      },
    },
    {
      // Owning side of the former Strapi manyToMany.
      name: 'product_categories',
      type: 'relationship',
      relationTo: 'product-categories',
      hasMany: true,
    },
    {
      // Read-only mirror of customer-reviews.product (Strapi `mappedBy`).
      name: 'customer_reviews',
      type: 'join',
      collection: 'customer-reviews',
      on: 'product',
    },
  ],
}
