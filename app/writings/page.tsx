import type { Metadata } from 'next'
import Link from 'next/link'
import { listWritings } from '@/lib/store'
import WritingsIndex from './WritingsIndex'
import library from '@/content/library.json'
import { NAME } from '@/lib/fellowship'

export const metadata: Metadata = {
  title: 'The founding writings',
  description:
    'The founding library, read by the question each piece answers for the Fellowship.',
  openGraph: { images: [{ url: '/og/writings.jpg', width: 1200, height: 630 }] },
}

type Entry = { slug: string; title: string; subtitle: string | null; published: boolean }
type Group = { title: string; entries: Entry[] }

export const revalidate = 60

export default async function Writings({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string | string[] }>
}) {
  const writings = await listWritings()
  // Read on the server so a shared ?tag= link -- and every old /writings/tags/<tag> address,
  // which redirects here -- is filtered in the HTML itself, not after script runs.
  const { tag } = await searchParams
  const initialTags = typeof tag === 'string' ? [tag] : Array.isArray(tag) ? tag : []
  const have = new Map(writings.map((w) => [w.slug, w]))

  return (
    <main>
      <header className="masthead">
        <Link href="/" className="mark" aria-label={`${NAME} home`} style={{ display: 'block' }} />
        <h1 className="display" style={{ marginTop: '3rem' }}>The writings</h1>
        <p className="standfirst">
          The founding library, read by the question each piece answers for the
          Fellowship. Argue with any of it; a claim that cannot survive being argued
          with is dropped, not defended.
        </p>
      </header>

      <div className="wide" style={{ marginTop: '2rem' }}>
        {/* The tag filter heads the page (quire/list): with no tag chosen it shows the reading
            order below; a tag replaces the reading order with just the writings that carry it.
            Tags cut across the groups -- the groups are a reading order, a tag is what a piece
            is about -- so one page with a filter, not a page per tag (Eric, 2026-09-11). */}
        <WritingsIndex
          initialTags={initialTags}
          items={writings.map((w) => ({
            slug: w.slug,
            title: w.title,
            subtitle: w.subtitle ?? null,
            tags: w.tags ?? [],
          }))}
        >
          {(library as Group[]).map((group) => (
            <section className="group" key={group.title}>
              <span className="label">{group.title}</span>
              {group.entries.map((e) => {
                const piece = have.get(e.slug)
                // The house rule from writings.md: live pieces link to their page;
                // unpublished ones are named without a link and get one when they go live.
                if (!piece) {
                  return (
                    <div className="entry" key={e.slug}>
                      <div className="entry-title" style={{ color: 'var(--ink-faint)' }}>
                        {e.title}
                        <span className="meta" style={{ marginLeft: '0.6rem' }}>not yet</span>
                      </div>
                    </div>
                  )
                }
                return (
                  <Link className="entry" href={`/writings/${piece.slug}`} key={e.slug}>
                    <div className="entry-title">{piece.title}</div>
                    {piece.subtitle && <div className="entry-sub">{piece.subtitle}</div>}
                  </Link>
                )
              })}
            </section>
          ))}
        </WritingsIndex>
      </div>
    </main>
  )
}
