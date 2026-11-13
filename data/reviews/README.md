# Reviews

One review = one file in this folder (`<id>.ts`) exporting a `Review` (see `../types.ts`).

1. Create `data/reviews/<id>.ts` with `export const review: Review = { ... }`.
2. Import it in `index.ts` and add it to the `reviews` list.
3. `city` is the city slug; link `service` / `projectSlug` when known.
4. Only real reviews, text exactly as published, with `source` and `date`.
5. To feature it, add the id to `data/featured.ts`.
