import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getPage, getProjects } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

const page = getPage('projects');

export const metadata = pageMetadata(page);

export default function Page() {
  const projects = getProjects();
  return (
    <Container className="py-12 md:py-20">
      <h1 className="text-3xl font-semibold text-slate md:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Decks we have built, repaired and restored around Sacramento — every photo is from the job itself.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
