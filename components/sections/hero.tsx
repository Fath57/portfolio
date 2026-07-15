import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      {site.available && (
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
          <span
            className="h-1.5 w-1.5 rounded-full bg-success"
            aria-hidden
          />
          Disponible
        </span>
      )}
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
        {site.role}.
      </h1>
      <p className="mt-5 max-w-reading text-lg text-ink-muted">{site.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/projets">Voir les projets →</ButtonLink>
        <ButtonLink href="/#contact" variant="ghost">
          Me contacter
        </ButtonLink>
      </div>
    </section>
  );
}
