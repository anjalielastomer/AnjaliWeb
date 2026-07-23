import type { GlobalConfig } from 'payload'

import { publicDraftContent } from '../access'
import { revalidateGlobal } from '../hooks/revalidate'

/** Was a Strapi singleType (home-screen-action-video). */
export const HomeScreenActionVideo: GlobalConfig = {
  slug: 'home-screen-action-video',
  access: {
    read: publicDraftContent.read,
    update: publicDraftContent.update,
  },
  admin: { group: 'Home page' },
  versions: { drafts: true },
  hooks: { afterChange: [revalidateGlobal()] },
  fields: [{ name: 'link', type: 'text', required: true }],
}
