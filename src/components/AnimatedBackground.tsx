"use client";

import { motion, useReducedMotion } from "motion/react";
import { Starfield } from "./Starfield";

const grain =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Ambient backdrop: twinkling starfield + two drifting brand glows + a vignette
 * to true black + film grain. Purely decorative.
 */
export function AnimatedBackground() {
  const reduce = useReducedMotion();
  return (
    <>
      <Starfield />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-48 -left-40 h-[46rem] w-[46rem] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(129,74,200,0.22), transparent 60%)" }}
          animate={reduce ? undefined : { x: [0, 70, 0], y: [0, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -right-48 h-[42rem] w-[42rem] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(223,122,254,0.16), transparent 60%)" }}
          animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* vignette to true black */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 92% 82% at 50% 22%, transparent 54%, #000 96%)" }}
        />
        {/* film grain */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
          style={{ backgroundImage: grain, backgroundSize: "180px 180px" }}
        />
      </div>
    </>
  );
}
