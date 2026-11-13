import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getService } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const service = getService('deck-railings-stairs');

export const metadata = pageMetadata({ path: '/deck-railings-stairs', title: service.name, ready: service.ready });

export default function Page() {
  return <PagePlaceholder title={service.name} />;
}
