import type { Accent } from "@/content/types";

export const ACCENTS: Record<Accent, { hex: string; rgb: string; label: string }> = {
  pink: { hex: "#df7afe", rgb: "223, 122, 254", label: "pink" },
  purple: { hex: "#814ac8", rgb: "129, 74, 200", label: "purple" },
  cyan: { hex: "#22d3ee", rgb: "34, 211, 238", label: "cyan" },
  lime: { hex: "#c7f03a", rgb: "199, 240, 58", label: "lime" },
};

export const accentHex = (a: Accent) => ACCENTS[a].hex;
export const accentRgb = (a: Accent) => ACCENTS[a].rgb;
/** rgba() string for an accent at a given alpha. */
export const accentA = (a: Accent, alpha: number) => `rgba(${ACCENTS[a].rgb}, ${alpha})`;
/** The brand purple→pink gradient (CSS). */
export const BRAND_GRADIENT = "linear-gradient(90deg, #814ac8, #df7afe)";
