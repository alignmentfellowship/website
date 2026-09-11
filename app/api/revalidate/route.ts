import { revalidateTag } from 'next/cache'
import { createRevalidateHandler } from 'quire/next'

/**
 * The desk tells the site what it just published, and the next reader gets the new text at
 * once instead of within `revalidate` seconds (quire 0.17). `store_publish.py` POSTs the store
 * keys it uploaded — only after CloudFront already serves them, since this expires immediately.
 *
 * With QUIRE_REVALIDATE_SECRET unset the handler refuses everything (503); it never runs open.
 * The desk's copy of the secret is in the macOS Keychain, service
 * quire-revalidate-alignmentfellowship.
 */
export const POST = createRevalidateHandler({
  secret: process.env.QUIRE_REVALIDATE_SECRET,
  revalidateTag,
})
