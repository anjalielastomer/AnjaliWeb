import type { AfterErrorHook } from 'payload'

/**
 * Show the real error message to logged-in admins.
 *
 * Payload deliberately replaces every unhandled 500 with the generic
 * `{"errors":[{"message":"Something went wrong."}]}` in production, because an
 * internal error can carry sensitive data (see `routeError.js` —
 * `isErrorPublic`). The upshot is that a failing admin action is undebuggable
 * from the browser, which is exactly the situation this was written for: media
 * uploads returning 500 with no clue as to why.
 *
 * `config.debug: true` would unmask errors, but for EVERY caller including
 * anonymous visitors on the public API. This is the narrow version: the real
 * message is returned only when the request carries an authenticated admin.
 * Anonymous callers still get the generic text.
 */
export const revealErrorToAdmins: AfterErrorHook = ({ error, req, result }) => {
  if (!req.user) return

  return {
    response: {
      ...result,
      errors: [{ message: `${error.name}: ${error.message}` }],
      stack: error.stack,
    },
  }
}
