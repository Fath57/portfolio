import Link from "next/link";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";

// Ce qui tourne en prod, vérifiable. C'est la preuve, pas de la décoration.
const live = [
  { label: "tick.africa", href: "https://tick.africa" },
  { label: "demcrm.com", href: "https://demcrm.com" },
  { label: "systèmes métier au Bénin" },
] as const;

// Hiérarchie du regard : qui (nom, H1) → quoi (rôle en eyebrow) → preuve (en prod).
export function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <div aria-hidden className="hero-grid absolute inset-x-0 top-0 -z-10 h-[26rem]" />

      {site.available && (
        <Link
          href="/#contact"
          className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
          Disponible
        </Link>
      )}
      <p className="rise rise-2 font-mono text-sm text-accent">
        {site.role} · {site.location}
      </p>
      <h1 className="rise rise-2 mt-3 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
        {site.name}
        <span className="text-accent">.</span>
      </h1>
      <p className="rise rise-3 mt-6 max-w-reading text-lg text-ink-muted">
        {site.tagline}
      </p>
      <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
        <ButtonLink href="#projets">Voir les projets →</ButtonLink>
        <ButtonLink href="/#contact" variant="ghost">
          Me contacter
        </ButtonLink>
      </div>

      <div className="rise rise-5 mt-12">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
          En production
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {live.map((item) => (
            <li key={item.label}>
              {"href" in item ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-accent-line hover:text-ink"
                >
                  <span className="dot-live h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
                  {item.label} ↗
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
                  <span className="dot-live h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
