import type { Metadata } from 'next'
import { getScratch } from '@/lib/store'
import { PieceArticle } from '../writings/PieceArticle'

// A test's view of a piece through this site's real renderer, published nowhere: the store's
// scratch record (quire 0.16, 2026-09-11). Never indexed, never in the sitemap or a list.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Scratch',
  robots: { index: false, follow: false },
}

const notice = (
  <p className="label" style={{ textAlign: 'center', padding: '0.75rem', margin: 0,
    borderBottom: '1px solid var(--amber)', color: 'var(--amber)' }}>
    Scratch — a test render, not published
  </p>
)

export default async function Scratch() {
  // A scratch that does not validate is exactly what a test needs to see, so it is shown, not
  // turned into a 500 (the first fixture's digest was not hex, 2026-09-11).
  let w: Awaited<ReturnType<typeof getScratch>> = null
  let problem: string | null = null
  try {
    w = await getScratch()
  } catch (e) {
    problem = (e as Error).message
  }
  if (problem) {
    return (
      <main>
        {notice}
        <p className="shell" style={{ marginTop: '4rem' }}>
          The scratch piece is in the store but does not render: <code>{problem}</code>
        </p>
      </main>
    )
  }
  if (!w) {
    return (
      <main>
        {notice}
        <p className="shell" style={{ marginTop: '4rem' }}>No scratch piece has been uploaded.</p>
      </main>
    )
  }
  return <PieceArticle w={w} notice={notice} />
}
