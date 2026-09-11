import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { listTagged, listTags } from '@/lib/store'
import { NAME } from '@/lib/fellowship'

// A literal, for the same reason as the piece page: Next reads segment config statically.
export const revalidate = 60

export async function generateStaticParams() {
  return (await listTags()).map((t) => ({ tag: t.tag }))
}

/** The tag's label comes from the pieces carrying it; a tag nothing carries is a 404. */
async function load(tag: string) {
  const pieces = await listTagged(tag)
  const label = pieces[0]?.tags?.find((t) => t.tag === tag)?.label
  return label ? { tag, label, pieces } : null
}

export async function generateMetadata(
  { params }: { params: Promise<{ tag: string }> }
): Promise<Metadata> {
  const found = await load((await params).tag)
  if (!found) return {}
  return {
    title: found.label,
    description: `The writings tagged ${found.label}.`,
    alternates: { canonical: `/writings/tags/${found.tag}` },
  }
}

export default async function Tag({ params }: { params: Promise<{ tag: string }> }) {
  const found = await load((await params).tag)
  if (!found) notFound()
  const n = found.pieces.length

  return (
    <main>
      <header className="masthead">
        <Link href="/" className="mark" aria-label={`${NAME} home`} style={{ display: 'block' }} />
        <span className="label" style={{ display: 'block', marginTop: '3rem' }}>Tagged</span>
        <h1 className="display" style={{ marginTop: '0.75rem' }}>{found.label}</h1>
      </header>

      <div className="wide" style={{ marginTop: '2rem' }}>
        <section className="group">
          <span className="label">{n} {n === 1 ? 'writing' : 'writings'}</span>
          {found.pieces.map((w) => (
            <Link className="entry" href={`/writings/${w.slug}`} key={w.slug}>
              <div className="entry-title">{w.title}</div>
              {w.subtitle && <div className="entry-sub">{w.subtitle}</div>}
            </Link>
          ))}
        </section>

        <p style={{ marginTop: '2.5rem' }}>
          <Link href="/writings">← All writings</Link>
        </p>
      </div>
    </main>
  )
}
