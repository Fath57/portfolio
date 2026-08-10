import Link from "next/link";
import { featuredProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section
      id="projets"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading
        num="01"
        title="Projets"
        intro="Trois projets qui donnent une bonne idée de ce que je fais."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <Link
        href="/projets"
        className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-[gap] hover:gap-2.5"
      >
        Tous les projets <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
