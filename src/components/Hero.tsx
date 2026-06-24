"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ForecastChart } from "./ForecastChart";
import { GithubIcon } from "./icons";
import { Eyebrow, GhostButton, GradientButton } from "./ui";

export function Hero() {
  const { t, ui, site } = useI18n();
  const reduce = useReducedMotion();
  const roles = site.hero.rotatingRoles;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  const ease = [0.16, 1, 0.3, 1] as const;
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:pt-44">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Left: copy */}
        <div>
          <motion.div {...rise(0)} className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              <span className="text-xs font-medium text-fg-muted">{ui("openToWork")}</span>
            </span>
            <Eyebrow>{t(site.hero.eyebrow)}</Eyebrow>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {site.identity.name}
          </motion.h1>

          {/* rotating role — animated brand gradient */}
          <div className="mt-3 flex h-10 items-center text-2xl font-semibold sm:text-3xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: reduce ? 0 : 14, filter: reduce ? "blur(0px)" : "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: reduce ? 0 : -14, filter: reduce ? "blur(0px)" : "blur(8px)" }}
                transition={{ duration: 0.4 }}
                className="animated-gradient"
              >
                {t(roles[idx])}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.h2 {...rise(0.16)} className="mt-6 max-w-xl text-lg leading-snug text-fg sm:text-xl">
            {t(site.hero.headline)}
          </motion.h2>

          <motion.p {...rise(0.22)} className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
            {t(site.hero.subhead)}
          </motion.p>

          <motion.div {...rise(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
            <GradientButton href="#projects">
              {t(site.hero.ctaPrimary)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </GradientButton>
            <GhostButton href="#contact">
              <Mail className="h-4 w-4" />
              {t(site.hero.ctaSecondary)}
            </GhostButton>
            <a
              href={site.identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-fg-muted transition-colors hover:bg-white/[0.08] hover:text-fg"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div {...rise(0.4)} className="mt-6 flex items-center gap-2 text-sm text-fg-dim">
            <MapPin className="h-4 w-4" />
            {t(site.identity.location)}
          </motion.div>
        </div>

        {/* Right: trading-terminal panel with forecast chart */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="card overflow-hidden"
          style={{ boxShadow: "0 40px 120px -50px rgba(223,122,254,0.5)" }}
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
              <div className="mt-1 font-semibold text-pink">TFT</div>
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
