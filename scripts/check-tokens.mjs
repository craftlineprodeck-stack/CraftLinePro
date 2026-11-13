#!/usr/bin/env node
// Guards the brand-token and content rules from CLAUDE.md:
// - colors (hex / rgb() / hsl() / oklch()) and font family names only inside theme/
// - next/font imported only in theme/fonts.ts
// - `tel:` links only in components/PhoneLink.tsx
// - no e-mail addresses anywhere in code (the owner's address is form-only)
// - no banned words (licensing claims, wood species we don't use, old company names)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const CODE_EXT = /\.(tsx?|jsx?|mjs|cjs|css|md|json)$/;

const brandDirs = ['app', 'components', 'lib', 'data'];
const allCodeDirs = [...brandDirs, 'theme'];
const extraFiles = ['next.config.ts', 'scripts/check-tokens.mjs'];

function walk(dir) {
  const abs = join(root, dir);
  let entries;
  try {
    entries = readdirSync(abs);
  } catch {
    return [];
  }
  return entries.flatMap((name) => {
    const rel = join(dir, name);
    const st = statSync(join(root, rel));
    if (st.isDirectory()) return walk(rel);
    return CODE_EXT.test(name) ? [rel] : [];
  });
}

const posix = (p) => p.split(sep).join('/');

const rules = [
  {
    name: 'hex color outside theme/',
    dirs: brandDirs,
    re: /#[0-9a-fA-F]{3,8}\b(?![\w-])/g,
  },
  {
    name: 'rgb()/hsl()/oklch() color outside theme/',
    dirs: brandDirs,
    re: /\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb)\s*\(/g,
  },
  {
    name: 'font family outside theme/',
    dirs: brandDirs,
    re: /\b(?:Inter|Oswald|Roboto|Arial|Helvetica|Georgia|Montserrat|Open Sans|Lato|Poppins|Times New Roman)\b|font-family\s*:|next\/font/g,
  },
  {
    name: '`tel:` outside components/PhoneLink.tsx',
    dirs: allCodeDirs,
    skip: (file) => file === 'components/PhoneLink.tsx',
    re: /["'`]tel:|tel:\+/g,
  },
  {
    name: 'e-mail address in code',
    dirs: allCodeDirs,
    files: extraFiles,
    re: new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\\.[A-Za-z]{2,}|' + 'mail' + 'to:', 'g'),
  },
  {
    name: 'banned word',
    dirs: allCodeDirs,
    // assembled from parts so this file does not trip its own rule if scanned
    re: new RegExp(
      ['licen' + 's(?:ed|e)\\b', 'CSLB', 'ced' + 'ar', 'Carmi' + 'chael', 'CraftLine Deck & Fen' + 'ce', 'CraftLine Construc' + 'tion'].join('|'),
      'gi',
    ),
  },
];

const errors = [];
for (const rule of rules) {
  const files = [...rule.dirs.flatMap(walk), ...(rule.files ?? [])].map(posix);
  for (const file of new Set(files)) {
    if (rule.skip?.(file)) continue;
    let text;
    try {
      text = readFileSync(join(root, file), 'utf8');
    } catch {
      continue;
    }
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      for (const m of line.matchAll(rule.re)) {
        errors.push(`${file}:${i + 1}  ${rule.name}: "${m[0]}"`);
      }
    });
  }
}

if (errors.length) {
  console.error(`check:tokens — ${errors.length} problem(s):`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log('check:tokens — OK');
