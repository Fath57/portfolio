"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

// Menu mobile : disclosure sous la barre sticky, fermé au clic sur un lien.
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
      >
        <span aria-hidden className="text-sm leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full border-b border-border bg-bg/95 backdrop-blur-md"
        >
          <nav
            aria-label="Navigation mobile"
            className="mx-auto flex max-w-5xl flex-col px-6 py-2"
          >
            {nav.map((item) => {
              const isActive =
                !item.href.includes("#") && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-border py-3 font-mono text-sm transition-colors hover:text-ink ${
                    isActive ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={site.cvHref}
              onClick={() => setOpen(false)}
              className="py-3 font-mono text-sm text-accent"
            >
              Télécharger le CV →
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
