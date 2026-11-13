// One file per service. To add a service: create a file, add it to the list below.
import type { Service } from '../types';
import { deckBuilding } from './deck-building';
import { deckRepair } from './deck-repair';
import { redwoodDeckRestoration } from './redwood-deck-restoration';
import { ipeHardwoodDeckRestoration } from './ipe-hardwood-deck-restoration';
import { deckRailingsStairs } from './deck-railings-stairs';
import { pergolas } from './pergolas';

export const services: Service[] = [
  deckBuilding,
  deckRepair,
  redwoodDeckRestoration,
  ipeHardwoodDeckRestoration,
  deckRailingsStairs,
  pergolas,
].sort((a, b) => a.order - b.order);
