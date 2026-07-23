import type { Access } from 'payload'

/**
 * Any authenticated admin user. Payload's `users` collection is admin-only,
 * so "has a user" is equivalent to "is an admin" here.
 */
export const isAdmin: Access = ({ req }) => Boolean(req.user)

/** Readable by the public site without authentication. */
export const anyone: Access = () => true

/**
 * Public content WITHOUT drafts (e.g. media).
 */
export const publicContent = {
  read: anyone,
  create: isAdmin,
  update: isAdmin,
  delete: isAdmin,
}

/**
 * Read access for drafts-enabled collections.
 *
 * `read: () => true` is NOT sufficient once `versions.drafts` is on — it grants
 * the public unpublished documents too. Admins see everything; anonymous
 * callers get a query constraint limiting them to published documents.
 */
export const publishedOnly: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}

/**
 * Public content WITH drafts: readable by anyone once published.
 */
export const publicDraftContent = {
  read: publishedOnly,
  create: isAdmin,
  update: isAdmin,
  delete: isAdmin,
}

/**
 * Form submissions holding personal data (resumes, emails, phone numbers).
 * The public may submit, but only admins may ever read them back.
 * Strapi enforced this via config/sync/user-role.public.json; in Payload it is
 * code, and getting it wrong publishes personal data.
 */
export const submissionOnly = {
  create: anyone,
  read: isAdmin,
  update: isAdmin,
  delete: isAdmin,
}
