import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { getSitemapEntries } from '@/lib/content';

// Only `ready` pages, services, cities and projects. Empty while everything is a placeholder.
export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries().map(({ path }) => ({ url: path === '/' ? site.url : `${site.url}${path}` }));
}
