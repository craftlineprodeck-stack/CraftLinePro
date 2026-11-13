'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { NavItem } from '@/lib/navigation';
import { Container } from './Container';

// Desktop dropdown: opens on mouse hover, click/tap, Enter/Space. A click right after a
// hover-open keeps it open (the next click closes). Touch never uses hover, so a tap
// simply toggles. Escape closes and returns focus; leaving with the mouse, moving focus
// out, or pressing anywhere outside closes it.
// An item with `groups` (Service Areas) opens a full-width panel under the header with one
// column per group and the item's `children` as trailing links, so it never runs off-screen.
// Its hover zone is only as wide as the button, so a diagonal mouse path toward a far column
// briefly leaves it; for that panel, mouse-leave closes after a short delay that re-entering
// the button or the panel cancels.
const LEAVE_DELAY_MS = 300;

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const openedByHover = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const grouped = Boolean(item.groups?.length);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelLeave = () => {
    if (leaveTimer.current !== null) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };

  const close = () => {
    cancelLeave();
    openedByHover.current = false;
    setOpen(false);
  };

  useEffect(() => cancelLeave, []);

  // Touch devices (and Safari, which does not focus buttons on click) never fire blur
  // when tapping elsewhere, so close on any press outside the dropdown.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      close();
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      // Grouped: not positioned, so the panel anchors to the header; stretched to the header's
      // full height so the mouse can move from the button into the panel without leaving.
      className={grouped ? 'flex self-stretch items-center' : 'relative'}
      onPointerEnter={(e) => {
        if (e.pointerType !== 'mouse') return;
        cancelLeave();
        if (open) return;
        openedByHover.current = true;
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== 'mouse') return;
        if (!grouped) {
          close();
          return;
        }
        cancelLeave();
        leaveTimer.current = setTimeout(close, LEAVE_DELAY_MS);
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
          if (open) close();
          else setOpen(true);
        }}
        className="flex items-center gap-1 rounded-sm px-2 py-2 text-sm font-medium text-ink hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-amber"
      >
        {item.label}
        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {grouped ? (
        <div
          id={menuId}
          hidden={!open}
          className="absolute inset-x-0 top-full z-50 border-y border-border bg-white shadow-lg"
        >
          <Container className="py-6">
            <div className="grid grid-cols-4 gap-6">
              {item.groups?.map((group) => (
                <div key={group.label}>
                  <p className="px-2 text-xs font-semibold uppercase tracking-wider text-muted">{group.label}</p>
                  <ul className="mt-2">
                    {group.items.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={close}
                          className="block rounded-sm px-2 py-1.5 text-sm text-ink hover:bg-surface-alt focus-visible:bg-surface-alt focus-visible:outline-none"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {item.children?.length ? (
              <ul className="mt-4 border-t border-border pt-4">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={close}
                      className="inline-block rounded-sm px-2 py-1.5 text-sm font-semibold text-slate hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-amber"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </Container>
        </div>
      ) : (
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
      )}
    </div>
  );
}
