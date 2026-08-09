import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { NavLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { ButtonLink } from "./ui/button";

// Nav globale sticky et discrète : nom, liens, thème, bouton CV, menu mobile.
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3">
        <Link href="/" className="font-mono text-sm">
          {site.name.toLowerCase().replace(/\s+/g, "")}
          <span className="text-accent">.</span>
        </Link>

        <NavLinks />

        <div className="ml-auto flex items-center gap-2 sm:ml-2">
          <ThemeToggle />
          <ButtonLink href={site.cvHref} variant="ghost" className="hidden sm:inline-flex">
            CV
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
