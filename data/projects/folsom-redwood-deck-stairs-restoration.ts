import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'folsom-redwood-deck-stairs-restoration';
const CAPTION = 'Redwood deck and stairs restoration — Redwood — Folsom';

export const project: Project = {
  slug,
  title: 'Redwood Deck and Staircase Restoration in Folsom',
  city: 'folsom',
  services: ['redwood-deck-restoration', 'deck-railings-stairs'],
  materials: ['redwood'],
  completed: '2026-06',
  areaSqFt: 600,
  days: 3,
  finish: { kind: 'stain', type: 'semi-transparent stain', color: 'Georgian Brick' },
  summary: 'Worn stair treads and peeling stain sanded back and refinished in two coats of semi-transparent stain.',
  before:
    'Old stain was peeling and the wood on the stair treads was badly worn. The railings had held up fairly well but needed a fresh color matched to the deck. Some screws had worked loose.',
  whatWeDid:
    'We pressure-washed the railings to clean and prep them and tightened loose screws across the deck. Then we fully sanded the deck boards, handrails, posts and stairs, with extra attention to the worn stair treads, and finished everything with two coats of semi-transparent stain.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck after two coats of stain'],
    ['before', 'deck before, peeling stain'],
    ['before', 'worn stairs before'],
    ['after', 'stairs after sanding and stain'],
  ]),
  beforeAfter: [
    { beforeId: '02', afterId: '01', caption: CAPTION },
    { beforeId: '03', afterId: '04', caption: CAPTION },
  ],
  ready: false,
};
