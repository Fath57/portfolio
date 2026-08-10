import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const stack = [
  "Laravel",
  "NestJS",
  "Node.js",
  "Vue.js / Nuxt",
  "React",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "CI/CD",
];

export function About() {
  return (
    <section
      id="a-propos"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading num="02" title="À propos" />
      <div className="grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="max-w-reading space-y-4 text-ink-muted">
          <p>
            Ça fait 7 ans que je développe des applications métier : des SaaS,
            des outils pour la banque et la microfinance, des plateformes pour
            le secteur public.
          </p>
          <p>
            Je prends les projets de bout en bout : analyse du besoin,
            architecture, base de données, développement, CI/CD et mise en
            production. J'ai souvent encadré des équipes et porté les choix
            techniques, et depuis quelque temps j'intègre de l'IA dans ce que
            je construis.
          </p>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
            Stack maîtrisée
          </p>
          <div className="flex flex-wrap gap-2 md:max-w-56">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
