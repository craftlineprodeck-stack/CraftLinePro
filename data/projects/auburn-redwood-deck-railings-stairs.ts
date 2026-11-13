import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'auburn-redwood-deck-railings-stairs';
const CAPTION = 'Redwood deck, railings and stairs restoration — Redwood — Auburn';

export const project: Project = {
  slug,
  title: 'Redwood Deck, Railings and Stairs Restoration in Auburn',
  city: 'auburn',
  services: ['redwood-deck-restoration', 'deck-railings-stairs'],
  materials: ['redwood'],
  completed: '2025-12',
  areaSqFt: 400,
  days: 3,
  finish: { kind: 'stain', type: 'semi-transparent stain', color: 'cedar natural tone' },
  summary: 'Deck machine-sanded, railings and stairs hand-sanded, knot holes repaired, two coats of stain.',
  before: 'A Redwood deck with a gray, weathered surface, along with its railings and staircase, all overdue for restoration.',
  whatWeDid:
    'We machine-sanded the deck boards and hand-sanded the railings and stairs, bringing the wood back to its natural color. We made spot repairs of holes left by large knots and applied two coats of stain.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck after two coats of stain'],
    ['before', 'gray stairs before'],
    ['after', 'same stairs after sanding and stain'],
    ['before', 'weathered deck boards before'],
    ['after', 'deck and railings after stain'],
    ['process', 'sanding the deck boards'],
    ['process', 'sanding — bare wood next to gray boards'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
