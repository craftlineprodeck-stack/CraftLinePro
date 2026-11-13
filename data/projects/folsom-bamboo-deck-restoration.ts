import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'folsom-bamboo-deck-restoration';
const CAPTION = 'Hardwood deck restoration — Dasso bamboo — Folsom';

export const project: Project = {
  slug,
  title: 'Dasso Bamboo Deck Restoration in Folsom',
  city: 'folsom',
  services: ['ipe-hardwood-deck-restoration', 'deck-repair'],
  materials: ['dasso-bamboo'],
  completed: '2026-05',
  areaSqFt: 740,
  days: 4,
  finish: { type: 'penetrating hardwood oil', color: 'Natural', brand: "Messmer's" },
  summary: 'About 200 hidden screws added to stop moving boards, then a full clean, sand and hardwood oil.',
  before:
    'A unique Dasso bamboo deck, fully faded with visible sun damage. Many hidden fasteners had come loose, so boards moved underfoot; some boards had shifted out of level, and several bamboo screw plugs were missing.',
  whatWeDid:
    'We opened up the corner of the deck by the grill and kitchen area, fixed minor frame issues and leveled the boards. We added about 200 hidden screws with plugs to secure the floating boards and made new plugs where they were missing. Then a full restoration: wash with professional cleaner and brightener, full sanding, and hardwood oil, with the excess wiped off after 20–30 minutes.',
  todo: [],
  googleReview: false,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck by the pool after oil'],
    ['before', 'sun-damaged boards before'],
    ['after', 'deck after sanding and oil'],
    ['process', 'half oiled, half bare — the difference oil makes'],
  ]),
  beforeAfter: [],
  ready: false,
};
