# CLAUDE.md — CraftLine Decking website

Instructions for Claude Code working in this repository. Read fully before any change.

## Business
- **Name:** CraftLine Decking (legal entity CraftLine LLC). Never use the old names "CraftLine Deck & Fence" or "CraftLine Construction".
- **Owners / crew:** Alex and Viktor. Own crew, same people from estimate to final walkthrough.
- **Phone:** (279) 237-9912 · **Email:** CraftLine.Prodeck@gmail.com (never render as plain text on the site — form only)
- **Site:** https://craftlineprodeck.com · **Instagram:** @craftline.sacramento
- **Positioning:** "Decks are all we do" + Ipe & exotic hardwood restoration experts (a niche no local competitor covers).

## Services
- **Building:** Redwood decks, Trex composite decks (PVC later).
- **Redwood restoration:** deep sanding + stain/oil, board replacement, fastener reset, frame repair and reinforcement.
- **Ipe & hardwood restoration (premium):** Ipe, Cumaru, Tigerwood, Garapa, Dasso bamboo — restoration, board replacement, oil maintenance.
- **Related:** railings (Redwood, composite, aluminum), stairs, pergolas. Fences are secondary (existing clients only).
- **Materials we name:** Messmer's UV Plus, Penofin, Armstrong Clark oils; Diablo SandNET abrasives; TrexPro.
- **Do NOT offer:** patio enclosures, porch construction, painting decks with paint.

## Text rules (hard)
- All site copy in **English**.
- **No "licensed"** and no CSLB number until the license is issued (owner will say when).
- **Never mention cedar** (not used in region) or **Carmichael**.
- No keyword stuffing, no invented awards/stats, no "hundreds of satisfied customers", no fake reviews. Only verifiable numbers, identical everywhere.
- No "near me / best / top rated / cost" stuffing in headings.
- Don't claim insurance, permits handled, warranty terms, response-time promises, pricing or "N projects per month" until the owner confirms (see Open decisions).

## Geography
- General city: **Sacramento**.
- Primary: **Fair Oaks, Folsom**. Then **Orangevale, Granite Bay** (premium), **Citrus Heights** (secondary).
- Expansion: Roseville, Rocklin, El Dorado Hills, Auburn.
- A city page exists only with **2+ real projects** in that city. No service × city pages for now. No neighborhood pages without real jobs.

## Stack
- Next.js (App Router, static generation), TypeScript, Tailwind v4.
- **Design tokens in one file** so the brand can be swapped in ~1 hour. Temporary brand: Ocean Slate `#1E2B32`, Warm Amber `#D49A44`, logo = layered diamond + CRAFTLINE / DECKING. Final identity from the designer by Dec 15 (logo SVG) — never hardcode colors/fonts outside tokens.
- Content lives in **data files** (services, cities, projects, reviews). New project or city = new data file, no layout changes. Projects and reviews link to cities via a `city` field.
- Hosting: **Netlify** (deploys from `main`, preview per PR). Domain DNS at Squarespace.
- Images: WebP/JPEG in repo, never HEIC. Alt text and captions as "service — material — city".

## Workflow
- New site is built in branch **`v2`**. Quick fixes to the live site go in small branches off `main`.
- Branch → PR → check Netlify preview → owner merges. Never push directly to `main`.
- Run `npm run build` and `npm run lint` before opening a PR.
- One task at a time; keep PRs small and described in plain language.

## Site structure (v2)
| URL | Page | Main query |
|---|---|---|
| `/` | Home | deck builder Sacramento |
| `/ipe-hardwood-deck-restoration` | Ipe & hardwood | Ipe deck restoration Sacramento |
| `/redwood-deck-restoration` | Redwood restoration | deck restoration / sanding and staining |
| `/deck-building` | Building (Redwood, Trex) | deck builder / Trex deck installation |
| `/deck-repair` | Repair, boards, framing | deck repair |
| `/deck-railings-stairs` | Railings & stairs | deck railing installation |
| `/pergolas` | Pergolas | pergola builder |
| `/areas/[city]` | City pages | deck builder + city |
| `/projects`, `/projects/[slug]` | Projects | material + city |
| `/reviews`, `/about`, `/contact`, `/deck-academy`, `/blog`, `/privacy` | Utility | — |

Dec 1 launch minimum: home, 5 service pages, Fair Oaks, Folsom, projects, contact.

**City page template:** city-specific H1 → short form → unique intro → services for the city → permits (City of Folsom / Sacramento County for Fair Oaks & Orangevale) → projects in city → reviews from city → pricing → neighborhoods (only where we worked) → FAQ 3–5 → form → nearby cities.

**Project case format:** city · material · area (sq ft) · days · before / what we did.

## Forms & conversion
- Two forms: short "call me back" in hero + detailed (ZIP, service, material, area, up to 5 photos, preferred time, SMS consent).
- Own Netlify Function sends email. Anti-spam: Cloudflare Turnstile + hidden honeypot (never show "Leave this field empty" visibly) + timing check + server validation + per-IP rate limit.
- Sticky call button on mobile. Trust strip right under the hero.

## SEO & analytics
- Schema: LocalBusiness + areaServed, Service, Review, FAQ, BreadcrumbList. Add `llms.txt`.
- `robots.ts` must never block `/_next/`. Sitemap lists every page.
- Search Console + GA4 (events: `call`, `form_submit`). UTM on the GBP link. Call-tracking numbers on the site only — NAP elsewhere stays (279) 237-9912.
- No cookie banner; Privacy Policy page required.

## Open decisions (don't invent — leave placeholders)
Price ranges; written warranty terms; response-time promise; liability insurance / permits; packaged services; financing; CSLB number; Deck Academy directory consent.
