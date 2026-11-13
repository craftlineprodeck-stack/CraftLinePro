// One file per city. A city gets a page, an /areas card, a footer link and a sitemap entry
// only when `ready: true` (unique local content exists).
import type { City, Region } from '../types';
import { fairOaks } from './fair-oaks';
import { folsom } from './folsom';
import { graniteBay } from './granite-bay';
import { orangevale } from './orangevale';
import { citrusHeights } from './citrus-heights';

export const regions: Region[] = [
  { id: 'east-sacramento-county', name: 'East Sacramento County', order: 1 },
  { id: 'folsom-el-dorado-hills', name: 'Folsom & El Dorado Hills', order: 2 },
  { id: 'placer-county', name: 'Placer County', order: 3 },
  { id: 'sacramento', name: 'Sacramento', order: 4 },
];

export const cities: City[] = [fairOaks, folsom, graniteBay, orangevale, citrusHeights];
