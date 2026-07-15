import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { ButtonLink } from "./ui/button";

// Nav globale sticky et discrète : nom, liens, thème, bouton CV.
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3">
        <Link href="/" className="font-mono text-sm">
          {site.name.toLowerCase().replace(/\s+/g, "")}
          <span className="text-accent">.</span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="ml-auto hidden items-center gap-1 sm:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[--radius-sm] px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-2">
          <ThemeToggle />
          <ButtonLink href={site.cvHref} variant="ghost" className="hidden sm:inline-flex">
            CV
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
