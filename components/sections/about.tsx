import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Docker",
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
            Développeur fullstack, je conçois des applications web du schéma de
            base de données jusqu'à l'interface. J'aime les projets où la
            technique sert un vrai besoin produit — et où la qualité se voit.
          </p>
          <p>
            Je privilégie le code lisible, les tests qui comptent et les
            interfaces qui se passent d'explication. Quand je livre, ça tourne.
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
