import type { ReactNode } from "react";

// Titre de section réutilisable : numéro mono + titre display + intro.
export function SectionHeading({
  num,
  title,
  intro,
}: {
  num: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{num}</span>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          {title}
        </h2>
      </div>
      {intro && (
        <p className="mt-3 max-w-reading text-ink-muted">{intro}</p>
      )}
    </div>
  );
}
