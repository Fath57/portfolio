import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {site.name} · {site.role}
        </p>
        <nav aria-label="Réseaux" className="flex gap-4">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-ink-muted transition-colors hover:text-accent"
          >
            E-mail
          </a>
        </nav>
      </div>
    </footer>
  );
}
