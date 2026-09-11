import type { ReactNode } from 'react'
import Link from 'next/link'
import { Prose } from 'quire'
import { store } from '@/lib/store'
import { NAME } from '@/lib/fellowship'

type Piece = NonNullable<Awaited<ReturnType<typeof store.getPiece>>>

/**
 * A piece's page, shared by /writings/[slug] and /scratch so that the scratch shows a test
 * piece through exactly the renderer a reader gets. `notice` goes above the masthead.
 */
export function PieceArticle({ w, notice }: { w: Piece; notice?: ReactNode }) {
  const date = new Date(w.published_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })

  return (
    <main>
      {notice}
      <header className="masthead" style={{ paddingTop: '3.5rem' }}>
        <Link href="/" className="mark" aria-label={`${NAME} home`} style={{ display: 'block', width: '46px' }} />
      </header>

      <article className="shell" style={{ marginTop: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 2.75rem)', lineHeight: 1.14, margin: 0 }}>
          {w.title}
        </h1>
        {w.subtitle && (
          <p style={{ color: 'var(--ink-soft)', fontSize: '1.1875rem', marginTop: '0.9rem', lineHeight: 1.45 }}>
            {w.subtitle}
          </p>
        )}
        <p className="meta" style={{ marginTop: '1.5rem' }}>{date}</p>

        {w.hero && (
          <figure className="hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={store.resolveUrl(w.hero.src)} alt={w.hero.alt} width={w.hero.width} height={w.hero.height} />
            {/* What the picture means here (publish.yaml cover_caption). Missing until the scratch
                page showed it, 2026-09-11: muffinlabs rendered it, this site dropped it. */}
            {w.hero.caption && <figcaption>{w.hero.caption}</figcaption>}
          </figure>
        )}

        {/*
          Rendered by quire, the renderer shared with the other sites, so a fix to
          footnotes or link handling lands everywhere rather than here alone.
        
          No classNames are passed on purpose: this site styles prose with a `.prose`
          CSS block that targets elements, and quire emits those elements — the styling
          written for velite's HTML applies unchanged.

          resolveUrl points at the store: a bundle never names a host, and this is the
          one place that is undone.
        */}
        <div className="prose">
          <Prose resolveUrl={store.resolveUrl}>
            {w.body}
          </Prose>
        </div>

        {/* At the end rather than under the title: a reader who has finished a piece is
            the one asking for more like it. */}
        {(w.tags?.length ?? 0) > 0 && (
          <p className="meta" style={{ marginTop: '4rem' }}>
            Tagged{' '}
            {w.tags!.map((t, i) => (
              <span key={t.tag}>
                {i > 0 && ', '}
                <Link href={`/writings/?tag=${t.tag}`}>{t.label}</Link>
              </span>
            ))}
            .
          </p>
        )}

        {(w.syndicated?.length ?? 0) > 0 && (
          <p className="meta" style={{ marginTop: '4rem' }}>
            Also published at{' '}
            {w.syndicated!.map((s, i) => (
              <span key={s.url}>
                {i > 0 && ', '}
                <a href={s.url}>{s.platform}</a>
              </span>
            ))}
            .
          </p>
        )}

        <p style={{ marginTop: '2.5rem' }}>
          <Link href="/writings">← All writings</Link>
        </p>
      </article>
    </main>
  )
}
