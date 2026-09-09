import type { MetadataRoute } from 'next'

// Required by `output: 'export'`: these are route handlers, and a static export
// needs them resolved at build time rather than per request.
export const dynamic = 'force-static'

// Open to everyone. There is no door here, and that includes the crawlers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://alignmentfellowship.org/sitemap.xml',
  }
}
