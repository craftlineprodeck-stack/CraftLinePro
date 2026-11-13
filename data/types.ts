// Content model. Pages and components read data only through lib/content.ts.
export type ServiceSlug =
  | 'deck-building'
  | 'deck-repair'
  | 'redwood-deck-restoration'
  | 'ipe-hardwood-deck-restoration'
  | 'deck-railings-stairs'
  | 'pergolas';
export interface Service { slug: ServiceSlug; name: string; navLabel: string; order: number; ready: boolean; }

export type RegionId = 'east-sacramento-county' | 'folsom-el-dorado-hills' | 'placer-county' | 'sacramento';
export interface Region { id: RegionId; name: string; order: number; }

export type CitySlug =
  | 'fair-oaks'
  | 'orangevale'
  | 'citrus-heights'
  | 'rancho-cordova'
  | 'gold-river'
  | 'folsom'
  | 'el-dorado-hills'
  | 'granite-bay'
  | 'roseville'
  | 'rocklin'
  | 'loomis'
  | 'auburn'
  | 'sacramento'
  | 'east-sacramento';
export interface City { slug: CitySlug; name: string; region: RegionId; ready: boolean; nearby: CitySlug[]; }

export type Material =
  | 'redwood'
  | 'trex'
  | 'timbertech'
  | 'ipe'
  | 'cumaru'
  | 'tigerwood'
  | 'garapa'
  | 'dasso-bamboo'
  | 'fijian-mahogany'
  | 'aluminum';

// Projects outside the 14 focus cities: shown in the projects gallery only, never linked to a city page.
export type OutsideArea = 'elk-grove' | 'west-sacramento';
export type ProjectCity = CitySlug | OutsideArea;

export type PhotoRole = 'before' | 'after' | 'process';
export interface ProjectPhoto {
  id: string; // "01", "02", ... = file public/projects/<slug>/<slug>-<id>.webp
  src: string;
  width: number;
  height: number;
  role: PhotoRole;
  shows: string; // what the shot shows, e.g. "stairs before"
  alt: string; // "service — material — city" + what the shot shows
  caption: string; // "service — material — city"
}
export interface BeforeAfterPair { beforeId: string; afterId: string; caption: string; } // ids of photos in the same project; same spot and angle

// Finish shown as type + color ("semi-transparent stain — Red Garrison").
// Coats follow the kind (owner rule): water-based stain = 2 coats, oil = 1 coat — see FINISH_COATS.
// Brand only for hardwood oils (Messmer's, Armstrong Clark, DeckWise, Penofin); never for stains.
export type Finish =
  | { kind: 'stain'; type: string; color: string }
  | { kind: 'oil'; type: string; color?: string; brand?: string };
export const FINISH_COATS: Record<Finish['kind'], number> = { stain: 2, oil: 1 };

export interface Project {
  slug: string;
  title: string;
  city: ProjectCity;
  services: ServiceSlug[]; // first = main service of the case
  materials: Material[];
  completed: string; // "YYYY-MM"
  areaSqFt?: number;
  areaApprox?: boolean; // true = "about N sq ft"
  days?: number;
  finish?: Finish;
  summary: string; // one line for cards
  before: string;
  whatWeDid: string;
  todo: string[]; // missing facts for the owner; shown only on draft pages
  googleReview: boolean; // the client left a Google review (no client names in the repo)
  coverId: string;
  photos: ProjectPhoto[];
  beforeAfter: BeforeAfterPair[];
  ready: boolean;
}
export interface Review { id: string; author: string; city: CitySlug; service?: ServiceSlug; projectSlug?: string; text: string; date: string; source: 'google' | 'yelp' | 'other'; }

export type Emphasis = 'repair-restoration' | 'building';
export interface Featured { emphasis: Emphasis; projects: string[]; reviews: string[]; } // slugs / ids, in display order

export type PageKey = 'home' | 'deck-materials' | 'before-and-after' | 'areas' | 'projects' | 'reviews' | 'about' | 'contact' | 'deck-academy' | 'blog' | 'privacy';
export interface SitePage { key: PageKey; path: string; title: string; ready: boolean; }

export type NavEntry =
  | { label: string; href: string } // plain link
  | { label: string; children: 'services' } // dropdown from services
  | { label: string; children: 'areas' } // dropdown of cities grouped by region
  | { label: string; children: PageKey[] }; // dropdown from pages (shown only if page ready, except deck-materials which is always listed)

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  phone: { display: string; tel: string };
  instagram: { handle: string; url: string };
  nav: NavEntry[];
}
