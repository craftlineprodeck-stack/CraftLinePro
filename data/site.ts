import type { SiteConfig } from './types';

export const site: SiteConfig = {
  name: 'CraftLine Decking',
  legalName: 'CraftLine LLC',
  url: 'https://craftlineprodeck.com',
  phone: { display: '(279) 237-9912', tel: '+12792379912' },
  instagram: { handle: '@craftline.sacramento', url: 'https://www.instagram.com/craftline.sacramento' },
  // Main menu order (CLAUDE.md). The phone button is drawn by the header, not listed here.
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Services', children: 'services' },
    { label: 'Resources', children: ['deck-materials', 'blog'] },
    { label: 'Service Areas', children: 'areas' },
    { label: 'Projects', href: '/projects' },
    { label: 'Before & After', href: '/before-and-after' },
    { label: 'Contact', href: '/contact' },
  ],
};
