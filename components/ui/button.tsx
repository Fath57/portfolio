import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-[background-color,border-color,transform] duration-150 active:translate-y-px motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-accent-strong",
  ghost:
    "border border-border-strong text-ink hover:bg-surface-2 bg-transparent",
};

type ButtonLinkProps = {
  variant?: Variant;
  children: ReactNode;
} & ComponentProps<typeof Link>;

// Bouton-lien : 1 primaire max par écran, le fantôme pour le secondaire.
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
