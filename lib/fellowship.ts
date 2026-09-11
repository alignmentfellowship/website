// The Fellowship's own words. Transcribed verbatim from the desk documents —
// books/alignment-fellowship/{the-vow.md,README.md} — which remain the source of
// record. Nothing here is rephrased: the register is the point, and this file is a
// copy, not an edit.

export const TAGLINE = 'In tune.'

export const STANDFIRST =
  'A rational approach to following Jesus, for anyone who appreciates rationality. ' +
  'It asks for one thing, faith in, and never for the other thing, faith that.'

// the-vow.md, "The one thing asked"
export const VOW = `I do. Not *I believe that*. *I believe in*. In Jesus, whom I cannot see and could never prove, who was on the road ahead of me before I looked up, and who asked me to follow. I give Him my heart, my feet, and my one life. I'll try my best to listen **for** Him and listen **to** Him. When He asks anything of me, the answer on my lips will be **as You wish**, from love, never from fear.`

// the-vow.md, "The things never asked"
export const NEVER_ASKED = [
  'that God exists;',
  'that the earth is any particular age;',
  'anything about anyone’s virginity at any time;',
  'that anyone is in hell, or that hell is a place;',
  'that any book is without error, or that the life is in the book;',
  'that your friend of another faith is lost;',
  'that you are a Christian;',
  'that the person who wrote these essays is right about any of it.',
]

// README.md (the charter), "What it refuses". Each refusal has a live essay behind it,
// so it is argued, not asserted — and the sources are the proof of that, which is why
// they are links and not a footnote. The pairing is the charter's own.
export type Source = { title: string; slug: string }

export const REFUSALS: { name: string; body: string; sources: Source[] }[] = [
  {
    name: 'No hell held over you.',
    body: 'Consequence is real; the warden is not. Separation is the only hell there has ever been, and the door was never locked.',
    sources: [{ title: 'The Way Home Is Down', slug: 'the-way-home-is-down' }, { title: 'The Kingdom That Isn\'t', slug: 'the-kingdom-that-isnt' }, { title: 'The Knowledge of Good and Evil', slug: 'the-knowledge-of-good-and-evil' }],
  },
  {
    name: 'No belief-test at the door.',
    body: 'Faith-that is an opinion; it is not the price of admission and never was.',
    sources: [{ title: 'I Believe in You', slug: 'i-believe-in-you' }, { title: 'In the Name', slug: 'in-the-name-the-ambassador' }],
  },
  {
    name: 'No rolls.',
    body: 'Nobody is counted, and nobody can be counted, because the criterion reads a state and not a standing.',
    sources: [{ title: 'The Sheep in the Basement', slug: 'the-sheep-in-the-basement' }],
  },
  {
    name: 'No door.',
    body: 'You cannot join. You can only walk. There is no form, no fee, no vocabulary check, no one authorized to hand down your next step.',
    sources: [{ title: 'The Highest Peak', slug: 'the-highest-peak' }, { title: 'Secondhand', slug: 'secondhand' }],
  },
  {
    name: 'No founder.',
    body: 'The writings have an author; the Fellowship has none. A word given firsthand cannot be delegated to a person, and that includes the person who wrote the essays.',
    sources: [{ title: 'Secondhand', slug: 'secondhand' }],
  },
  {
    name: 'No cistern.',
    body: 'Anything living pinned to a fixed form becomes the idol. The Fellowship does not get to be permanent, its writings do not get to be scripture, and its name does not get to be holy.',
    sources: [{ title: 'The Fountain and the Cistern', slug: 'the-fountain-and-the-cistern' }],
  },
  {
    name: 'No portrait.',
    body: 'God is not male, not white, not a face. They for the Father, He for the Son, She for the Spirit, and no picture hung where one was taken down.',
    sources: [{ title: 'They/Them', slug: 'they-them' }, { title: 'A Mother Bird Over the Deep', slug: 'a-mother-bird-over-the-deep' }],
  },
  {
    name: 'No merger.',
    body: 'You are a distinct someone and you stay one. Nothing here asks you to dissolve, to see through yourself, or to become God; union is through love, and love needs two.',
    sources: [{ title: 'The Distance That Love Needs', slug: 'the-distance-that-love-needs' }],
  },
  {
    name: 'No selling.',
    body: 'The practice is never for sale: gatherings and resources for learning are always free, and nothing here is a funnel. The Fellowship gives away the one thing that was never for sale.',
    sources: [{ title: 'Nothing to Get', slug: 'nothing-to-get' }],
  },
]

// brand.md: "the mark above the words Alignment Fellowship in a quiet serif, small,
// with generous space between."
export const NAME = 'Alignment Fellowship'
export const SUBSTACK = 'https://elmuffin.substack.com'
