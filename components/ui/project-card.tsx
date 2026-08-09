import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Badge } from "./badge";
import { ProjectArt } from "./project-art";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-surface shadow-card transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="border-b border-border bg-surface-2 px-5 pt-5">
        <ProjectArt slug={project.slug} className="block w-full" />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <span className="font-mono text-xs text-ink-faint tabular-nums">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-sm text-ink-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-[gap] group-hover:gap-2.5">
          Lire l'étude de cas <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
