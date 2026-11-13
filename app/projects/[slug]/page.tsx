import { notFound } from 'next/navigation';
import { PagePlaceholder } from '@/components/PagePlaceholder';
import { getProject, getReadyProjects } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getReadyProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project?.ready) return {};
  return pageMetadata({ path: `/projects/${project.slug}`, title: project.title, ready: project.ready });
}

export default async function Page({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project?.ready) notFound();
  return <PagePlaceholder title={project.title} />;
}
