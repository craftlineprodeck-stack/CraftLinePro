import { notFound } from 'next/navigation';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getCity, getReadyCities } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getReadyCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const city = getCity((await params).city);
  if (!city?.ready) return {};
  return pageMetadata({ path: `/areas/${city.slug}`, title: city.name, ready: city.ready });
}

export default async function Page({ params }: Props) {
  const city = getCity((await params).city);
  if (!city?.ready) notFound();
  return <PagePlaceholder title={city.name} />;
}
