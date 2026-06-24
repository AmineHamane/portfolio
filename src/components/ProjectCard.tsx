"use client";

import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/content/types";
import { useI18n } from "@/lib/i18n";
import { accentA, accentHex } from "@/lib/accent";
import { CATEGORY_UI, STATUS_UI } from "@/lib/projectMeta";
import { PipelineDiagram } from "./PipelineDiagram";
import { TiltGlowCard } from "./TiltGlowCard";
import { GithubIcon } from "./icons";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, tl, ui } = useI18n();
  const hex = accentHex(project.accent);
  const featured = project.featured && project.category === "flagship";
  const skills = tl(project.skillsShown);

  return (
    <TiltGlowCard accent={hex} className="flex h-full flex-col p-6">
      {/* accent top line */}
      <span
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{ background: `linear-gradient(90deg, transparent, ${hex}, transparent)` }}
      />

      {/* Stretched, accessible open trigger covering the card. */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${project.name} — ${ui("explore")}`}
        className="absolute inset-0 z-[1] cursor-pointer rounded-[inherit]"
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-[family-name:var(--font-jetbrains-mono)] text-[0.65rem] uppercase tracking-wide"
            style={{ background: accentA(project.accent, 0.14), color: hex }}
          >
            {ui(CATEGORY_UI[project.category])}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] font-medium text-fg-muted">
              <Star className="h-3 w-3" style={{ color: hex }} />
              {ui("featured")}
            </span>
          )}
        </div>
        <span className="flex items-center gap-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[0.65rem] text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: hex }} />
          {ui(STATUS_UI[project.status])}
        </span>
      </div>

      <h3 className="relative mt-4 text-xl font-semibold tracking-tight text-fg sm:text-2xl">{project.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-fg-muted">{t(project.tagline)}</p>

      {featured && project.pipeline && (
        <div className="relative mt-5 hidden lg:block">
          <PipelineDiagram steps={project.pipeline} accent={project.accent} />
        </div>
      )}

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, featured ? 8 : 5).map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
        {project.techStack.length > (featured ? 8 : 5) && (
          <span className="chip" style={{ color: hex }}>
            +{project.techStack.length - (featured ? 8 : 5)}
          </span>
        )}
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-xs text-fg-muted">
          {skills.length} {ui("skillsWord")}
        </span>
        <div className="flex items-center gap-3">
          {project.links?.map((l) =>
            l.kind === "github" ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — GitHub`}
                className="relative z-[2] grid h-8 w-8 place-items-center rounded-lg text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            ) : null,
          )}
          <span
            className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-0.5"
            style={{ color: hex }}
          >
            {ui("explore")}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </TiltGlowCard>
  );
}
