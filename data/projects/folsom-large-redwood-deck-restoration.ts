import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'folsom-large-redwood-deck-restoration';
const CAPTION = 'Redwood deck restoration — Redwood — Folsom';

export const project: Project = {
  slug,
  title: 'Large Redwood Deck Restoration in Folsom',
  city: 'folsom',
  services: ['redwood-deck-restoration', 'deck-railings-stairs'],
  materials: ['redwood'],
  completed: '2026-11',
  areaSqFt: 500,
  areaApprox: true,
  days: 3,
  finish: { type: 'semi-transparent stain', color: 'Red Garrison', brand: 'Woodluxe' },
  summary: 'A large Redwood deck with railings and stairs, unstained for three years, restored in semi-transparent stain.',
  before: "A large Redwood deck with railings and stairs that hadn't been stained in three years.",
  whatWeDid: 'We restored the deck, railings and stairs and finished them in semi-transparent stain, Red Garrison.',
  todo: ['Prep steps (wash / sanding), any repairs, and number of stain coats.'],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck, railings and stairs after stain'],
    ['before', 'deck and stairs before'],
    ['after', 'same view after stain'],
    ['before', 'long deck along the house before'],
    ['after', 'same deck after stain'],
    ['before', 'deck by the bay window before'],
    ['after', 'same spot after stain'],
  ]),
  beforeAfter: [
    { beforeId: '02', afterId: '03', caption: CAPTION },
    { beforeId: '04', afterId: '05', caption: CAPTION },
    { beforeId: '06', afterId: '07', caption: CAPTION },
  ],
  ready: false,
};
