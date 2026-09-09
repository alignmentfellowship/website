import type { Metadata } from 'next'
import Link from 'next/link'
import { writings } from '#site/content'
import library from '@/content/library.json'
import { NAME } from '@/lib/fellowship'

export const metadata: Metadata = {
  title: 'The founding writings',
  description:
    'The founding library, read by the question each piece answers for the Fellowship.',
}

type Entry = { slug: string; title: string; subtitle: string | null; published: boolean }
type Group = { title: string; entries: Entry[] }

export default function Writings() {
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
                <Link className="entry" href={piece.url} key={e.slug}>
                  <div className="entry-title">{piece.title}</div>
                  {piece.subtitle && <div className="entry-sub">{piece.subtitle}</div>}
                </Link>
              )
            })}
          </section>
        ))}
      </div>
    </main>
  )
}
