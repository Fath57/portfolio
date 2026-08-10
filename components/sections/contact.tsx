import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading
        num="03"
        title="Travaillons ensemble"
        intro="Un poste, un projet ou juste une question ? Écris-moi, je réponds vite."
      />
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href={`mailto:${site.email}`}>M'écrire</ButtonLink>
        <ButtonLink href={site.cvHref} variant="ghost">
          Télécharger le CV
        </ButtonLink>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink-muted">
        <a href={`mailto:${site.email}`} className="hover:text-accent">
          {site.email}
        </a>
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          GitHub ↗
        </a>
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
