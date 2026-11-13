import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'fair-oaks-redwood-deck-restoration';
const CAPTION = 'Redwood deck restoration — Redwood — Fair Oaks';

export const project: Project = {
  slug,
  title: 'Redwood Deck Restoration in Fair Oaks',
  city: 'fair-oaks',
  services: ['redwood-deck-restoration'],
  materials: ['redwood'],
  completed: '2026-09',
  areaSqFt: 550,
  days: 3,
  finish: { kind: 'stain', type: 'water-based semi-transparent stain', color: 'Cordovan Brown' },
  summary: 'Squeaky, faded Redwood deck re-fastened, deep-sanded and finished in two coats of semi-transparent stain.',
  before:
    'The finish on the deck and railings was faded and dirty. Boards squeaked badly, screw heads stuck up, and a few boards were loose where old screws had broken.',
  whatWeDid:
    "We tightened or replaced weak and broken screws and leveled several boards. Then we deep-sanded the deck, railings, stairs and fascia, matched the stain color to the client's choice, and applied two coats of water-based semi-transparent stain to every surface.",
  todo: [],
  googleReview: false,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'deck after two coats of stain'],
    ['before', 'faded deck corner before'],
    ['after', 'same corner after staining'],
    ['before', 'weathered boards before'],
    ['after', 'walkway after staining'],
    ['process', 'sanding the railings from a ladder'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
