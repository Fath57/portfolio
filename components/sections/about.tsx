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
            Développeur fullstack, je conçois depuis 7 ans des applications
            métier et des systèmes d'information de gestion : SaaS, banque et
            microfinance, marchés publics, projets internationaux.
          </p>
          <p>
            J'interviens sur tout le cycle — analyse des besoins, architecture,
            modélisation des données, développement, CI/CD et mise en
            production — et j'ai l'habitude d'encadrer des équipes et de porter
            les choix techniques. J'intègre aussi l'IA dans les applications
            que je livre.
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
