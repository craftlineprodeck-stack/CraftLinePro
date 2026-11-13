import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'orangevale-redwood-deck-restoration';
const CAPTION = 'Redwood deck restoration — Redwood — Orangevale';
const FENCE = 'Fence and gate — Redwood — Orangevale';

export const project: Project = {
  slug,
  title: 'Redwood Deck Restoration and New Fence in Orangevale',
  city: 'orangevale',
  services: ['redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2026-04',
  areaSqFt: 560,
  days: 4,
  finish: { type: 'penetrating oil', color: 'Natural', brand: 'Cabot Australian Timber Oil' },
  summary: 'Poolside Redwood deck sanded, spot-repaired and oiled, plus a new fence section and two gates.',
  before:
    'The job covered an old fence with a gate, a separate wooden gate leading to the deck, and the Redwood deck itself, which needed restoration, a couple of boards replaced and an oil finish.',
  whatWeDid:
    'We built about 20 ft of new fence with a built-in gate, plus a separate new Redwood gate and post. On the deck we did a full sanding, spot board repairs, and finished it with oil.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'poolside deck after oil'],
    ['before', 'old fence and gate before', FENCE],
    ['after', 'new fence with built-in gate', FENCE],
    ['before', 'gray steps and deck before'],
    ['after', 'deck after sanding and oil'],
    ['process', 'sanding the deck'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: FENCE }],
  ready: false,
};
