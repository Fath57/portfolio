"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Lit le thème posé par le script anti-flash au premier render client.
  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) ?? "light";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* stockage indisponible — on ignore */
    }
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Passer en thème clair" : "Passer en thème sombre"}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
    >
      {/* Avant l'hydratation, theme est null → on garde le bouton neutre */}
      <span aria-hidden className="text-sm leading-none">
        {theme === null ? "◐" : isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
