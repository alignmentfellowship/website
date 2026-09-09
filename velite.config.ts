import { defineConfig, defineCollection, s } from 'velite'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

// The schema IS the contract with scriptorium's bundle spec (framework/docs/BUNDLE.md).
// A malformed export fails the build here rather than shipping a broken page — which is
// the whole reason the bundle has a schema instead of being a directory copy.
const image = s.object({
  src: s.string(),
  alt: s.string().default(''),
  width: s.number().optional(),
  height: s.number().optional(),
})

const writings = defineCollection({
  name: 'Writing',
  pattern: 'writings/*.md',
  schema: s
    .object({
      slug: s.string(),
      title: s.string(),
      subtitle: s.string().optional(),
      published_at: s.coerce.date(),
      footnotes: s.enum(['native', 'endnotes', 'none']).default('native'),
      // This site is the piece's home, so it emits no rel=canonical to anywhere else.
      // `syndicated` is where else the same piece lives — Substack, for now.
      canonical: s.string().optional(),
      syndicated: s
        .array(s.object({ platform: s.string(), url: s.string() }))
        .default([]),
      hero: image.optional(),
      images: s.array(image).default([]),
      digest: s.string(),
      content: s.markdown(),
      plain: s.raw(),
    })
    .transform((d) => ({ ...d, url: `/writings/${d.slug}` })),
})

export default defineConfig({
  root: 'content',
  output: { data: '.velite', clean: true },
  collections: { writings },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})
