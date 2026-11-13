// Temporary logo (layered diamond + CRAFTLINE / DECKING) until the designer's SVG arrives.
// Colors come from tokens: the mark is amber, the wordmark follows `variant`.
import type { JSX } from 'react';

export function Logo({
  className = '',
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}): JSX.Element {
  const wordColor = variant === 'light' ? 'text-white' : 'text-slate';
  return (
    <span
      role="img"
      aria-label="CraftLine Decking"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <svg viewBox="0 0 32 36" className="h-9 w-8 shrink-0 text-amber" aria-hidden="true">
        <path d="M16 2 30 12 16 22 2 12Z" fill="currentColor" opacity="0.45" />
        <path d="M16 8 30 18 16 28 2 18Z" fill="currentColor" opacity="0.7" />
        <path d="M16 14 30 24 16 34 2 24Z" fill="currentColor" />
      </svg>
      <span className={`flex flex-col font-display leading-none ${wordColor}`} aria-hidden="true">
        <span className="text-lg font-semibold tracking-wider">CRAFTLINE</span>
        <span className="text-xs tracking-[0.35em] text-amber">DECKING</span>
      </span>
    </span>
  );
}
