// Builds a project's photo list from the files made by scripts/import-portfolio.mjs.
// Photo N of the list = public/projects/<slug>/<slug>-NN.webp (order set in scripts/portfolio-manifest.mjs).
import type { PhotoRole, ProjectPhoto } from '../types';
import sizes from './photo-sizes.json';

type Sizes = Record<string, Record<string, { width: number; height: number }>>;

/** entries: [role, what the shot shows, optional caption override] in file order. */
export function projectPhotos(slug: string, caption: string, entries: [PhotoRole, string, string?][]): ProjectPhoto[] {
  return entries.map(([role, shows, captionOverride], i) => {
    const id = String(i + 1).padStart(2, '0');
    const size = (sizes as Sizes)[slug]?.[id];
    if (!size) throw new Error(`No photo ${slug}-${id}.webp — run npm run import-portfolio`);
    const text = captionOverride ?? caption;
    return { id, src: `/projects/${slug}/${slug}-${id}.webp`, ...size, role, shows, alt: `${text}: ${shows}`, caption: text };
  });
}
