import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'citrus-heights-deck-repair-pergola';
const CAPTION = 'Deck repair and restoration — Redwood — Citrus Heights';

export const project: Project = {
  slug,
  title: 'Redwood Deck Repair and Pergola Restoration in Citrus Heights',
  city: 'citrus-heights',
  services: ['deck-repair', 'redwood-deck-restoration', 'pergolas'],
  materials: ['redwood'],
  completed: '2026-10',
  areaSqFt: 1200,
  days: 6,
  finish: { type: 'semi-transparent stain', color: 'Redwood', brand: 'Behr Premium' },
  summary: 'About half the lower deck boards replaced, steps rebuilt, pergola cleaned, and two coats of stain on everything.',
  before:
    'On the lower deck the boards had rotted — about half needed replacing — and the steps needed repair and new treads. A few boards were rotten on the upper deck under the pergola. All the wood was gray, dirty and starting to break down, the pergola had turned almost black, and the railing posts were loose.',
  whatWeDid:
    'Lower deck: a major repair with board replacement, refitting the boards that could be saved, step repair, then full sanding and prep for stain. Upper deck: replaced damaged boards, re-fastened loose screws, spot fascia repairs, full sanding, and reinforced every railing post. Pergola: professional wash with cleaner and brightener plus spot sanding. Two coats of stain on every surface, then we reinstalled all the metal railings.',
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'pergola deck after two coats of stain'],
    ['before', 'deck corner by the pool before'],
    ['after', 'same corner after repair and stain'],
    ['before', 'gray deck under the dark pergola before'],
    ['after', 'pergola and deck after stain'],
    ['before', 'worn steps before'],
    ['after', 'upper deck after stain'],
    ['process', 'staining the pergola in protective gear, deck floor covered'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
