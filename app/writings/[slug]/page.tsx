import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { store, listWritings, REVALIDATE } from '@/lib/store'
import { PieceArticle } from '../PieceArticle'

// Must be a literal: Next reads segment config statically, so an imported constant is
// silently not applied. Kept equal to REVALIDATE in @/lib/store.
export const revalidate = 60

export async function generateStaticParams() {
  return (await listWritings()).map((w) => ({ slug: w.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const w = await store.getPiece((await params).slug)
  if (!w) return {}
  return {
    title: w.title,
    description: w.subtitle,
    // This site is the piece's home, so the canonical points here. `syndicated`
    // records where else it lives without making either copy a mirror.
    alternates: { canonical: w.canonical ?? `/writings/${w.slug}` },
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
  const w = await store.getPiece((await params).slug)
  if (!w) notFound()

  return <PieceArticle w={w} />
}
