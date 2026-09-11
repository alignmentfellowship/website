import { createStore } from 'quire/store'

/**
 * Where this site reads its writings from.
 *
 * Until 2026-09-10 the corpus was vendored into this repo and compiled by velite. It
 * now lives in the content store, shared with the other sites, so a correction is an
 * upload rather than a deploy — and a piece published to two outlets is one file, not
 * two copies drifting apart.
 *
 * The trade this makes is real and was made deliberately: the build used to need
 * nothing but this repo. `snapshot.py` is the way back, and the exported HTML is still
 * the durable artifact.
 */
export const STORE_URL =
  process.env.NEXT_PUBLIC_STORE_URL || 'https://d31t97x2b4k0q3.cloudfront.net'

/** This site's name in the store's index. A piece appears here only if it says so. */
export const OUTLET = 'alignmentfellowship'

/** Matches the Cache-Control the exporter puts on content JSON. */
export const REVALIDATE = 60

export const store = createStore({
  base: STORE_URL,
  requestInit: { next: { revalidate: REVALIDATE } },
})

/**
 * Every writing published here, newest first. Pieces only: the index carries talks too,
 * and a talk has no page under /writings.
 */
export const listWritings = () => store.listFor(OUTLET, { kind: 'piece' })

/** Every writing carrying one tag, newest first. */
export const listTagged = (tag: string) => store.listFor(OUTLET, { kind: 'piece', tag })

export type TagCount = { tag: string; label: string; count: number }

/**
 * The tags in use here, most-carried first. Built from the index, not from a list of its
 * own: the desk's vocabulary is the source of record, and a tag no published piece carries
 * has no page to link to.
 */
export async function listTags(): Promise<TagCount[]> {
  const seen = new Map<string, TagCount>()
  for (const w of await listWritings()) {
    for (const t of w.tags ?? []) {
      const c = seen.get(t.tag) ?? { tag: t.tag, label: t.label, count: 0 }
      c.count += 1
      seen.set(t.tag, c)
    }
  }
  return [...seen.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
}
