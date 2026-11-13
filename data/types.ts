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

export type CitySlug = 'fair-oaks' | 'folsom' | 'granite-bay' | 'orangevale' | 'citrus-heights';
export interface City { slug: CitySlug; name: string; region: RegionId; ready: boolean; nearby: CitySlug[]; }

export type Material = 'redwood' | 'trex' | 'timbertech' | 'ipe' | 'cumaru' | 'tigerwood' | 'garapa' | 'dasso-bamboo' | 'aluminum';
export interface ProjectPhoto { id: string; src: string; width: number; height: number; alt: string; caption: string; } // alt/caption: "service — material — city"
export interface BeforeAfterPair { beforeId: string; afterId: string; caption: string; } // ids of photos in the same project; same spot and angle
export interface Project {
  slug: string;
  title: string;
  city: CitySlug;
  service: ServiceSlug;
  materials: Material[];
  areaSqFt?: number;
  days?: number;
  before: string;
  whatWeDid: string;
  finish?: string;
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
  | { label: string; children: PageKey[] }; // dropdown from pages (shown only if page ready, except deck-materials which is always listed)

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  phone: { display: string; tel: string };
  instagram: { handle: string; url: string };
  nav: NavEntry[];
}
