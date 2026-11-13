import { Container } from './layout/Container';

// Stage-1 placeholder: page name + "Page in progress". No copy until the owner approves text.
export function PagePlaceholder({ title }: { title: string }) {
  return (
    <Container className="py-16 md:py-24">
      <h1 className="text-3xl font-semibold text-slate md:text-5xl">{title}</h1>
      <p className="mt-4 inline-block rounded-sm bg-surface-alt px-3 py-1 text-sm font-medium text-muted">
        Page in progress
      </p>
    </Container>
  );
}
