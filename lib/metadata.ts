import type { Metadata } from 'next';

// One place for per-page metadata: title, canonical, and noindex while a page is a placeholder.
export function pageMetadata(opts: { path: string; title: string; ready: boolean; description?: string }): Metadata {
  return {
    title: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
    alternates: { canonical: opts.path },
    ...(opts.ready ? {} : { robots: { index: false, follow: false } }),
  };
}
