import type { MetadataRoute } from 'next'

import { listWritings } from '@/lib/store'

// The site renders per request now, so the sitemap follows the store on the same
// window as the pages: a piece published today appears without a deploy.
export const revalidate = 60

const BASE = 'https://alignmentfellowship.org'

// The writings live here and on Substack. This site is home — every piece already
// carries a canonical pointing at it — and a sitemap is how that claim reaches a
// crawler that found the Substack copy first.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/vow/`, priority: 0.8 },
    { url: `${BASE}/writings/`, priority: 0.8 },
    ...(await listWritings()).map((w) => ({
      url: `${BASE}/writings/${w.slug}/`,
      lastModified: new Date(w.published_at),
      priority: 0.6,
    })),
  ]
}
