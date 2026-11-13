import type { ReactNode } from 'react';

// Content width from the --container-site token; 16px side gutter on phones.
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-4 sm:px-6 ${className}`}>{children}</div>;
}
