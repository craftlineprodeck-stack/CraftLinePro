import Link from 'next/link';
import { site } from '@/data/site';
import { getPage, getReadyCities } from '@/lib/content';
import { getFooterServices } from '@/lib/navigation';
import { Logo } from '../brand/Logo';
import { PhoneLink } from '../PhoneLink';
import { Container } from './Container';

export function SiteFooter() {
  const services = getFooterServices();
  const cities = getReadyCities();
  const privacy = getPage('privacy');

  return (
    <footer className="bg-slate text-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <Logo variant="light" />
          <p>
            <PhoneLink location="footer" className="font-semibold text-amber hover:text-amber-600" />
          </p>
          <p>
            <a href={site.instagram.url} className="hover:text-amber" rel="noopener noreferrer" target="_blank">
              Instagram {site.instagram.handle}
            </a>
          </p>
        </div>
        <nav aria-label="Services" className="md:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber">Services</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-amber">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      {cities.length > 0 && (
        <Container className="border-t border-slate-700 py-4 text-sm">
          <nav aria-label="Service areas">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/areas/${c.slug}`} className="hover:text-amber">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      )}
      <Container className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-700 py-4 text-sm text-surface-alt">
        <span>© {site.legalName}</span>
        <Link href={privacy.path} className="hover:text-amber">
          {privacy.title}
        </Link>
      </Container>
    </footer>
  );
}
