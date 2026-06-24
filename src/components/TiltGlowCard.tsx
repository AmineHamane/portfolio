"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A card that tilts in 3D toward the cursor, lights a pointer-following glow,
 * and lifts on hover. Falls back to a static glass card under reduced-motion.
 * Adds `group` so inner elements can react to hover.
 */
export function TiltGlowCard({
  accent,
  children,
  className = "",
}: {
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5.5, -5.5]), { stiffness: 150, damping: 16 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5.5, 5.5]), { stiffness: 150, damping: 16 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, ${accent}24, transparent 55%)`;

  const base = cn("card group relative", className);

  if (reduce) {
    return (
      <div className={base} style={{ borderColor: `${accent}26` }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={base}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
        gx.set(((e.clientX - r.left) / r.width) * 100);
        gy.set(((e.clientY - r.top) / r.height) * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.012 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
        borderColor: `${accent}30`,
      }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative h-full" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
