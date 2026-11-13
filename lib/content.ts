// The only place that reads data/ and applies `ready` flags and ordering.
import { cities, regions } from '@/data/cities';
import { featured } from '@/data/featured';
import { materialNames } from '@/data/materials';
import { outsideAreaNames } from '@/data/outside-areas';
import { pages } from '@/data/pages';
import { projects } from '@/data/projects';
import { reviews } from '@/data/reviews';
import { services } from '@/data/services';
import type { City, CitySlug, Finish, Material, PageKey, Project, ProjectCity, Region, Review, Service, ServiceSlug, SitePage } from '@/data/types';

export function getServices(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}

export function getCities(): City[] {
  return [...cities];
}

export function getReadyCities(): City[] {
  return cities.filter((c) => c.ready);
}

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

function groupByRegion(list: City[]): { region: Region; cities: City[] }[] {
  return [...regions]
    .sort((a, b) => a.order - b.order)
    .map((region) => ({ region, cities: list.filter((c) => c.region === region.id) }))
    .filter((group) => group.cities.length > 0);
}

// Footer, /areas cards and sitemap: ready cities only.
export function getRegionsWithReadyCities(): { region: Region; cities: City[] }[] {
  return groupByRegion(getReadyCities());
}

// Service Areas menu: every city, ready or not (placeholder pages are noindex).
export function getRegionsWithCities(): { region: Region; cities: City[] }[] {
  return groupByRegion(cities);
}

// All projects, drafts included (draft pages are noindex and out of the sitemap).
export function getProjects(): Project[] {
  return [...projects];
}

export function getReadyProjects(): Project[] {
  return projects.filter((p) => p.ready);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// City page link only for the 14 focus cities; Elk Grove / West Sacramento have none.
export function getProjectPlace(city: ProjectCity): { name: string; citySlug?: CitySlug } {
  const focus = cities.find((c) => c.slug === city);
  if (focus) return { name: focus.name, citySlug: focus.slug };
  return { name: outsideAreaNames[city as keyof typeof outsideAreaNames] };
}

export function getMaterialName(material: Material): string {
  return materialNames[material];
}

// "semi-transparent stain — Red Garrison"
export function formatFinish(finish: Finish): string {
  return finish.color ? `${finish.type} — ${finish.color}` : finish.type;
}

// "2026-09" -> "September 2026"
export function formatMonth(yyyyMm: string): string {
  const [y, m] = yyyyMm.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function getFeaturedProjects(): Project[] {
  return featured.projects
    .map((slug) => projects.find((p) => p.slug === slug && p.ready))
    .filter((p): p is Project => Boolean(p));
}

export function getFeaturedReviews(): Review[] {
  return featured.reviews
    .map((id) => reviews.find((r) => r.id === id))
    .filter((r): r is Review => Boolean(r));
}

export function getPage(key: PageKey): SitePage {
  return pages[key];
}

export function getSitemapEntries(): { path: string }[] {
  return [
    ...Object.values(pages).filter((p) => p.ready).map((p) => ({ path: p.path })),
    ...getServices().filter((s) => s.ready).map((s) => ({ path: `/${s.slug}` })),
    ...getReadyCities().map((c) => ({ path: `/areas/${c.slug}` })),
    ...getReadyProjects().map((p) => ({ path: `/projects/${p.slug}` })),
  ];
}
