"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project, ProjectCategory } from "@/content/types";
import { useI18n } from "@/lib/i18n";
import { CATEGORY_UI } from "@/lib/projectMeta";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { TechFootprint } from "./TechFootprint";

type Filter = "all" | ProjectCategory;

export function Projects() {
  const { ui, site } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const order: ProjectCategory[] = ["flagship", "web-app", "nlp", "data-engineering", "ml", "coursework"];
    const present = new Set(site.projects.map((p) => p.category));
    return order.filter((c) => present.has(c));
  }, [site.projects]);

  const filtered = useMemo(
    () => (filter === "all" ? site.projects : site.projects.filter((p) => p.category === filter)),
    [filter, site.projects],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow={ui("projectsEyebrow")} heading={ui("projectsHeading")} sub={ui("projectsSub")} />

      {/* filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {(["all", ...categories] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
              filter === f
                ? "border-accent/50 bg-accent/15 text-accent"
                : "border-border bg-surface/50 text-fg-muted hover:border-accent/30 hover:text-fg",
            )}
          >
            {f === "all" ? ui("filterAll") : ui(CATEGORY_UI[f])}
          </button>
        ))}
      </div>

      {/* grid */}
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className={cn(
                project.featured &&
                  project.category === "flagship" &&
                  (filter === "all" || filtered.length > 1) &&
                  "md:col-span-2",
              )}
            >
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="rounded-xl border border-dashed border-border bg-surface/40 px-6 py-10 text-center text-sm text-fg-muted">
          {ui("emptyFilter")}
        </p>
      )}

      <TechFootprint />

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
