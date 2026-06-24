"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Fixed, full-viewport ambient backdrop: subtle grid, two drifting accent
 * glows, and a faint scanline vignette. Purely decorative (aria-hidden).
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="absolute inset-0 bg-dots opacity-40" />

      <motion.div
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.16), transparent 60%)" }}
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.10), transparent 60%)" }}
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}
