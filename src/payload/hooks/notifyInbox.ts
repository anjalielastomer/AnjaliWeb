import type { CollectionAfterChangeHook } from 'payload'

import { CAREERS_INBOX, CONTACT_INBOX, emailIsConfigured } from '../email'

/**
 * Ported from setupCareerRequestNotificationActions and
 * setupContactUsNotificationActions in newStrapi/src/index.ts.
 * As with the mailing-list blast, the send is awaited rather than floating.
 */

const guard = (
  label: string,
  send: (payload: Parameters<CollectionAfterChangeHook>[0]['req']['payload'], doc: Record<string, unknown>) => Promise<void>,
): CollectionAfterChangeHook => {
  return async ({ doc, operation, req }) => {
    if (operation !== 'create') return doc

    const { payload } = req

    if (!emailIsConfigured) {
      payload.logger.error(
        `[email] ${label} received but SMTP is not configured — notification NOT sent.`,
      )
      return doc
    }

    try {
      await send(payload, doc)
      payload.logger.info(`[email] ${label} notification sent.`)
    } catch (error) {
      payload.logger.error(
        `[email] Failed to send ${label} notification: ${(error as Error).message}`,
      )
    }

    return doc
  }
}

export const notifyCareers = guard('Career request', async (payload, doc) => {
  await payload.sendEmail({
    to: CAREERS_INBOX,
    subject: 'New Career Request Received',
    text: [
      'Hi Team,',
      '',
      'A new career request has been submitted.',
      '',
      'Details:',
      `- Name: ${doc.name}`,
      `- Email: ${doc.email}`,
      `- Mobile: ${doc.contact}`,
      `- Position: ${doc.position ?? '—'}`,
      '',
      'Please review the request at your earliest convenience.',
      '',
      'Best regards,',
      'Anjali Elastomer Team',
    ].join('\n'),
  })
})

export const notifyContact = guard('Contact-us message', async (payload, doc) => {
  await payload.sendEmail({
    to: CONTACT_INBOX,
    subject: 'New Contact Us Message Received',
    text: [
      'Hi Team,',
      '',
      'A new message has been received through the Contact Us form.',
      '',
      'Details:',
      `- Name: ${doc.first_name} ${doc.last_name}`,
      `- Email: ${doc.email}`,
      `- Mobile: ${doc.mobile ?? '—'}`,
      `- Company: ${doc.company ?? '—'}`,
      `- Project Type: ${doc.project_type ?? '—'}`,
      `- Message: ${doc.message}`,
      '',
      'Please respond to the message at your earliest convenience.',
      '',
      'Best regards,',
      'Anjali Elastomer Team',
    ].join('\n'),
  })
})
