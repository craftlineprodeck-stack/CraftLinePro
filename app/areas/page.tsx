import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getPage, getRegionsWithReadyCities } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const page = getPage('areas');

export const metadata = pageMetadata(page);

export default function Page() {
  const groups = getRegionsWithReadyCities();
  return (
    <>
      <PagePlaceholder title={page.title} />
      {groups.length > 0 && (
        <Container className="space-y-10 pb-16">
          {groups.map(({ region, cities }) => (
            <section key={region.id} aria-labelledby={`region-${region.id}`}>
              <h2 id={`region-${region.id}`} className="text-xl font-semibold text-slate">
                {region.name}
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/areas/${city.slug}`}
                      className="block rounded-md border border-border bg-white p-5 font-display text-lg text-slate hover:border-amber"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Container>
      )}
    </>
  );
}
