#!/usr/bin/env node
// Every git-tag dependency in package.json must be what package-lock.json resolves.
//
// Why: on 2026-09-11 package.json named quire#v0.15.0 while the lockfile still resolved the
// v0.14.0 commit. Vercel installs from the lockfile, got the old API, and failed the build;
// the local build passed only because node_modules had been patched by hand. This compares the
// two files and the tag on GitHub, never node_modules, so a patched checkout cannot hide it.
// Runs from .githooks/pre-push (it needs the network for `git ls-remote`).
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };
let bad = 0;
for (const [name, spec] of Object.entries(deps)) {
  const m = /^github:([^/]+)\/([^#]+)#(.+)$/.exec(spec);
  if (!m) continue;
  const [, owner, repo, ref] = m;
  const resolved = lock.packages?.[`node_modules/${name}`]?.resolved ?? '';
  const locked = resolved.split('#')[1] ?? '';
  // An annotated tag lists its own object and the commit it points at (^{}); take the commit.
  const out = execFileSync('git', ['ls-remote', `https://github.com/${owner}/${repo}.git`,
    ref, `refs/tags/${ref}^{}`], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  const peeled = out.find((l) => l.endsWith('^{}')) ?? out[0];
  const want = peeled?.split('\t')[0];
  if (!want) { console.error(`check-lock: ${name}: ${ref} not found on ${owner}/${repo}`); bad++; continue; }
  if (want !== locked) {
    console.error(`check-lock: ${name}: package.json asks for ${ref} (${want.slice(0, 7)}) but ` +
      `package-lock.json resolves ${locked.slice(0, 7) || 'nothing'}.\n  fix: npm install ${spec}`);
    bad++;
  } else console.log(`check-lock: ${name} ${ref} = ${want.slice(0, 7)}, as locked`);
}
process.exit(bad ? 1 : 0);
