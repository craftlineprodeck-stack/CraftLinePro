import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'orangevale-20-year-ipe-restoration';
const CAPTION = 'Ipe deck restoration — Ipe — Orangevale';

export const project: Project = {
  slug,
  title: '20-Year-Old Ipe Deck Restoration in Orangevale',
  city: 'orangevale',
  services: ['ipe-hardwood-deck-restoration', 'deck-repair'],
  materials: ['ipe'],
  completed: '2026-09',
  areaSqFt: 1100,
  days: 5,
  finish: { type: 'penetrating hardwood oil', color: 'Natural', brand: 'DeckWise' },
  summary: 'Every screw re-fastened, stair frame repaired and railing posts reinforced, then the Ipe sanded and oiled.',
  before:
    'A 20-year-old Ipe deck. Screws throughout were loose or broken and the boards squeaked underfoot. The frame under the steps down to the lower level had weakened, the railing posts were loose, and the boards were faded and gray.',
  whatWeDid:
    'Day one went to repairs: we re-fastened every screw on the deck, repaired the stair frame and reinforced the railing posts with structural screws. The next two days were prep — pressure washing and full sanding of the boards and railings. Then we applied the hardwood oil.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'two-level Ipe deck after oil'],
    ['before', 'stairs sanded, oil on the top steps only'],
    ['after', 'same stairs after oil'],
    ['process', 'lower deck sanded to bare wood'],
    ['after', 'lower deck and steps after oil'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
