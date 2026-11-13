import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'folsom-custom-redwood-deck';
const CAPTION = 'Custom deck building — Redwood — Folsom';

export const project: Project = {
  slug,
  title: 'Custom Low-Profile Redwood Deck in Folsom',
  city: 'folsom',
  services: ['deck-building'],
  materials: ['redwood'],
  completed: '2026-04',
  areaSqFt: 200,
  days: 5,
  // Owner's color name contains a banned word; shown without it.
  finish: { type: 'semi-transparent stain', color: 'natural tone', brand: 'Behr Premium' },
  summary: 'A freestanding Redwood deck built to exact custom dimensions, on poured footings, with built-in lighting.',
  before:
    "A returning client — we had restored and stained their fence earlier. They wanted a low-profile freestanding deck with lighting, built to their own dimensions, and the work had to be coordinated with the landscaping company redoing the backyard.",
  whatWeDid:
    "We built a custom Redwood deck on poured footings, with built-in lighting and the client's exact dimensions, so it fits precisely between the fence and the concrete pad.",
  todo: ['Optional: finish details (coats) and frame lumber, if you want them in the case.'],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'finished deck at sunset with step lights on'],
    ['before', 'bare side yard with footings laid out'],
    ['after', 'finished deck and step'],
    ['process', 'frame on the footings'],
    ['process', 'cutting boards on site'],
    ['process', 'fitting a step light into the rim'],
    ['process', 'Redwood decking installed, before stain'],
    ['after', 'deck after stain'],
  ]),
  beforeAfter: [{ beforeId: '02', afterId: '03', caption: CAPTION }],
  ready: false,
};
