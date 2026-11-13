// Utility pages. `ready: false` = placeholder: noindex and kept out of the sitemap.
import type { PageKey, SitePage } from './types';

export const pages: Record<PageKey, SitePage> = {
  home: { key: 'home', path: '/', title: 'Home', ready: false },
  'deck-materials': { key: 'deck-materials', path: '/deck-materials', title: 'Deck Materials', ready: false },
  'before-and-after': { key: 'before-and-after', path: '/before-and-after', title: 'Before & After', ready: false },
  areas: { key: 'areas', path: '/areas', title: 'Service Areas', ready: false },
  projects: { key: 'projects', path: '/projects', title: 'Projects', ready: false },
  reviews: { key: 'reviews', path: '/reviews', title: 'Reviews', ready: false },
  about: { key: 'about', path: '/about', title: 'About', ready: false },
  contact: { key: 'contact', path: '/contact', title: 'Contact', ready: false },
  'deck-academy': { key: 'deck-academy', path: '/deck-academy', title: 'Deck Academy', ready: false },
  blog: { key: 'blog', path: '/blog', title: 'Blog', ready: false },
  privacy: { key: 'privacy', path: '/privacy', title: 'Privacy Policy', ready: false },
};
