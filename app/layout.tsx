import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { StickyCallButton } from '@/components/layout/StickyCallButton';
import { site } from '@/data/site';
import { fontVariables } from '@/theme/fonts';
import './globals.css';

// Site-wide defaults only. Indexing is decided per page by pageMetadata() and the `ready` flags.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  applicationName: site.name,
  icons: { icon: '/icon.png', shortcut: '/icon.png', apple: '/icon.png' },
  openGraph: { siteName: site.name, locale: 'en_US', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-screen flex-col overflow-x-hidden pb-16 md:pb-0">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCallButton />
      </body>
    </html>
  );
}
