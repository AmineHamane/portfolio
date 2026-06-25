"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, X } from "lucide-react";
import type { Project } from "@/content/types";
import { GithubIcon } from "./icons";
import { useI18n } from "@/lib/i18n";
import { accentA, accentHex } from "@/lib/accent";
import { CATEGORY_UI, STATUS_UI } from "@/lib/projectMeta";
import { PipelineDiagram } from "./PipelineDiagram";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h4 className="mono-label" style={{ color: "var(--color-fg-dim)" }}>
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function BulletList({ items, hex }: { items: string[]; hex: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: hex }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, tl, ui } = useI18n();
  const hex = accentHex(project.accent);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    const trigger = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // Trap focus within the dialog.
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      // Return focus to whatever opened the dialog.
      trigger?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border bg-bg-soft sm:rounded-2xl"
        style={{ boxShadow: `0 -10px 60px -20px ${accentA(project.accent, 0.4)}` }}
      >
        {/* header */}
        <div
          className="glass sticky top-0 z-10 rounded-t-2xl border-b border-border px-6 py-4 sm:rounded-t-none"
          style={{ background: "rgba(9,12,18,0.92)" }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-1 font-[family-name:var(--font-jetbrains-mono)] text-[0.65rem] uppercase tracking-wide"
                  style={{ background: accentA(project.accent, 0.12), color: hex }}
                >
                  {ui(CATEGORY_UI[project.category])}
                </span>
                <span className="flex items-center gap-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[0.65rem] text-fg-dim">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: hex }} />
                  {ui(STATUS_UI[project.status])}
                </span>
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight">
                {project.name}
              </h3>
              {(project.role || project.period) && (
                <p className="mt-1 text-xs text-fg-muted">
                  {project.role ? t(project.role) : ""}
                  {project.role && project.period ? " · " : ""}
                  {project.period ?? ""}
                </p>
              )}
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={ui("close")}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface text-fg-muted transition-colors hover:text-fg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="px-6 pb-10 pt-2">
          <p className="mt-4 text-base leading-relaxed text-fg">{t(project.tagline)}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(project.summary)}</p>

          {/* why it matters */}
          <div
            className="mt-6 flex gap-3 rounded-xl border p-4"
            style={{ borderColor: accentA(project.accent, 0.3), background: accentA(project.accent, 0.06) }}
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0" style={{ color: hex }} />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: hex }}>
                {ui("mWhy")}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-fg">{t(project.recruiterPitch)}</p>
            </div>
          </div>

          {/* metrics */}
          {project.metrics.length > 0 && (
            <Block title={ui("mMetrics")}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.metrics.map((m, i) => (
                  <div key={i} className="rounded-xl border border-border bg-surface p-3">
                    <div className="font-[family-name:var(--font-inter)] text-xl font-bold" style={{ color: hex }}>
                      {m.value}
                    </div>
                    <div className="mt-1 text-[0.7rem] leading-tight text-fg-muted">{t(m.label)}</div>
                    {m.note && <div className="mt-1 text-[0.65rem] leading-tight text-fg-dim">{t(m.note)}</div>}
                  </div>
                ))}
              </div>
            </Block>
          )}

          <Block title={ui("mProblem")}>
            <p className="text-sm leading-relaxed text-fg-muted">{t(project.problem)}</p>
          </Block>

          <Block title={ui("mApproach")}>
            <p className="text-sm leading-relaxed text-fg-muted">{t(project.approach)}</p>
          </Block>

          {project.pipeline && (
            <Block title={ui("mPipeline")}>
              <PipelineDiagram steps={project.pipeline} accent={project.accent} />
            </Block>
          )}

          <Block title={ui("mArchitecture")}>
            <p className="text-sm leading-relaxed text-fg-muted">{t(project.architecture)}</p>
          </Block>

          <Block title={ui("mHighlights")}>
            <BulletList items={tl(project.highlights)} hex={hex} />
          </Block>

          <Block title={ui("mFeatures")}>
            <BulletList items={tl(project.features)} hex={hex} />
          </Block>

          <Block title={ui("mSkills")}>
            <div className="flex flex-wrap gap-2">
              {tl(project.skillsShown).map((s) => (
                <span
                  key={s}
                  className="rounded-lg border px-2.5 py-1 text-xs"
                  style={{ borderColor: accentA(project.accent, 0.25), color: "#e6edf3" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </Block>

          <Block title={ui("mTech")}>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </Block>

          <Block title={ui("mOutcome")}>
            <p className="text-sm leading-relaxed text-fg-muted">{t(project.outcome)}</p>
          </Block>

          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50"
                >
                  {l.kind === "github" && <GithubIcon className="h-4 w-4" />}
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
