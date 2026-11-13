import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'granite-bay-redwood-premium-restoration';
const CAPTION = 'Redwood deck restoration — Redwood — Granite Bay';

export const project: Project = {
  slug,
  title: 'Large Redwood Deck Restoration in Granite Bay',
  city: 'granite-bay',
  services: ['redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2026-06',
  areaSqFt: 750,
  days: 3,
  finish: { kind: 'stain', type: 'semi-transparent stain', color: 'Georgian Brick' },
  summary: 'Gray Redwood deck, stairs and a large fascia fully sanded and finished in two coats of premium semi-transparent stain.',
  before: 'Gray, sun-bleached deck boards, plus a staircase and a large fascia.',
  whatWeDid: 'We fully sanded every surface and applied two coats of premium semi-transparent stain.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck after sanding and stain'],
    ['before', 'gray deck and steps before'],
    ['after', 'steps and deck after stain'],
    ['before', 'gray deck by the dining area before'],
    ['after', 'deck along the house after stain'],
    ['process', 'brushing stain onto sanded boards'],
    ['process', 'stain going on, board by board'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
