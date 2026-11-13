import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'citrus-heights-old-deck-repair';
const CAPTION = 'Deck repair and restoration — Redwood — Citrus Heights';

export const project: Project = {
  slug,
  title: 'Old Redwood Deck Repair and Restoration in Citrus Heights',
  city: 'citrus-heights',
  services: ['deck-repair', 'redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2025-07',
  areaSqFt: 640,
  days: 4,
  finish: { kind: 'stain', type: 'water-based solid stain', color: 'cedar natural tone' },
  summary: 'About 40% of the boards and the fascia replaced, benches repaired, and the deck sanded and stained.',
  before: 'An old Redwood deck: about 40% of the boards had rotted and needed replacing, along with the fascia, and two benches needed repair.',
  whatWeDid:
    'We replaced the boards and fascia and repaired the benches, then finished the benches in a contrasting stain color matched to the house. The deck was fully sanded and given two coats of water-based solid stain.',
  todo: [],
  googleReview: false,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck after repair and stain'],
    ['before', 'gray deck before'],
    ['after', 'same view after repair and stain'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
