import { notFound } from 'next/navigation';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getCities, getCity } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

// Every city has a page; it stays noindex and out of the sitemap until `ready`.
export function generateStaticParams() {
  return getCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const city = getCity((await params).city);
  if (!city) return {};
  return pageMetadata({ path: `/areas/${city.slug}`, title: city.name, ready: city.ready });
}

export default async function Page({ params }: Props) {
  const city = getCity((await params).city);
  if (!city) notFound();
  return <PagePlaceholder title={city.name} />;
}
