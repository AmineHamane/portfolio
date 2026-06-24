"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
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
        scrolled ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="skip-link rounded-md border border-accent bg-bg px-4 py-2 text-sm font-medium text-accent"
      >
        {ui("skipToContent")}
      </a>
      <motion.div
        className="absolute bottom-0 left-0 h-px origin-left bg-accent"
        style={{ scaleX: progress, width: "100%" }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Amine Hamane — home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent transition-colors group-hover:border-accent/50">
            AH
          </span>
          <span className="hidden font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-tight sm:block">
            Amine&nbsp;Hamane
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg",
                active === id && "text-accent",
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
            className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium"
          >
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
                aria-label={l === "en" ? ui("langEnglish") : ui("langFrench")}
                className={cn(
                  "rounded-full px-2.5 py-1.5 font-[family-name:var(--font-jetbrains-mono)] uppercase transition-colors",
                  locale === l ? "bg-accent text-bg" : "text-fg-muted hover:text-fg",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/cv"
            className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20 sm:flex"
          >
            <Download className="h-4 w-4" />
            {ui("downloadCv")}
          </Link>

          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-fg md:hidden"
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
            className="glass overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-fg-muted hover:bg-surface hover:text-fg"
                >
                  {ui(NAV_KEYS[id])}
                </a>
              ))}
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-3 text-base font-medium text-accent"
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
