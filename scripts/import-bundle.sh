#!/usr/bin/env bash
# Vendor a scriptorium content bundle into this repo.
#
# The bundle is generated on the private writing desk; what lands here is the public
# artifact. Vendoring rather than submoduling is deliberate: this repo has to build
# standalone for anyone who clones it, so that a fork carries the whole publication.
#
#   ./scripts/import-bundle.sh /path/to/bundle
#
# Bundle images are relative (`../images/<slug>/x.webp`) because the bundle spec says
# they always are. Next serves from /public, so they move there and the references are
# rewritten to match. That rewrite is the ONLY edit made to exported content.
set -euo pipefail

BUNDLE="${1:?usage: import-bundle.sh <bundle-dir>}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

[ -f "$BUNDLE/bundle.json" ] || { echo "error: $BUNDLE is not a bundle (no bundle.json)"; exit 1; }

echo "bundle: $(python3 -c '
import json, sys
d = json.load(open(sys.argv[1]))
print("spec %s, %d pieces, generated %s" % (d["bundle_spec"], len(d["pieces"]), d["generated_at"]))
' "$BUNDLE/bundle.json")"

rm -rf "$ROOT/content/writings" "$ROOT/public/images"
mkdir -p "$ROOT/content/writings" "$ROOT/public/images"

cp "$BUNDLE"/content/*.md "$ROOT/content/writings/"
cp -R "$BUNDLE"/images/* "$ROOT/public/images/" 2>/dev/null || true
cp "$BUNDLE/bundle.json" "$ROOT/content/bundle.json"

# ../images/<slug>/x.webp  ->  /images/<slug>/x.webp
find "$ROOT/content/writings" -name '*.md' -exec sed -i '' 's#\.\./images/#/images/#g' {} +

if grep -rq '\.\./images/' "$ROOT/content/writings"; then
  echo "error: unrewritten relative image paths remain"; exit 1
fi

echo "imported: $(ls "$ROOT/content/writings" | wc -l | tr -d ' ') pieces, $(find "$ROOT/public/images" -type f | wc -l | tr -d ' ') images, $(du -sh "$ROOT/public/images" | cut -f1)"
