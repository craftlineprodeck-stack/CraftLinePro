import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/types';
import { projectFactsLine } from './ProjectFacts';

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.photos.find((p) => p.id === project.coverId) ?? project.photos[0];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] bg-surface-alt">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {!project.ready && (
          <span className="absolute left-3 top-3 rounded-sm bg-slate px-2 py-1 text-xs font-semibold text-white">Draft</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold leading-snug text-slate">{project.title}</h2>
        <p className="text-sm font-medium text-amber-600">{projectFactsLine(project)}</p>
        <p className="text-sm text-muted">{project.summary}</p>
      </div>
    </Link>
  );
}
