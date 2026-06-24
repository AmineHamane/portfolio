"use client";

import { Award, GraduationCap, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t, tl, ui, site } = useI18n();

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading eyebrow={ui("experienceEyebrow")} heading={ui("experienceHeading")} />

      {/* timeline */}
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-[9px]" />
        <div className="space-y-8">
          {site.experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-bg md:h-5 md:w-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <div className="card p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-fg">
                      {t(job.role)}
                    </h3>
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-accent">{job.period}</span>
                  </div>
                  <div className="mt-0.5 text-sm text-fg-muted">
                    {job.company} · {job.location}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {tl(job.bullets).map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* education + certs + languages */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <Reveal>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="h-5 w-5" />
              <span className="mono-label">{ui("educationHeading")}</span>
            </div>
            {site.education.map((e, i) => (
              <div key={i} className="mt-4">
                <div className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-fg">
                  {t(e.degree)}
                </div>
                <div className="text-sm text-fg-muted">{e.school}</div>
                <p className="mt-2 text-xs leading-relaxed text-fg-dim">{t(e.detail)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2 text-lime">
              <Award className="h-5 w-5" />
              <span className="mono-label" style={{ color: "var(--color-lime)" }}>
                {ui("certsHeading")}
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {site.certifications.map((c, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-fg-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {t(c)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2 text-violet">
              <Languages className="h-5 w-5" />
              <span className="mono-label" style={{ color: "var(--color-violet)" }}>
                {ui("cvLanguages")}
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {site.identity.languages.map((l, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-fg-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                  {t(l)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
