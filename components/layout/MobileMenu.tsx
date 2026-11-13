'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { NavItem } from '@/lib/navigation';
import { PhoneLink } from '../PhoneLink';

// Phone/tablet menu: toggle button with aria-expanded; the panel closes on Escape and on link click.
export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-md text-slate focus-visible:outline-2 focus-visible:outline-amber"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" fill="none" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" fill="none" />
          )}
        </svg>
      </button>
      <nav
        id={panelId}
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-white px-4 pb-6 shadow-lg"
      >
        <ul className="divide-y divide-border">
          {items.map((item) => (
            <li key={item.label} className="py-3">
              {item.children ? (
                <>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</span>
                  <ul className="mt-2 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={close} className="block py-1.5 text-base text-ink">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} onClick={close} className="block py-1.5 text-base font-medium text-ink">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <PhoneLink
          location="mobile-menu"
          className="mt-4 block rounded-md bg-amber px-4 py-3 text-center font-semibold text-slate-900"
        />
      </nav>
    </div>
  );
}
