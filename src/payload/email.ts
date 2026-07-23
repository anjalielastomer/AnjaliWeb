import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

/**
 * Ported from newStrapi/src/extensions/mail/mailer.ts.
 *
 * The Strapi original fell back to a hardcoded Ethereal account
 * (vicky98@ethereal.email) whenever SMTP_* was unset. Ethereal is a fake inbox
 * that accepts and discards mail without error, so misconfiguration looked like
 * success. That fallback is deliberately gone: without credentials we either
 * refuse to boot (production) or run with email disabled and say so (dev).
 */

const required = ['SMTP_HOST', 'SMTP_USERNAME', 'SMTP_PASSWORD'] as const

const missing = required.filter((key) => !process.env[key])

export const emailIsConfigured = missing.length === 0

// `next build` evaluates this module without runtime secrets, so the hard
// failure is scoped to an actually-serving process.
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build'

// Escape hatch for running a *local* production build (or CI) without real
// SMTP. Never set this on the deployed site — that is exactly the silent-mail-
// loss the guard exists to prevent.
const allowMissing = process.env.ALLOW_MISSING_SMTP === 'true'

if (!emailIsConfigured && !isBuildPhase) {
  const detail = `SMTP is not configured. Missing: ${missing.join(', ')}.`

  if (process.env.NODE_ENV === 'production' && !allowMissing) {
    throw new Error(
      `${detail} Refusing to start — career, contact and mailing-list notifications would be lost silently. ` +
        `Set ALLOW_MISSING_SMTP=true only for local/CI testing.`,
    )
  }

  console.warn(`[email] ${detail} Outgoing email is DISABLED for this session.`)
}

export const emailAdapter = emailIsConfigured
  ? nodemailerAdapter({
      defaultFromAddress: process.env.SMTP_USERNAME as string,
      defaultFromName: process.env.SMTP_FULL_NAME || 'Anjali Elastomer',
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: (process.env.SMTP_SECURE || 'false') === 'true',
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
    })
  : undefined

/** Where career applications are routed. */
export const CAREERS_INBOX = process.env.CAREERS_EMAIL || 'careers@anjalielastomer.com'

/** Where contact-us submissions are routed. */
export const CONTACT_INBOX = process.env.CONTACT_EMAIL || 'info@anjalielastomer.com'

/** Public site origin, used to build links in notification emails. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://anjalielastomer.com'
