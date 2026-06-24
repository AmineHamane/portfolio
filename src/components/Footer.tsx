"use client";

import { ArrowUp, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { GithubIcon } from "./icons";

export function Footer() {
  const { ui, site } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-accent">
            AH
          </span>
          <div className="text-sm">
            <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-fg">{site.identity.name}</div>
            <div className="text-xs text-fg-dim">
              © {year} · {ui("rights")}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.identity.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={site.identity.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            <ArrowUp className="h-4 w-4" />
            {ui("backToTop")}
          </a>
        </div>
      </div>
      <div className="border-t border-border-soft py-4 text-center font-[family-name:var(--font-jetbrains-mono)] text-xs text-fg-dim">
        {ui("builtWith")}
      </div>
    </footer>
  );
}
