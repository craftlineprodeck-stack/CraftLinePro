// The only place that reads data/ and applies `ready` flags and ordering.
import { cities, regions } from '@/data/cities';
import { featured } from '@/data/featured';
import { pages } from '@/data/pages';
import { projects } from '@/data/projects';
import { reviews } from '@/data/reviews';
import { services } from '@/data/services';
import type { City, PageKey, Project, Region, Review, Service, ServiceSlug, SitePage } from '@/data/types';

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

export function getRegionsWithReadyCities(): { region: Region; cities: City[] }[] {
  const ready = getReadyCities();
  return [...regions]
    .sort((a, b) => a.order - b.order)
    .map((region) => ({ region, cities: ready.filter((c) => c.region === region.id) }))
    .filter((group) => group.cities.length > 0);
}

export function getReadyProjects(): Project[] {
  return projects.filter((p) => p.ready);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
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
