import type { Metadata } from 'next'
import { Newsreader, IBM_Plex_Sans } from 'next/font/google'
import Link from 'next/link'
import { NAME, SUBSTACK } from '@/lib/fellowship'
import './globals.css'

// brand.md: "a quiet serif display, the way the reference sets its one line, over a
// plain sans for everything small." Newsreader is bookish and unhurried and carries
// long prose; Plex Sans is plain in the engineered way the rational register wants.
// Self-hosted at build, so the site has no runtime dependency on a font CDN.
const serif = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  style: ['normal', 'italic'],
})

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alignmentfellowship.org'),
  title: { default: NAME, template: `%s — ${NAME}` },
  description:
    'A rational approach to following Jesus. It asks for one thing, faith in, and never for the other thing, faith that.',
  openGraph: { siteName: NAME, type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <footer className="foot">
          <div className="wide">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/vow">The vow</Link>
              <Link href="/writings">Writings</Link>
              <a href={SUBSTACK} rel="me">
                Substack
              </a>
            </nav>
            <p style={{ marginTop: '1.5rem', maxWidth: '30rem' }}>
              The writings are also published at{' '}
              <a href={SUBSTACK}>Being Good</a>. This is where they live.
            </p>
            {/* No sign-up, no mailing list, no count of how many. brand.md, "How this
                dies": the day a door appears, it has become the thing it stands against. */}
          </div>
        </footer>
      </body>
    </html>
  )
}
