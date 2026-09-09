import type { MetadataRoute } from 'next'

// Required by `output: 'export'`: these are route handlers, and a static export
// needs them resolved at build time rather than per request.
export const dynamic = 'force-static'
import { writings } from '#site/content'

const BASE = 'https://alignmentfellowship.org'

// The writings live here and on Substack. This site is home — every piece already
// carries a canonical pointing at it — and a sitemap is how that claim reaches a
// crawler that found the Substack copy first.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, priority: 1 },
    { url: `${BASE}/vow/`, priority: 0.8 },
    { url: `${BASE}/writings/`, priority: 0.8 },
    ...writings.map((w) => ({
      url: `${BASE}${w.url}/`,
      lastModified: new Date(w.published_at),
      priority: 0.6,
    })),
  ]
}
