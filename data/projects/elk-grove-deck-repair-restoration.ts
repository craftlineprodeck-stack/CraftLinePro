import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'elk-grove-deck-repair-restoration';
const CAPTION = 'Deck repair and restoration — Redwood — Elk Grove';

// Outside our service areas: projects gallery only, no city page.
export const project: Project = {
  slug,
  title: 'Redwood Deck Repair and Restoration in Elk Grove',
  city: 'elk-grove',
  services: ['deck-repair', 'redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2026-07',
  areaSqFt: 900,
  days: 4,
  finish: { kind: 'stain', type: 'semi-transparent stain', color: 'Padre Brown' },
  summary: 'Three-part Redwood deck repaired before a home sale: new boards, rebuilt steps, sanding and stain.',
  before:
    'An old three-part Redwood deck — front, back and side — with rotted boards and damaged steps. The client was getting the house ready to sell.',
  whatWeDid:
    'We replaced the damaged boards using a hidden fastening system from under the deck, repaired and replaced steps, and made spot repairs on the wood railings. Then we fully sanded every part of the deck, all the stairs and the railings, and applied two coats of semi-transparent stain.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'front deck after stain'],
    ['before', 'broken steps before'],
    ['after', 'same steps rebuilt and stained'],
    ['process', 'rotted boards removed, frame exposed'],
    ['after', 'back deck after stain'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
