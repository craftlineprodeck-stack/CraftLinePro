'use client';

// The ONLY component that renders `tel:` links — GA4 `call` tracking hooks in here.
import type { ReactNode } from 'react';
import { site } from '@/data/site';
import { trackCall } from '@/lib/analytics';

export function PhoneLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={'tel:' + site.phone.tel} onClick={() => trackCall(location)} className={className}>
      {children ?? site.phone.display}
    </a>
  );
}
