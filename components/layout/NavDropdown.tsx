'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { NavItem } from '@/lib/navigation';

// Desktop dropdown: opens on mouse hover, click/tap, Enter/Space. A click right after a
// hover-open keeps it open (the next click closes). Touch never uses hover, so a tap
// simply toggles. Escape closes and returns focus; leaving with the mouse, moving focus
// out, or pressing anywhere outside closes it.
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const openedByHover = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const close = () => {
    openedByHover.current = false;
    setOpen(false);
  };

  // Touch devices (and Safari, which does not focus buttons on click) never fire blur
  // when tapping elsewhere, so close on any press outside the dropdown.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      openedByHover.current = false;
      setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse' || open) return;
        openedByHover.current = true;
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') close();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          close();
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          if (open && openedByHover.current) {
            // First click after hover-open: confirm open instead of toggling it shut.
            openedByHover.current = false;
            return;
          }
          openedByHover.current = false;
          setOpen(!open);
        }}
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
              onClick={close}
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
