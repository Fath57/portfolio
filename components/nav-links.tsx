"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

// Liens desktop avec état actif (aria-current) basé sur la route.
export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Navigation principale"
      className="ml-auto hidden items-center gap-1 sm:flex"
    >
      {nav.map((item) => {
        const isActive =
          !item.href.includes("#") && pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-sm px-3 py-1.5 font-mono text-xs transition-colors hover:bg-surface-2 hover:text-ink ${
              isActive ? "bg-surface-2 text-ink" : "text-ink-muted"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
