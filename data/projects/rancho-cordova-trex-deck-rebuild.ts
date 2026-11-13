import type { Project } from '../types';
import { projectPhotos } from './photos';

const slug = 'rancho-cordova-trex-deck-rebuild';
const CAPTION = 'Deck rebuild — Trex composite — Rancho Cordova';

export const project: Project = {
  slug,
  title: 'Trex Deck Rebuild with New Railings and Stairs in Rancho Cordova',
  city: 'rancho-cordova',
  services: ['deck-building', 'deck-railings-stairs'],
  materials: ['trex'],
  completed: '2026-08',
  areaSqFt: 450,
  days: 6,
  summary: 'Old Redwood wrap-around deck re-decked in Trex Select on a reinforced frame, with Trex railings and safer stairs.',
  before: 'An old Redwood deck wrapping around the house, with rotted stair stringers, unsafe stairs and old wooden railings.',
  whatWeDid:
    "We removed the railings, stairs and old decking. We reinforced the existing frame, leveled the joists, and replaced the rim joists and several joists. New stringers were cut to the client's request for deeper treads — the client was recovering from surgery, so a safe, comfortable climb mattered. We laid new Trex Select boards with a picture-frame border, built new steps and installed white Trex composite railings. We also added a clean fascia trim around the perimeter and new LP SmartPanel skirting under the deck, stained to match the house.",
  todo: [],
  googleReview: true,
  coverId: '01',
  photos: projectPhotos(slug, CAPTION, [
    ['after', 'Trex Select decking with white Trex railings'],
    ['before', 'old Redwood deck and railings along the house'],
    ['after', 'same side with new railings and skirting'],
    ['before', 'old deck and stairs from the yard'],
    ['after', 'new railings and skirting from the yard'],
    ['before', 'worn Redwood decking by the door'],
    ['after', 'same spot in Trex Select'],
    ['process', 'old decking removed, frame being reinforced'],
    ['process', 'frame during reinforcement'],
  ]),
  beforeAfter: [
    { beforeId: '02', afterId: '03', caption: CAPTION },
    { beforeId: '06', afterId: '07', caption: CAPTION },
  ],
  ready: false,
};
