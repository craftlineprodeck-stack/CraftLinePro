import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-6xl font-bold text-slate md:text-8xl">404</h1>
      <p className="mt-4 text-xl text-muted">Page not found</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-amber px-6 py-3 font-semibold text-slate-900 hover:bg-amber-600"
      >
        Go to homepage
      </Link>
    </Container>
  );
}
