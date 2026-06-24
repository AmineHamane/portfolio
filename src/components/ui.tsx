import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const BRAND_GRADIENT = "linear-gradient(90deg, #814ac8, #df7afe)";

/** Small pill label with a pink dot — section eyebrows / badges. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5",
        "font-[family-name:var(--font-jetbrains-mono)] text-[0.7rem] font-medium uppercase tracking-[0.16em] text-fg-muted",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-pink" />
      {children}
    </span>
  );
}

/** Gradient pill button (primary CTA). Renders an anchor. */
export function GradientButton({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white",
        "transition-transform duration-200 hover:scale-[1.03]",
        className,
      )}
      style={{ backgroundImage: BRAND_GRADIENT, boxShadow: "0 0 34px -12px rgba(223,122,254,0.55)" }}
    >
      {children}
    </a>
  );
}

/** Glass outline pill button (secondary). */
export function GhostButton({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-fg",
        "transition-colors hover:bg-white/[0.08]",
        className,
      )}
    >
      {children}
    </a>
  );
}
