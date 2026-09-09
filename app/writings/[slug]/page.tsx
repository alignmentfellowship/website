import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { writings } from '#site/content'
import { NAME } from '@/lib/fellowship'

export function generateStaticParams() {
  return writings.map((w) => ({ slug: w.slug }))
}

function find(slug: string) {
  return writings.find((w) => w.slug === slug)
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const w = find((await params).slug)
  if (!w) return {}
  return {
    title: w.title,
    description: w.subtitle,
    // This site is the piece's home, so the canonical points here. `syndicated`
    // records where else it lives without making either copy a mirror.
    alternates: { canonical: w.url },
    openGraph: {
      title: w.title,
      description: w.subtitle,
      type: 'article',
      publishedTime: new Date(w.published_at).toISOString(),
      // The page's hero is WebP, which several unfurlers (iMessage among them) will
      // not render — they show nothing rather than fall back. Every piece gets a JPEG
      // preview built by scripts/make-og.py instead.
      images: [{ url: `/og/${w.slug}.jpg`, width: 1200, height: 630, alt: w.title }],
    },
  }
}

export default async function Piece({ params }: { params: Promise<{ slug: string }> }) {
  const w = find((await params).slug)
  if (!w) notFound()

  const date = new Date(w.published_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })

  return (
    <main>
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
            <img src={w.hero.src} alt={w.hero.alt} width={w.hero.width} height={w.hero.height} />
          </figure>
        )}

        <div className="prose" dangerouslySetInnerHTML={{ __html: w.content }} />

        {w.syndicated.length > 0 && (
          <p className="meta" style={{ marginTop: '4rem' }}>
            Also published at{' '}
            {w.syndicated.map((s, i) => (
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
