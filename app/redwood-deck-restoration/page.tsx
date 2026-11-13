import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getService } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const service = getService('redwood-deck-restoration');

export const metadata = pageMetadata({ path: '/redwood-deck-restoration', title: service.name, ready: service.ready });

export default function Page() {
  return <PagePlaceholder title={service.name} />;
}
