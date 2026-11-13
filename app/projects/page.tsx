import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const page = getPage('projects');

export const metadata = pageMetadata(page);

export default function Page() {
  return <PagePlaceholder title={page.title} />;
}
