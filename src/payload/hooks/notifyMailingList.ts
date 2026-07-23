import type { CollectionAfterChangeHook } from 'payload'

import { emailIsConfigured, SITE_URL } from '../email'

type ContentKind = 'Project' | 'Article'

/**
 * Ported from setupNotificationPageActions in newStrapi/src/index.ts.
 *
 * Two changes from the original:
 *  - the send is awaited. Strapi fired a floating `(async () => {})()` that was
 *    never awaited; on a serverless function the process can end before the SMTP
 *    handshake completes and the mail is lost with no error.
 *  - the link includes the route segment. The original built
 *    `anjalielastomer.com/{documentId}`, which is not a route on this site.
 */
export const notifyMailingList =
  (kind: ContentKind): CollectionAfterChangeHook =>
  async ({ doc, operation, req }) => {
    if (operation !== 'create') return doc

    const { payload } = req

    if (!emailIsConfigured) {
      payload.logger.error(
        `[email] ${kind} "${doc.title}" created but SMTP is not configured — mailing-list blast NOT sent.`,
      )
      return doc
    }

    const path = kind === 'Project' ? 'projects' : 'article'
    const url = `${SITE_URL}/${path}/${doc.id}`

    try {
      const mailingList = await payload.find({
        collection: 'mailing-lists',
        limit: 0, // all subscribers
        depth: 0,
        overrideAccess: true,
      })

      const recipients = mailingList.docs
        .map((entry) => entry.email as string)
        .filter(Boolean)

      if (recipients.length === 0) {
        payload.logger.info(`[email] No mailing-list subscribers; skipping ${kind} blast.`)
        return doc
      }

      await payload.sendEmail({
        to: process.env.SMTP_USERNAME,
        bcc: recipients,
        subject: `🚀 New ${kind} Just Added: ${doc.title} on Anjali Elastomer!`,
        text: [
          'Hi,',
          '',
          `We're excited to let you know that a new ${kind.toLowerCase()} titled "${doc.title}" has just been added to Anjali Elastomer!`,
          '',
          "Whether you're exploring our work or following our latest updates, this new addition is something we think you'll find valuable and interesting.",
          '',
          `Check it out now: ${url}`,
          '',
          'Thank you for being a part of our growing community.',
          '',
          'Warm regards,',
          'Team Anjali Elastomer',
          '',
          '---',
          "You're receiving this email because you subscribed to updates from Anjali Elastomer.",
        ].join('\n'),
      })

      payload.logger.info(
        `[email] ${kind} blast sent to ${recipients.length} mailing-list subscriber(s).`,
      )
    } catch (error) {
      // Never fail the content save because the notification failed, but make
      // the failure loud — silent loss is the defect being fixed here.
      payload.logger.error(
        `[email] Failed to send ${kind} blast for "${doc.title}": ${(error as Error).message}`,
      )
    }

    return doc
  }
