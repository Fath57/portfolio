import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./section-heading";

// Le côté perso : entrepreneuriat, Station F, projets en dehors du travail.
export function Beyond() {
  return (
    <section
      id="en-dehors"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading num="03" title="En dehors du code" />
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="max-w-reading space-y-4 text-ink-muted">
          <p>
            Le développement n'est pas juste mon métier. Ce qui me plaît,
            c'est de créer des produits de zéro, et l'entrepreneuriat m'attire
            autant que la technique : en 2025, j'ai été incubé à Station F, le
            plus grand campus de startups d'Europe, avec{" "}
            <Link
              href="/projets/saas-demenagement"
              className="text-ink underline decoration-accent-line underline-offset-4 transition-colors hover:text-accent"
            >
              DemCRM
            </Link>
            .
          </p>
          <p>
            Mon projet perso du moment : Discover229, une plateforme pour
            faire découvrir le Bénin, ses destinations et ses agences de
            voyage. Le 229, c'est l'indicatif du pays.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            Entrepreneuriat · Voyage · Sport · Lecture
          </p>
        </div>
        <a
          href="https://discover229.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-lg border border-border bg-surface shadow-card transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-surface-2">
            <Image
              src="/projects/discover229.jpg"
              alt="Capture d'écran de Discover229"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
          <div className="flex items-baseline justify-between gap-3 p-4">
            <span className="font-display font-semibold">Discover229</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-[gap] group-hover:gap-2.5">
              discover229.com <span aria-hidden>↗</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
