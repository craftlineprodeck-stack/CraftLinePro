# Projects

One project = one file in this folder (`<slug>.ts`) exporting a `Project` (see `../types.ts`).

1. Add the photos to `scripts/portfolio-manifest.mjs` (only shots from `docs/portfolio-review.md`: covers, before/after pairs, process). `crop` cuts out house numbers.
2. Run `npm run import-portfolio` (owner's Mac, needs `../Portfolio`). It writes `public/projects/<slug>/<slug>-NN.webp` (1920px, WebP, no EXIF/GPS) and `photo-sizes.json`.
3. Create `data/projects/<slug>.ts`; `projectPhotos(slug, caption, [[role, shows], ...])` lists the photos in manifest order (photo 1 = `-01.webp`).
4. Import it in `index.ts` and add it to the `projects` list (order = order on `/projects`).
5. `city` is a city slug, or `elk-grove` / `west-sacramento` (gallery only, no city page). `services`: first = main service.
6. Case format: city · material · area (sq ft) · days · before / what we did; `finish` = type + color, brand only in `finish.brand`.
7. Before/after pairs: both shots from the same spot and angle — otherwise keep them in the gallery.
8. No client names in the repo — only `googleReview: true/false`. Missing facts go to `todo` (shown on the draft page).
9. `ready: true` only after the owner approves the text — then the page is indexed and goes into the sitemap.
10. To feature it on the homepage, add the slug to `data/featured.ts`.
