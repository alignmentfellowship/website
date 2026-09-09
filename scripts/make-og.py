#!/usr/bin/env python3
"""make-og.py — build the 1200x630 link-preview images.

WHY THESE ARE FILES AND NOT GENERATED AT REQUEST TIME
  The site is a static export: there is no server to render an image on demand. That
  is the same property that lets it redeploy anywhere, so the images are built here and
  committed like any other asset.

WHY JPEG
  The essays' own images are WebP, which is right for the page and wrong for a link
  preview: iMessage, and several other unfurlers, will show nothing rather than a WebP.
  A preview that silently fails is worse than no preview, so these are JPEG.

TWO KINDS
  A piece with a hero gets its hero, cover-cropped. Everything else gets a plain card —
  the mark, the title, the wordmark, on the luminous ground. The card carries no
  promise and no ornament, per brand.md; the unfurler prints the title and description
  itself, so the image does not have to shout them.

USAGE
  python3 scripts/make-og.py
"""
import pathlib
import re
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og"
W, H = 1200, 630

GROUND = (244, 246, 247)
INK = (25, 26, 28)
INK_FAINT = (124, 129, 137)
AMBER = (170, 122, 54)

# Vendored, not read out of the writing desk: this repo has to build for anyone who
# clones it, and a script reaching into a private sibling checkout does not.
MARK_PNG = ROOT / "scripts" / "assets" / "mark.png"
MARK_BOX = (263, 222, 917, 1119)

# Charter is the first fallback in the site's own serif stack, so a card set in it is
# the same voice as the page it previews.
SERIF = "/System/Library/Fonts/Supplemental/Charter.ttc"
SANS = "/System/Library/Fonts/Supplemental/Verdana.ttf"


def font(path, size, index=0):
    try:
        return ImageFont.truetype(path, size, index=index)
    except Exception:
        return ImageFont.load_default()


def mark(height):
    """The glyph as flat amber with clean alpha, at the requested height."""
    import numpy as np

    src = Image.open(MARK_PNG).convert("RGB").crop(MARK_BOX)
    a = np.asarray(src).astype("float32")
    ink = 1.0 - (a.mean(axis=2) / 255.0)
    ink = np.clip((ink - 0.06) / 0.80, 0, 1)
    glyph = Image.new("RGBA", src.size, AMBER + (0,))
    glyph.putalpha(Image.fromarray((ink * 255).astype("uint8"), "L"))
    w, h = glyph.size
    return glyph.resize((max(1, round(w * height / h)), height), Image.LANCZOS)


def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ""
    for word in words:
        trial = f"{cur} {word}".strip()
        if draw.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def card(title, subtitle=None):
    """The plain card: mark, title, wordmark. One accent, no ornament."""
    im = Image.new("RGB", (W, H), GROUND)
    d = ImageDraw.Draw(im)

    m = mark(150)
    im.paste(m, ((W - m.width) // 2, 74), m)

    title_f = font(SERIF, 62)
    lines = wrap(d, title, title_f, W - 260)[:3]
    y = 286
    for ln in lines:
        d.text(((W - d.textlength(ln, font=title_f)) / 2, y), ln, font=title_f, fill=INK)
        y += 74

    if subtitle:
        # Roman, not Charter's italic: its capital A is a pointed swash form that reads
        # as a lambda at this size. Size and colour already separate it from the title.
        sub_f = font(SERIF, 30)
        subs = wrap(d, subtitle, sub_f, W - 300)
        # Two lines, and all of it or none. A subtitle cut mid-sentence reads as a bug,
        # and the unfurler prints the description next to the image anyway — so dropping
        # one that will not fit costs nothing a reader can see.
        if len(subs) <= 2:
            for i, ln in enumerate(subs):
                d.text(((W - d.textlength(ln, font=sub_f)) / 2, y + 6 + i * 40),
                       ln, font=sub_f, fill=INK_FAINT)

    word_f = font(SANS, 20)
    wm = "A L I G N M E N T   F E L L O W S H I P"
    d.text(((W - d.textlength(wm, font=word_f)) / 2, H - 74), wm, font=word_f, fill=INK_FAINT)
    return im


def from_hero(path):
    """Cover-crop a hero to the preview's aspect, biased slightly above centre so a
    subject near the top of the frame is not cut at the chin."""
    im = Image.open(path).convert("RGB")
    scale = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = (im.width - W) // 2
    top = max(0, int((im.height - H) * 0.4))
    return im.crop((left, top, left + W, top + H))


def front_matter(md_path):
    text = md_path.read_text()
    if not text.startswith("---"):
        return {}
    block = text.split("---", 2)[1]
    out, key = {}, None
    for line in block.split("\n"):
        m = re.match(r"^(\w+):\s*(.*)$", line)
        if m:
            key = m.group(1)
            out[key] = m.group(2).strip()
        elif key == "hero" and "src:" in line:
            out["hero_src"] = line.split("src:", 1)[1].strip()
    return out


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    made = {"hero": 0, "card": 0}

    for md in sorted((ROOT / "content" / "writings").glob("*.md")):
        fm = front_matter(md)
        slug = fm.get("slug") or md.stem
        hero = fm.get("hero_src")
        dest = OUT / f"{slug}.jpg"
        if hero:
            src = ROOT / "public" / hero.lstrip("/")
            if src.exists():
                from_hero(src).save(dest, "JPEG", quality=86, optimize=True)
                made["hero"] += 1
                continue
        card(fm.get("title") or slug, fm.get("subtitle")).save(
            dest, "JPEG", quality=90, optimize=True
        )
        made["card"] += 1

    for name, title, sub in [
        ("home", "In tune.", "A rational approach to following Jesus"),
        ("vow", "The vow", "The one thing asked, and the things never asked"),
        ("writings", "The writings", "The founding library"),
    ]:
        card(title, sub).save(OUT / f"{name}.jpg", "JPEG", quality=90, optimize=True)
        made["card"] += 1

    total = sum(f.stat().st_size for f in OUT.glob("*.jpg"))
    print(f"  og images: {made['hero']} from heroes, {made['card']} cards, "
          f"{total / 1e6:.1f} MB total")


if __name__ == "__main__":
    sys.exit(main())
