// Main menu and footer lists, built from data — the header never hardcodes links.
import { site } from '@/data/site';
import type { PageKey } from '@/data/types';
import { getPage, getRegionsWithCities, getServices } from './content';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  // Grouped dropdown (Service Areas): groups come first, `children` are trailing links after them.
  groups?: NavGroup[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

// Shorter menu labels for pages whose H1 is longer.
const pageNavLabels: Partial<Record<PageKey, string>> = {
  'deck-materials': 'Materials',
};

// Listed in menus even while the page is a placeholder.
const alwaysListed: PageKey[] = ['deck-materials'];

export function getMainNav(): NavItem[] {
  return site.nav.flatMap((entry): NavItem[] => {
    if ('href' in entry) return [{ label: entry.label, href: entry.href }];
    if (entry.children === 'services') {
      const children = getServices().map((s) => ({ label: s.navLabel, href: `/${s.slug}` }));
      return [{ label: entry.label, href: children[0]?.href ?? '/', children }];
    }
    if (entry.children === 'areas') {
      const groups = getRegionsWithCities().map(({ region, cities }) => ({
        label: region.name,
        items: cities.map((c) => ({ label: c.name, href: `/areas/${c.slug}` })),
      }));
      return [{ label: entry.label, href: '/areas', groups, children: [{ label: 'All Service Areas', href: '/areas' }] }];
    }
    const children = entry.children
      .map(getPage)
      .filter((p) => p.ready || alwaysListed.includes(p.key))
      .map((p) => ({ label: pageNavLabels[p.key] ?? p.title, href: p.path }));
    if (children.length === 0) return [];
    return [{ label: entry.label, href: children[0].href, children }];
  });
}

export function getFooterServices() {
  return getServices();
}
