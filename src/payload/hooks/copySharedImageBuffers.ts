import { types } from 'util'

import type { CollectionBeforeChangeHook } from 'payload'

/**
 * Copy image buffers out of shared (WebAssembly) memory before they are uploaded.
 *
 * `sharp` ships a native binary per platform and silently falls back to
 * `@img/sharp-wasm32` when none can be loaded (see sharp/dist/sharp.cjs). The
 * WASM build hands back Buffers that are views over its Emscripten heap, which
 * is a SharedArrayBuffer — and `fetch` flatly refuses to send one as a request
 * body:
 *
 *   TypeError: ArrayBuffer: SharedArrayBuffer is not allowed.
 *
 * `@vercel/blob`'s `put()` is a `fetch` with the buffer as the body, so every
 * media upload from the deployed admin died there while working locally, where
 * the native macOS binary loads. `serverExternalPackages: ['sharp']` in
 * next.config.ts is the real fix — it stops Next bundling sharp so the native
 * Linux binary is traced into the function. This hook is the safety net: if the
 * native binary is ever unavailable again, uploads still succeed (just slower)
 * instead of failing outright.
 *
 * Copying is skipped entirely when the buffer is already backed by a normal
 * ArrayBuffer, so with native sharp this costs nothing.
 */
const detach = (buffer: Buffer): Buffer =>
  types.isSharedArrayBuffer(buffer.buffer) ? Buffer.from(buffer) : buffer

export const copySharedImageBuffers: CollectionBeforeChangeHook = ({ data, req }) => {
  if (req.file?.data) {
    req.file.data = detach(req.file.data)
  }

  // Populated by generateFileData, which runs before this hook.
  if (req.payloadUploadSizes) {
    for (const [size, buffer] of Object.entries(req.payloadUploadSizes)) {
      req.payloadUploadSizes[size] = detach(buffer)
    }
  }

  return data
}
