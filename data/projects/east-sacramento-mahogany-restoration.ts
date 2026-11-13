import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'east-sacramento-mahogany-restoration';
const CAPTION = 'Hardwood deck restoration — Fijian mahogany — East Sacramento';

export const project: Project = {
  slug,
  title: 'Fijian Mahogany Front Deck Restoration in East Sacramento',
  city: 'east-sacramento',
  services: ['ipe-hardwood-deck-restoration'],
  materials: ['fijian-mahogany'],
  completed: '2026-07',
  areaSqFt: 240,
  days: 1,
  finish: { kind: 'oil', type: 'penetrating hardwood oil', color: 'Mahogany', brand: 'Armstrong Clark' },
  summary: 'Faded hardwood front deck: one board repaired, fully sanded and oiled in a single day.',
  before: 'A faded hardwood front deck with a problem board.',
  whatWeDid: 'We repaired the board, fully sanded the deck and applied one coat of hardwood oil.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'front deck and steps after oil'],
    ['before', 'faded deck with the problem board lifted'],
    ['after', 'same view after sanding and oil'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
