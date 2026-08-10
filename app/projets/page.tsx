import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata: Metadata = {
  title: "Projets",
  description: "Sélection de projets fullstack : études de cas et réalisations.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <header className="mb-12">
        <span className="font-mono text-sm text-accent">Projets</span>
        <h1 className="mt-3 font-display text-4xl font-bold">
          Ce que j'ai construit
        </h1>
        <p className="mt-4 max-w-reading text-lg text-ink-muted">
          Pour chaque projet : le contexte, ce que j'ai fait et le résultat.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
