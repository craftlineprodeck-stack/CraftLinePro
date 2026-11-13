import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'fair-oaks-ipe-spa-deck-rebuild';
const REBUILD = 'Ipe deck rebuild — Ipe — Fair Oaks';
const RESTORE = 'Ipe deck restoration — Ipe — Fair Oaks';

export const project: Project = {
  slug,
  title: 'Ipe Spa Deck Rebuild and Deck Restoration in Fair Oaks',
  city: 'fair-oaks',
  services: ['deck-building', 'ipe-hardwood-deck-restoration'],
  materials: ['ipe'],
  completed: '2026-09',
  areaSqFt: 1100,
  days: 7,
  finish: { type: 'penetrating hardwood oil', color: 'Natural', brand: "Messmer's" },
  summary: 'New code-built frame under the spa deck, Ipe relaid with stainless screws, and the whole three-part deck sanded and oiled.',
  before:
    'Three Ipe deck areas. The freestanding spa deck sat on a rotted, unsafe frame that had lost its level. Its boards had been damaged by earlier work: many extra holes, screws not made for hardwood, and a coating not meant for Ipe. On the lower main deck the boards were sun-faded under the same coating, and one board sat higher than the rest. The upper main deck had fresh, uncoated boards, but its railings were loose and not safe for children.',
  whatWeDid:
    'Spa deck: we carefully removed all the Ipe boards and rebuilt the frame from pressure-treated lumber — stronger than the old one, built to code, with joist tape on top and tied to the concrete patio — and repaired the fascia. We filled more than a hundred extra screw holes and relaid the Ipe with exact gaps, the right number of fasteners and all-new 316 stainless steel screws, then deep-sanded every board and applied hardwood oil. Lower main deck: washed with cleaner and brightener, fully sanded to remove the old coating, fixed the raised board and oiled. Upper main deck: fully sanded and prepped, railing posts reinforced with structural screws, then oiled.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, RESTORE, [
    ['after', 'main deck after sanding and oil'],
    ['before', 'spa deck before the rebuild', REBUILD],
    ['after', 'spa deck after the rebuild', REBUILD],
    ['before', 'upper deck before'],
    ['after', 'upper deck after sanding and oil'],
    ['before', 'stairs before'],
    ['after', 'stairs after sanding and oil'],
    ['process', 'old rotted frame under the spa deck', REBUILD],
    ['process', 'old frame during removal', REBUILD],
    ['process', 'new pressure-treated frame around the spa', REBUILD],
    ['process', 'new joists with joist tape', REBUILD],
    ['process', 'new frame tied to the patio', REBUILD],
    ['process', 'new frame ready for the Ipe boards', REBUILD],
  ]),
  beforeAfter: [
    { beforeId: '02', afterId: '03', caption: REBUILD },
    { beforeId: '04', afterId: '05', caption: RESTORE },
    { beforeId: '06', afterId: '07', caption: RESTORE },
  ],
  ready: false,
};
