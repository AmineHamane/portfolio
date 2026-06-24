"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/** Animated count-up that preserves any non-digit suffix/prefix (e.g. "5+", "3"). */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(reduce ? String(target) : "0");

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export function About() {
  const { t, ui, site } = useI18n();
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <Reveal>
            <span className="mono-label">{ui("aboutEyebrow")}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-3xl font-semibold tracking-tight sm:text-4xl">
              {t(site.about.heading)}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">{t(site.about.body)}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {site.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card card-hover h-full p-5">
                <div className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                  <StatValue value={s.value} />
                </div>
                <div className="mt-2 text-sm text-fg-muted">{t(s.label)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
