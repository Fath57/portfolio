import type { ReactNode } from "react";

type Tone = "neutral" | "accent" | "success" | "warning";

const tones: Record<Tone, string> = {
  neutral: "border-border text-ink-muted bg-surface",
  accent: "border-accent-line text-accent bg-accent-soft",
  success: "border-transparent text-success bg-success-soft",
  warning: "border-transparent text-warning bg-warning-soft",
};

// Badge : stack technique (neutre) ou état (sémantique). Jamais décoratif.
export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-xs ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
