import type { CollectionConfig } from 'payload'

import { isAdmin } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Brute-force protection: lock the account for 10 minutes after 5 failed
    // logins. This is the main defence against password-guessing on /admin.
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
    // Sessions last 2 hours, then require re-login.
    tokenExpiration: 2 * 60 * 60,
    cookies: {
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production', // HTTPS-only in prod
    },
  },
  admin: { useAsTitle: 'email', group: 'Admin' },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text' },
  ],
}
