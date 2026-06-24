"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Printer } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";

const INK = "#6d28d9"; // print-safe brand violet

export default function CVPage() {
  const { t, tl, ui, site, locale, setLocale } = useI18n();
  const id = site.identity;

  // Projects worth listing on a CV (skip pure coursework groupings detail; keep concise).
  const cvProjects = site.projects;

  return (
    <div className="min-h-screen bg-bg py-0 sm:py-10">
      {/* Toolbar */}
      <div className="no-print sticky top-0 z-20 glass border-b border-border">
        <div className="mx-auto flex max-w-[850px] items-center justify-between gap-3 px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui("cvBack")}
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium">
              {(["en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  aria-pressed={locale === l}
                  aria-label={l === "en" ? ui("langEnglish") : ui("langFrench")}
                  className={cn(
                    "rounded-full px-3 py-1.5 font-[family-name:var(--font-jetbrains-mono)] uppercase transition-colors",
                    locale === l ? "bg-accent text-bg" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <Printer className="h-4 w-4" />
              {ui("cvPrint")}
            </button>
          </div>
        </div>
      </div>

      {/* Sheet */}
      <article
        className="cv-sheet mx-auto my-6 w-full max-w-[850px] bg-white px-8 py-9 text-slate-800 shadow-2xl sm:my-8 sm:px-12 sm:py-12"
        style={{ fontFamily: "var(--font-inter)" }}
        lang={locale}
      >
        {/* Header */}
        <header className="border-b-2 pb-5" style={{ borderColor: INK }}>
          <h1 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {id.name}
          </h1>
          <p className="mt-1 text-sm font-medium sm:text-base" style={{ color: INK }}>
            {t(site.cv.headline)}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-slate-600 sm:text-[0.8rem]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" style={{ color: INK }} />
              {t(id.location)}
            </span>
            <a href={`tel:${id.phone.replace(/[^0-9+]/g, "")}`} className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" style={{ color: INK }} />
              {id.phone}
            </a>
            <a href={`mailto:${id.email}`} className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" style={{ color: INK }} />
              {id.email}
            </a>
            <a href={id.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
              <GithubIcon className="h-3.5 w-3.5" style={{ color: INK }} />
              github.com/{id.github}
            </a>
          </div>
        </header>

        {/* Profile */}
        <Section title={ui("cvProfile")} ink={INK}>
          <p className="text-[0.82rem] leading-relaxed text-slate-700">{t(site.cv.summary)}</p>
        </Section>

        <div className="cv-grid grid gap-8 sm:grid-cols-[1fr_1.9fr]">
          {/* Sidebar */}
          <div>
            <Section title={ui("cvSkills")} ink={INK}>
              <div className="space-y-3">
                {site.skillGroups.map((g, i) => (
                  <div key={i} className="cv-avoid-break">
                    <div className="text-[0.72rem] font-bold uppercase tracking-wide text-slate-900">{t(g.name)}</div>
                    <p className="mt-1 text-[0.74rem] leading-snug text-slate-600">{g.skills.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={ui("cvEducation")} ink={INK}>
              {site.education.map((e, i) => (
                <div key={i} className="cv-avoid-break">
                  <div className="text-[0.8rem] font-semibold text-slate-900">{t(e.degree)}</div>
                  <div className="text-[0.76rem] text-slate-600">{e.school}</div>
                </div>
              ))}
            </Section>

            <Section title={ui("cvCerts")} ink={INK}>
              <ul className="space-y-1 text-[0.78rem] text-slate-700">
                {site.certifications.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: INK }}>▪</span>
                    {t(c)}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={ui("cvLanguages")} ink={INK}>
              <ul className="space-y-1 text-[0.78rem] text-slate-700">
                {id.languages.map((l, i) => (
                  <li key={i}>{t(l)}</li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Main */}
          <div>
            <Section title={ui("cvExperience")} ink={INK}>
              <div className="space-y-4">
                {site.experience.map((job, i) => (
                  <div key={i} className="cv-avoid-break">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[0.88rem] font-bold text-slate-900">{t(job.role)}</h3>
                      <span className="shrink-0 text-[0.72rem] font-medium text-slate-500">{job.period}</span>
                    </div>
                    <div className="text-[0.78rem] font-medium" style={{ color: INK }}>
                      {job.company} · {job.location}
                    </div>
                    <ul className="mt-1.5 space-y-1">
                      {tl(job.bullets).map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-[0.78rem] leading-snug text-slate-700">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: INK }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section title={ui("cvProjects")} ink={INK}>
              <div className="space-y-3">
                {cvProjects.map((p) => (
                  <div key={p.id} className="cv-avoid-break">
                    <h3 className="text-[0.84rem] font-bold text-slate-900">{p.name}</h3>
                    <p className="text-[0.78rem] leading-snug text-slate-700">{t(p.tagline)}</p>
                    <p className="mt-0.5 text-[0.7rem] leading-snug text-slate-500">{p.techStack.slice(0, 8).join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </article>
    </div>
  );
}

function Section({ title, ink, children }: { title: string; ink: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2
        className="mb-2.5 font-[family-name:var(--font-inter)] text-[0.78rem] font-bold uppercase tracking-[0.12em]"
        style={{ color: ink }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
