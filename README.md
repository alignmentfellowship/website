# alignmentfellowship.org

The Alignment Fellowship's home on the web, and the canonical address of its founding
writings.

The writings are also published at [Being Good](https://elmuffin.substack.com) — Substack
for reach, this site for permanence. Neither is a mirror of the other: each piece carries
a `canonical` pointing here and records its syndication elsewhere.

## Why it is built this way

**Static HTML, and deliberately so.** `next build` emits plain files. There is no server,
no database, and no runtime dependency on any host — this output redeploys to Cloudflare
Pages, Netlify, GitHub Pages, S3 or a thumb drive without a code change. A publication that
means to outlast its infrastructure should be the simplest artifact that can carry it.

**Self-contained.** Content and images are vendored into the repo rather than fetched at
build. Clone it and it builds; fork it and you have the whole publication, pictures
included. That property is worth more than the few megabytes it costs.

**No door.** No sign-up, no mailing list, no analytics, no count of how many. Those are
refusals in the Fellowship's own brand document, not omissions.

## Stack

- **Next.js 16** (App Router), static export
- **Velite** — typed content collections; the schema in `velite.config.ts` is the contract
  with the bundle spec, so a malformed export fails the build instead of shipping
- **Newsreader** / **IBM Plex Sans**, self-hosted at build

## Content

Content is not authored here. It is exported from a private writing desk as a
**scriptorium content bundle** (`framework/docs/BUNDLE.md` in
[scriptorium](https://github.com/ericgarcia/scriptorium)) and vendored in:

```bash
./scripts/import-bundle.sh /path/to/bundle
npm run og      # rebuild link-preview images; local only, needs Pillow + macOS fonts
npm run build
```

`npm run og` is deliberately not part of `npm run build`: the deploy host has neither
Pillow nor the system serif the cards are set in. The images are committed, so a deploy
just serves them.

The exporter strips everything desk-internal — the header above the first `---`, HTML
comments, and dagger-marked verify notes inside footnotes — and refuses to export a piece
that has not opted in with `site: true`. `content/library.json` carries the grouping, which
comes from the desk's own index of the founding writings.

Editing `content/` by hand will be overwritten on the next import. Fix the draft on the
desk and re-export.

## Develop

```bash
npm install
npm run dev
```

## Licence

Code is MIT (`LICENSE`). **The writings are not**: they are © Eric Garcia, all rights
reserved, and published here to be read and argued with rather than reused. See
`content/LICENSE`.
