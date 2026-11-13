// One file per city. A city gets a page, an /areas card, a footer link and a sitemap entry
// only when `ready: true` (unique local content exists). Every city is listed in the
// Service Areas menu and has a noindex placeholder page while not ready.
import type { City, Region } from '../types';
import { fairOaks } from './fair-oaks';
import { orangevale } from './orangevale';
import { citrusHeights } from './citrus-heights';
import { ranchoCordova } from './rancho-cordova';
import { goldRiver } from './gold-river';
import { folsom } from './folsom';
import { elDoradoHills } from './el-dorado-hills';
import { graniteBay } from './granite-bay';
import { roseville } from './roseville';
import { rocklin } from './rocklin';
import { loomis } from './loomis';
import { auburn } from './auburn';
import { sacramento } from './sacramento';
import { eastSacramento } from './east-sacramento';

export const regions: Region[] = [
  { id: 'east-sacramento-county', name: 'East Sacramento County', order: 1 },
  { id: 'folsom-el-dorado-hills', name: 'Folsom & El Dorado Hills', order: 2 },
  { id: 'placer-county', name: 'Placer County', order: 3 },
  { id: 'sacramento', name: 'Sacramento', order: 4 },
];

// Order inside a region = order of this array.
export const cities: City[] = [
  fairOaks,
  orangevale,
  citrusHeights,
  ranchoCordova,
  goldRiver,
  folsom,
  elDoradoHills,
  graniteBay,
  roseville,
  rocklin,
  loomis,
  auburn,
  sacramento,
  eastSacramento,
];
