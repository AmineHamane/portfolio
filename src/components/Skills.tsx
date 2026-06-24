"use client";

import { Brain, Database, Server, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BRAND_GRADIENT } from "./ui";

const ICONS: Record<string, LucideIcon> = { brain: Brain, server: Server, database: Database };

export function Skills() {
  const { t, ui, site } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow={ui("skillsEyebrow")} heading={ui("skillsHeading")} sub={ui("skillsSub")} />

      <div className="grid gap-5 md:grid-cols-3">
        {site.skillGroups.map((group, gi) => {
          const Icon = ICONS[group.icon] ?? Brain;
          return (
            <Reveal key={gi} delay={gi * 0.1}>
              <div className="card card-hover group flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl text-white"
                    style={{ backgroundImage: BRAND_GRADIENT, boxShadow: "0 0 24px -12px rgba(223,122,254,0.7)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-inter)] text-lg font-semibold">
                    {t(group.name)}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(group.blurb)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="chip"
                      initial={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: reduce ? 0 : si * 0.02 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
