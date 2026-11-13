import Link from 'next/link';
import { getMainNav } from '@/lib/navigation';
import { Logo } from '../brand/Logo';
import { PhoneLink } from '../PhoneLink';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';
import { NavDropdown } from './NavDropdown';

export function SiteHeader() {
  const items = getMainNav();
  return (
    <header className="relative z-40 border-b border-border bg-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-amber">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {items.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-2 py-2 text-sm font-medium text-ink hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-amber"
              >
                {item.label}
              </Link>
            ),
          )}
          <PhoneLink
            location="header"
            className="ml-3 rounded-md bg-amber px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-600"
          />
        </nav>
        <MobileMenu items={items} />
      </Container>
    </header>
  );
}
