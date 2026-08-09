import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProjectArt } from "@/components/ui/project-art";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const caseStudy = project.caseStudy && [
    { label: "Problème", text: project.caseStudy.problem },
    { label: "Solution", text: project.caseStudy.solution },
    { label: "Mon rôle", text: project.caseStudy.role },
    { label: "Résultat", text: project.caseStudy.result },
  ];

  return (
    <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Link
        href="/projets"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-accent"
      >
        <span aria-hidden>←</span> Tous les projets
      </Link>

      {project.image ? (
        <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-lg border border-border bg-surface-2">
          <Image
            src={project.image}
            alt={`Capture d'écran de ${project.title}`}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface-2 px-8 pt-8 sm:px-16 sm:pt-10">
          <ProjectArt slug={project.slug} className="mx-auto block w-full max-w-xl" />
        </div>
      )}

      <header className="mt-10">
        <span className="font-mono text-sm text-ink-faint tabular-nums">
          {project.year}
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 max-w-reading text-lg text-ink-muted">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {(project.links?.demo || project.links?.code) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.demo && (
              <ButtonLink
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir la démo ↗
              </ButtonLink>
            )}
            {project.links.code && (
              <ButtonLink
                href={project.links.code}
                variant={project.links.demo ? "ghost" : "primary"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le code ↗
              </ButtonLink>
            )}
          </div>
        )}
      </header>

      {caseStudy && (
        <div className="mt-14 max-w-reading space-y-10 border-t border-border pt-10">
          {caseStudy.map(({ label, text }) => (
            <section key={label}>
              <h2 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                {label}
              </h2>
              <p className="text-ink-muted">{text}</p>
            </section>
          ))}
        </div>
      )}
    </article>
  );
}
