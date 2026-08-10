import { SectionHeading } from "./section-heading";

// La colonne vertébrale du parcours. Le détail complet est dans le CV.
const steps = [
  {
    period: "2026 · auj.",
    role: "Développeur fullstack & IA (alternance)",
    company: "Lonestone",
    place: "Nantes",
    note: "Applications web et intégration d'IA pour les clients de l'agence, en NestJS et React.",
  },
  {
    period: "2024 · 2025",
    role: "Développeur fullstack",
    company: "L'Agence du Déménagement",
    place: "Paris",
    note: "DemCRM, le CRM des déménageurs, du premier commit à la mise en ligne.",
  },
  {
    period: "2022 · 2024",
    role: "Développeur fullstack / lead",
    company: "Nautilus Technology",
    place: "Cotonou",
    note: "Produits SaaS, applications pour le secteur public et encadrement d'une équipe de développeurs.",
  },
  {
    period: "2018 · 2022",
    role: "Développeur back-end puis fullstack",
    company: "DMD, Suntech, Soft Digital",
    place: "Cotonou",
    note: "Applications web et mobiles, surtout pour la banque et la microfinance.",
  },
] as const;

export function Experience() {
  return (
    <section
      id="parcours"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading num="03" title="Parcours" />
      <ol className="divide-y divide-border">
        {steps.map((step) => (
          <li
            key={step.period}
            className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <span className="font-mono text-xs text-ink-faint tabular-nums sm:pt-1">
              {step.period}
            </span>
            <div>
              <h3 className="font-display text-base font-semibold">
                {step.role} · <span className="text-accent">{step.company}</span>
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {step.note}{" "}
                <span className="font-mono text-xs text-ink-faint">
                  {step.place}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
