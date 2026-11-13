import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'granite-bay-ipe-deck-restoration';
const CAPTION = 'Ipe deck restoration — Ipe — Granite Bay';

export const project: Project = {
  slug,
  title: 'Ipe Deck Restoration in Granite Bay',
  city: 'granite-bay',
  services: ['ipe-hardwood-deck-restoration'],
  materials: ['ipe'],
  completed: '2026-10',
  areaSqFt: 900,
  days: 4,
  finish: { type: 'penetrating hardwood oil', color: 'Amber', brand: 'Armstrong Clark' },
  summary: 'Gray Ipe deck, built-in benches and the Ipe-clad fireplace and BBQ area brought back with sanding and hardwood oil.',
  before:
    'The Ipe had turned gray and sun-bleached. Two built-in Ipe benches had sagged forward over time, and one needed its frame repaired and reinforced. The client also asked us to include the fireplace and BBQ area clad in Ipe.',
  whatWeDid:
    'Full prep: we pressure-washed every element with cleaner and brightener. We repaired and reinforced the bench frame, leveled both benches, and fixed loose boards with hidden fasteners. Then we fully sanded the deck boards and every other element and applied hardwood oil.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck and house in the evening'],
    ['before', 'gray Ipe deck before'],
    ['after', 'same view after sanding and oil'],
    ['before', 'deck by the outdoor kitchen before'],
    ['after', 'deck toward the fireplace after oil'],
    ['process', 'oil going on — finished boards next to sanded ones'],
    ['process', 'Ipe-clad BBQ island after oil'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
