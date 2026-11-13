# Projects

One project = one file in this folder (`<slug>.ts`) exporting a `Project` (see `../types.ts`).

1. Create `data/projects/<slug>.ts` with `export const project: Project = { ... }`.
2. Import it in `index.ts` and add it to the `projects` list.
3. `city` is the city slug (`fair-oaks`, `folsom`, ...); `service` is the service slug.
4. Case format: city · material · area (sq ft) · days · before / what we did; `finish` = finish type + color.
5. Photos: WebP/JPEG in `public/` (never HEIC). `alt` and `caption` read "service — material — city".
6. Before/after pairs reference photo ids of this same project, shot from the same spot and angle.
7. Set `ready: true` only when the case is complete — then it gets a page and a sitemap entry.
8. To feature it on the homepage, add the slug to `data/featured.ts`.
