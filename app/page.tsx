import Link from 'next/link'
import { NAME, TAGLINE, STANDFIRST, VOW, REFUSALS } from '@/lib/fellowship'

// The vow carries **bold** and *italic* in its source. Rendering those two by hand
// rather than pulling a markdown runtime in for one paragraph.
function Emphasised({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') ? (
          <strong key={i} style={{ fontWeight: 600 }}>
            {p.slice(2, -2)}
          </strong>
        ) : p.startsWith('*') ? (
          <em key={i}>{p.slice(1, -1)}</em>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <div className="mark rise rise-1" role="img" aria-label={`${NAME} mark`} />
        <p className="wordmark rise rise-1">{NAME}</p>
        <h1 className="display rise rise-2">{TAGLINE}</h1>
        <p className="standfirst rise rise-3">{STANDFIRST}</p>
      </header>

      <div className="shell">
        <section style={{ marginTop: '6rem' }}>
          <span className="label">The one thing asked</span>
          <blockquote className="vow" style={{ marginTop: '1.5rem' }}>
            <Emphasised text={VOW} />
          </blockquote>
          <p style={{ marginTop: '1.75rem', color: 'var(--ink-soft)' }}>
            It is asked once, freely, and never checked. Nobody has ever asked a bride
            to prove the groom exists.{' '}
            <Link href="/vow">What is never asked →</Link>
          </p>
        </section>

        <section style={{ marginTop: '6rem' }}>
          <span className="label">What it refuses</span>
          <p
            style={{
              marginTop: '1rem',
              marginBottom: '2rem',
              color: 'var(--ink-soft)',
            }}
          >
            Each refusal has a live essay behind it, so it is argued, not asserted.
          </p>
          <ul className="refusals">
            {REFUSALS.map((r) => (
              <li key={r.name}>
                <b>{r.name}</b>
                <span>{r.body}</span>
                <span className="sources">
                  {r.sources.map((s) => (
                    <Link key={s.slug} href={`/writings/${s.slug}`}>
                      {s.title}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: '6rem' }}>
          <span className="label">The writings</span>
          <p style={{ marginTop: '1rem', color: 'var(--ink-soft)' }}>
            The Fellowship adds nothing to the theology. It gives the theology a name
            anyone can say out loud, and a threshold with no door in it. The library is
            a map you are invited to argue with, not a catechism you are required to
            recite.
          </p>
          <p style={{ marginTop: '1.25rem' }}>
            <Link href="/writings">Read the founding library →</Link>
          </p>
        </section>
      </div>
    </main>
  )
}
