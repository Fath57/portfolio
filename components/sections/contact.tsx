import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

// mailto pré-rempli : le recruteur n'a plus qu'à cliquer sur envoyer.
const cvParMail = `mailto:${site.email}?subject=${encodeURIComponent(
  "Demande de CV"
)}&body=${encodeURIComponent("Bonjour Arafath,\n\nPouvez-vous m'envoyer votre CV ?\n\n")}`;

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16"
    >
      <SectionHeading
        num="05"
        title="Travaillons ensemble"
        intro="Un poste, un projet ou juste une question ? Écris-moi, je réponds vite."
      />
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href={`mailto:${site.email}`} target="_blank" rel="noopener noreferrer">
          M'écrire
        </ButtonLink>
        <ButtonLink href={site.cvHref} variant="ghost">
          Télécharger le CV
        </ButtonLink>
      </div>
      <p className="mt-4 text-sm text-ink-muted">
        Vous préférez recevoir le CV par mail ?{" "}
        <a
          href={cvParMail}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent-line underline-offset-4 transition-colors hover:decoration-accent"
        >
          Demandez-le en un clic
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink-muted">
        <a
          href={`mailto:${site.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
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
