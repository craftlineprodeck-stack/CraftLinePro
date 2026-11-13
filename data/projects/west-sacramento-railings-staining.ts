import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'west-sacramento-railings-staining';
const CAPTION = 'Railing rebuild and deck staining — Redwood — West Sacramento';

// Outside our service areas: projects gallery only, no city page. No "before" photos.
export const project: Project = {
  slug,
  title: 'Railing Rebuild and Redwood Deck Staining in West Sacramento',
  city: 'west-sacramento',
  services: ['deck-railings-stairs', 'redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2026-09',
  areaSqFt: 350,
  days: 2,
  finish: { kind: 'stain', type: 'water-based semi-transparent stain', color: 'Georgian Brick' },
  summary: 'Old railings rebuilt and a fairly new Redwood deck stained in two days.',
  before: 'A fairly new Redwood deck that needed stain, with old railings that needed rebuilding.',
  whatWeDid: 'We rebuilt the old railings and finished the deck with two coats of water-based semi-transparent stain.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'stairs and deck after stain'],
    ['after', 'front steps and deck after stain'],
    ['after', 'rebuilt railings along the house'],
    ['after', 'deck corner and railings after stain'],
  ]),
  beforeAfter: [],
  ready: false,
};
