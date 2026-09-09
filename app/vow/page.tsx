import type { Metadata } from 'next'
import Link from 'next/link'
import { NAME, VOW, NEVER_ASKED } from '@/lib/fellowship'

export const metadata: Metadata = {
  title: 'The vow',
  description: 'The one thing asked, and the list of things never asked.',
  openGraph: { images: [{ url: '/og/vow.jpg', width: 1200, height: 630 }] },
}

function Emphasised({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? <strong key={i} style={{ fontWeight: 600 }}>{p.slice(2, -2)}</strong>
        : p.startsWith('*') ? <em key={i}>{p.slice(1, -1)}</em>
        : <span key={i}>{p}</span>
      )}
    </>
  )
}

export default function Vow() {
  return (
    <main>
      <header className="masthead">
        <Link href="/" className="mark" aria-label={`${NAME} home`} style={{ display: 'block' }} />
        <h1 className="display" style={{ marginTop: '3rem' }}>The vow</h1>
      </header>

      <div className="shell" style={{ marginTop: '4rem' }}>
        <p>
          No one has ever asked a bride to prove the groom exists before she says
          <em> I do</em>. She is not there to certify a fact. She is there to pledge a
          self. That is the whole of what is asked here, and it is asked once, freely,
          and never checked.
        </p>

        <blockquote className="vow" style={{ margin: '2.5rem 0' }}>
          <Emphasised text={VOW} />
        </blockquote>

        <p>
          Brother Lawrence, asked what it took, said there needed neither art nor
          science for going to God, <em>but only a heart resolutely determined</em>.
          That is the same sentence.
        </p>

        <section style={{ marginTop: '5rem' }}>
          <span className="label">The things never asked</span>
          <p style={{ marginTop: '1rem' }}>
            Nobody here will ever ask you to say that you believe:
          </p>
          <ul style={{ color: 'var(--ink-soft)', paddingLeft: '1.25rem' }}>
            {NEVER_ASKED.map((n) => (
              <li key={n} style={{ marginBottom: '0.55em' }}>{n}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.5rem' }}>
            Every one of those is an opinion, and you may hold any of them at any
            strength from certainty to none, and change your mind on Tuesday, and still
            be walking.
          </p>
        </section>

        <p style={{ marginTop: '4rem' }}>
          <Link href="/writings">The founding library →</Link>
        </p>
      </div>
    </main>
  )
}
