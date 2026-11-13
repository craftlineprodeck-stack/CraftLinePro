import { PagePlaceholder } from '@/components/PagePlaceholder';
import { site } from '@/data/site';
import { getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const page = getPage('home');

export const metadata = pageMetadata(page);

export default function Page() {
  return <PagePlaceholder title={site.name} />;
}
