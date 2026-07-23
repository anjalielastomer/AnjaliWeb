import type { CollectionConfig } from 'payload'

import { submissionOnly } from '../access'
import { notifyCareers, notifyContact } from '../hooks/notifyInbox'

export const CareerRequests: CollectionConfig = {
  slug: 'career-requests',
  access: submissionOnly,
  admin: { useAsTitle: 'name', group: 'Submissions' },
  hooks: { afterChange: [notifyCareers] },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'contact', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'position', type: 'textarea' },
    {
      name: 'resume',
      type: 'upload',
      relationTo: 'resumes',
      required: true,
    },
  ],
}

export const ContactUsMessages: CollectionConfig = {
  slug: 'contact-us-messages',
  access: submissionOnly,
  admin: { useAsTitle: 'email', group: 'Submissions' },
  hooks: { afterChange: [notifyContact] },
  fields: [
    { name: 'first_name', type: 'text', required: true },
    { name: 'last_name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'mobile', type: 'text' },
    { name: 'company', type: 'textarea' },
    { name: 'project_type', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
  ],
}

export const MailingLists: CollectionConfig = {
  slug: 'mailing-lists',
  access: submissionOnly,
  admin: { useAsTitle: 'email', group: 'Submissions' },
  fields: [
    { name: 'email', type: 'email', required: true, unique: true },
  ],
}
