import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'roseville-redwood-deck-refinishing';
const CAPTION = 'Redwood deck refinishing — Redwood — Roseville';

export const project: Project = {
  slug,
  title: 'Redwood Deck Refinishing in Roseville',
  city: 'roseville',
  services: ['redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2026-08',
  areaSqFt: 480,
  days: 2,
  finish: { kind: 'stain', type: 'semi-transparent stain', color: 'Redwood' },
  summary: 'Faded Redwood deck re-fastened, fully sanded and finished in two coats of stain in two days.',
  before: 'Old, faded Redwood with loose screws.',
  whatWeDid: 'We fully sanded the deck, tightened every screw and applied two coats of new stain.',
  todo: [],
  googleReview: false,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck after two coats of stain'],
    ['before', 'gray deck before'],
    ['after', 'same view after stain'],
    ['process', 'half sanded — bare wood next to old gray boards'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
