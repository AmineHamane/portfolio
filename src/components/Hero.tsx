"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ForecastChart } from "./ForecastChart";
import { GithubIcon } from "./icons";

export function Hero() {
  const { t, ui, site } = useI18n();
  const reduce = useReducedMotion();
  const roles = site.hero.rotatingRoles;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:pt-44">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-wide text-fg-muted">
              {ui("openToWork")}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mono-label mt-6"
          >
            {t(site.hero.eyebrow)}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-3 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-fg">{site.identity.name}</span>
          </motion.h1>

          {/* rotating role */}
          <div className="mt-3 flex h-9 items-center text-xl font-medium sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -14 }}
                transition={{ duration: 0.35 }}
                className="text-gradient font-[family-name:var(--font-space-grotesk)]"
              >
                {t(roles[idx])}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-lg leading-snug text-fg sm:text-xl"
          >
            {t(site.hero.headline)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted"
          >
            {t(site.hero.subhead)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "0 8px 30px -8px rgba(34,211,238,0.5)" }}
            >
              {t(site.hero.ctaPrimary)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50"
            >
              <Mail className="h-4 w-4" />
              {t(site.hero.ctaSecondary)}
            </a>
            <a
              href={site.identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex items-center gap-2 text-sm text-fg-dim"
          >
            <MapPin className="h-4 w-4" />
            {t(site.identity.location)}
          </motion.div>
        </div>

        {/* Right: terminal panel with forecast chart */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="card overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose/70" />
              <span className="h-3 w-3 rounded-full bg-[#f5b342]/70" />
              <span className="h-3 w-3 rounded-full bg-lime/70" />
            </div>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.7rem] tracking-wide text-fg-dim">
              eurusd_tft.forecast()
            </span>
          </div>
          <div className="px-3 pt-4">
            <ForecastChart />
            <p className="px-2 pb-1 pt-1 text-right font-[family-name:var(--font-jetbrains-mono)] text-[0.62rem] text-fg-dim">
              {ui("chartIllustrative")}
            </p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-border border-t border-border font-[family-name:var(--font-jetbrains-mono)] text-xs">
            <div className="px-4 py-3">
              <div className="text-fg-dim">model</div>
              <div className="mt-1 font-semibold text-accent">TFT</div>
            </div>
            <div className="px-4 py-3">
              <div className="text-fg-dim">horizon</div>
              <div className="mt-1 font-semibold text-fg">next-bar</div>
            </div>
            <div className="px-4 py-3">
              <div className="text-fg-dim">signal</div>
              <div className="mt-1 font-semibold text-lime">fused</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
