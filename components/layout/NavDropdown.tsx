'use client';

import Link from 'next/link';
import { useId, useRef, useState } from 'react';
import type { NavItem } from '@/lib/navigation';

// Desktop dropdown: opens on hover, click, Enter/Space; Escape closes and returns focus;
// closes when focus leaves the menu.
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-sm px-2 py-2 text-sm font-medium text-ink hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-amber"
      >
        {item.label}
        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <ul
        id={menuId}
        hidden={!open}
        className="absolute left-0 top-full z-50 min-w-60 rounded-md border border-border bg-white py-2 shadow-lg"
      >
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-ink hover:bg-surface-alt focus-visible:bg-surface-alt focus-visible:outline-none"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
