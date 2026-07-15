import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

// Génère les pages statiques pour chaque projet (SSG).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

const steps = [
  { key: "problem", label: "Problème" },
  { key: "solution", label: "Solution" },
  { key: "role", label: "Mon rôle" },
  { key: "result", label: "Résultat" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-reading px-6 py-16 sm:py-20">
      <Link
        href="/projets"
        className="font-mono text-xs text-ink-muted hover:text-accent"
      >
        ← Tous les projets
      </Link>

      <header className="mt-6">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="font-display text-4xl font-bold">{project.title}</h1>
          <span className="font-mono text-sm text-ink-faint tabular-nums">
            {project.year}
          </span>
        </div>
        <p className="mt-4 text-lg text-ink-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </header>

      {project.caseStudy && (
        <div className="mt-12 space-y-8">
          {steps.map((step) => (
            <section key={step.key}>
              <h2 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                {step.label}
              </h2>
              <p className="text-ink">{project.caseStudy![step.key]}</p>
            </section>
          ))}
        </div>
      )}

      {(project.links?.demo || project.links?.code) && (
        <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
          {project.links.demo && (
            <ButtonLink href={project.links.demo}>Voir la démo →</ButtonLink>
          )}
          {project.links.code && (
            <ButtonLink href={project.links.code} variant="ghost">
              Code source
            </ButtonLink>
          )}
        </div>
      )}
    </article>
  );
}
