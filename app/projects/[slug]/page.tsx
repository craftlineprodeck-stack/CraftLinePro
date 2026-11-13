import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { DraftNotice } from '@/components/projects/DraftNotice';
import { projectCompleted } from '@/components/projects/ProjectFacts';
import { formatFinish, getMaterialName, getProject, getProjectPlace, getProjects, getService } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';
import type { ProjectPhoto } from '@/data/types';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// Every project has a page; drafts (`ready: false`) are noindex and out of the sitemap.
export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata({
    path: `/projects/${project.slug}`,
    title: project.title,
    ready: project.ready,
    description: project.summary,
  });
}

function Photo({ photo, sizes, priority }: { photo: ProjectPhoto; sizes: string; priority?: boolean }) {
  return (
    <a href={photo.src} className="block overflow-hidden rounded-md bg-surface-alt" target="_blank" rel="noopener">
      <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={sizes} priority={priority} className="h-auto w-full" />
    </a>
  );
}

export default async function Page({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const byId = new Map(project.photos.map((p) => [p.id, p]));
  const cover = byId.get(project.coverId) ?? project.photos[0];
  const inPairs = new Set(project.beforeAfter.flatMap((p) => [p.beforeId, p.afterId]));
  const gallery = project.photos.filter((p) => p.id !== cover.id && !inPairs.has(p.id));
  const place = getProjectPlace(project.city);

  const facts: [string, ReactNode][] = [
    ['City', place.citySlug ? <Link href={`/areas/${place.citySlug}`} className="underline hover:text-amber-600">{place.name}</Link> : place.name],
    ['Material', project.materials.map(getMaterialName).join(', ')],
  ];
  if (project.areaSqFt) facts.push(['Area', `${project.areaApprox ? 'about ' : ''}${project.areaSqFt} sq ft`]);
  if (project.days) facts.push(['Time on site', `${project.days} ${project.days === 1 ? 'day' : 'days'}`]);
  if (project.finish) facts.push(['Finish', formatFinish(project.finish)]);
  facts.push(['Completed', projectCompleted(project)]);
  facts.push([
    'Services',
    project.services.map((s, i) => (
      <span key={s}>
        {i > 0 && ', '}
        <Link href={`/${s}`} className="underline hover:text-amber-600">{getService(s).name}</Link>
      </span>
    )),
  ]);

  return (
    <Container className="py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <Link href="/projects" className="hover:text-amber-600">Projects</Link> <span aria-hidden>/</span> {project.title}
      </nav>
      <h1 className="mt-3 text-3xl font-semibold text-slate md:text-5xl">{project.title}</h1>
      {!project.ready && (
        <div className="mt-6">
          <DraftNotice todo={project.todo} />
        </div>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <Photo photo={cover} sizes="(min-width: 1024px) 60vw, 100vw" priority />
        <div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 rounded-md border border-border bg-white p-5 text-sm">
            {facts.map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="font-semibold text-slate">{label}</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          {project.finish?.brand && <p className="mt-3 text-xs text-muted">Finish product: {project.finish.brand}</p>}
          <h2 className="mt-8 text-xl font-semibold text-slate">The deck before</h2>
          <p className="mt-2 text-ink">{project.before}</p>
          <h2 className="mt-6 text-xl font-semibold text-slate">What we did</h2>
          <p className="mt-2 text-ink">{project.whatWeDid}</p>
        </div>
      </div>

      {project.beforeAfter.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate">Before &amp; after</h2>
          <div className="mt-6 space-y-10">
            {project.beforeAfter.map((pair) => {
              const before = byId.get(pair.beforeId);
              const after = byId.get(pair.afterId);
              if (!before || !after) return null;
              return (
                <figure key={`${pair.beforeId}-${pair.afterId}`}>
                  <div className="grid grid-cols-2 gap-3">
                    {[['Before', before], ['After', after]].map(([label, photo]) => (
                      <div key={label as string}>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">{label as string}</p>
                        <Photo photo={photo as ProjectPhoto} sizes="(min-width: 1024px) 36rem, 50vw" />
                      </div>
                    ))}
                  </div>
                  <figcaption className="mt-2 text-sm text-muted">{pair.caption}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-slate">More from this project</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((photo) => (
              <figure key={photo.id}>
                <Photo photo={photo} sizes="(min-width: 768px) 33vw, 50vw" />
                <figcaption className="mt-1 text-xs text-muted">{photo.shows}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <p className="mt-14">
        <Link href="/projects" className="font-semibold text-amber-600 hover:text-slate">← All projects</Link>
      </p>
    </Container>
  );
}
