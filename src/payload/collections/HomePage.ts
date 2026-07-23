import type { CollectionConfig } from 'payload'

import { publicDraftContent } from '../access'
import { revalidateCollection, revalidateCollectionDelete } from '../hooks/revalidate'

/** Ordering index, unique across the collection — mirrors Strapi's `index`. */
const indexField = {
  name: 'index',
  type: 'number' as const,
  required: true,
  unique: true,
  min: 1,
  admin: { description: 'Display order, starting at 1.' },
}

/** Bust this collection's own cache tag on any change. */
const revalidateHooks = {
  afterChange: [revalidateCollection()],
  afterDelete: [revalidateCollectionDelete()],
}

export const FeaturedProducts: CollectionConfig = {
  slug: 'featured-products',
  access: publicDraftContent,
  admin: { useAsTitle: 'index', group: 'Home page' },
  versions: { drafts: true },
  hooks: revalidateHooks,
  fields: [
    indexField,
    { name: 'product', type: 'relationship', relationTo: 'products' },
  ],
}

export const HomePageFeaturedProjects: CollectionConfig = {
  slug: 'home-page-featured-projects',
  access: publicDraftContent,
  admin: { useAsTitle: 'index', group: 'Home page' },
  versions: { drafts: true },
  hooks: revalidateHooks,
  fields: [
    indexField,
    { name: 'project', type: 'relationship', relationTo: 'projects' },
  ],
}

export const HomePageLatestInsights: CollectionConfig = {
  slug: 'home-page-latest-insights',
  access: publicDraftContent,
  admin: { useAsTitle: 'title', group: 'Home page' },
  versions: { drafts: true },
  hooks: revalidateHooks,
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'date', type: 'date', admin: { date: { pickerAppearance: 'dayOnly' } } },
    { name: 'read_time', type: 'textarea' },
  ],
}

export const HomePageMapTexts: CollectionConfig = {
  slug: 'home-page-map-texts',
  access: publicDraftContent,
  admin: { useAsTitle: 'number', group: 'Home page' },
  versions: { drafts: true },
  hooks: revalidateHooks,
  fields: [
    indexField,
    { name: 'number', type: 'text', required: true },
    { name: 'subtext', type: 'text' },
    { name: 'description', type: 'textarea' },
  ],
}

export const AboutUsTexts: CollectionConfig = {
  slug: 'about-us-texts',
  access: publicDraftContent,
  admin: { useAsTitle: 'number', group: 'Content' },
  versions: { drafts: true },
  hooks: revalidateHooks,
  fields: [
    { name: 'number', type: 'text', required: true },
    { name: 'subtext', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
  ],
}
