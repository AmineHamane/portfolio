"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { BRAND_GRADIENT } from "./ui";

const SECTIONS = ["about", "skills", "projects", "experience", "contact"] as const;
const NAV_KEYS: Record<(typeof SECTIONS)[number], "navAbout" | "navSkills" | "navProjects" | "navExperience" | "navContact"> = {
  about: "navAbout",
  skills: "navSkills",
  projects: "navProjects",
  experience: "navExperience",
  contact: "navContact",
};

export function Nav() {
  const { ui, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-white/[0.06]" : "border-b border-transparent",
      )}
    >
      <a href="#main" className="skip-link rounded-md border border-pink bg-bg px-4 py-2 text-sm font-medium text-pink">
        {ui("skipToContent")}
      </a>
      <motion.div
        className="absolute bottom-0 left-0 h-px origin-left"
        style={{ scaleX: progress, width: "100%", backgroundImage: BRAND_GRADIENT }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Amine Hamane — home">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-white"
            style={{ backgroundImage: BRAND_GRADIENT, boxShadow: "0 0 24px -10px rgba(223,122,254,0.7)" }}
          >
            AH
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Amine&nbsp;Hamane</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-fg",
                active === id ? "text-pink" : "text-fg-muted",
              )}
            >
              {ui(NAV_KEYS[id])}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={ui("langGroup")}
            className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5 text-xs font-medium"
          >
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
                aria-label={l === "en" ? ui("langEnglish") : ui("langFrench")}
                className={cn(
                  "rounded-full px-2.5 py-1.5 font-[family-name:var(--font-jetbrains-mono)] uppercase transition-colors",
                  locale === l ? "text-white" : "text-fg-muted hover:text-fg",
                )}
                style={locale === l ? { backgroundImage: BRAND_GRADIENT } : undefined}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/cv"
            className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:flex"
            style={{ backgroundImage: BRAND_GRADIENT, boxShadow: "0 0 30px -12px rgba(223,122,254,0.55)" }}
          >
            <Download className="h-4 w-4" />
            {ui("downloadCv")}
          </Link>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={ui("menuToggle")}
            aria-controls="mobile-nav"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-fg-muted hover:bg-white/[0.04] hover:text-fg"
                >
                  {ui(NAV_KEYS[id])}
                </a>
              ))}
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-full px-4 py-3 text-base font-semibold text-white"
                style={{ backgroundImage: BRAND_GRADIENT }}
              >
                <Download className="h-4 w-4" />
                {ui("downloadCv")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
