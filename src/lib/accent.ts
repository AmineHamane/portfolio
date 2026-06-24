import type { Accent } from "@/content/types";

export const ACCENTS: Record<Accent, { hex: string; rgb: string; label: string }> = {
  cyan: { hex: "#22d3ee", rgb: "34, 211, 238", label: "cyan" },
  lime: { hex: "#a3e635", rgb: "163, 230, 53", label: "lime" },
  violet: { hex: "#a78bfa", rgb: "167, 139, 250", label: "violet" },
  rose: { hex: "#fb7185", rgb: "251, 113, 133", label: "rose" },
};

export const accentHex = (a: Accent) => ACCENTS[a].hex;
export const accentRgb = (a: Accent) => ACCENTS[a].rgb;
/** rgba() string for an accent at a given alpha. */
export const accentA = (a: Accent, alpha: number) => `rgba(${ACCENTS[a].rgb}, ${alpha})`;
