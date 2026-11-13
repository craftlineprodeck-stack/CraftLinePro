import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getService } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const service = getService('deck-repair');

export const metadata = pageMetadata({ path: '/deck-repair', title: service.name, ready: service.ready });

export default function Page() {
  return <PagePlaceholder title={service.name} />;
}
