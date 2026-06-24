"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle twinkling, drifting starfield over true black. Fixed, behind content,
 * motion-aware. Stars are tinted white / purple / pink to echo the brand.
 */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    type Star = { x: number; y: number; r: number; base: number; amp: number; sp: number; ph: number; vx: number; vy: number; color: string };
    let stars: Star[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(190, Math.max(80, Math.floor((w * h) / 8500)));
      stars = Array.from({ length: count }, () => {
        const tint = Math.random();
        const color = tint < 0.2 ? "223, 122, 254" : tint < 0.36 ? "129, 74, 200" : "255, 255, 255";
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.5 + Math.random() * 1.3,
          base: 0.1 + Math.random() * 0.34,
          amp: 0.06 + Math.random() * 0.22,
          sp: 0.4 + Math.random() * 1.6,
          ph: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          color,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!reduced) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0) s.x = w;
          if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h;
          if (s.y > h) s.y = 0;
        }
        const a = reduced ? s.base : Math.max(0, s.base + Math.sin(t * s.sp + s.ph) * s.amp);
        ctx.fillStyle = `rgba(${s.color}, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      t += 0.016;
      draw();
      raf = requestAnimationFrame(tick);
    };

    resize();
    if (reduced) draw();
    else tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-20 h-full w-full" />;
}
