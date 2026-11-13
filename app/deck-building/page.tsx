import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getService } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const service = getService('deck-building');

export const metadata = pageMetadata({ path: '/deck-building', title: service.name, ready: service.ready });

export default function Page() {
  return <PagePlaceholder title={service.name} />;
}
