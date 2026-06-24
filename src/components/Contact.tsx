"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./icons";

export function Contact() {
  const { t, ui, site } = useI18n();
  const [copied, setCopied] = useState(false);
  const { email, phone, githubUrl } = site.identity;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.18), transparent 65%)" }}
          />
          <span className="mono-label">{ui("contactEyebrow")}</span>
          <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {ui("contactHeading")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">{ui("contactSub")}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "0 8px 30px -8px rgba(34,211,238,0.5)" }}
            >
              <Mail className="h-4 w-4" />
              {ui("emailMe")}
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/50"
            >
              {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
              {copied ? ui("copied") : email}
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/50"
            >
              <GithubIcon className="h-4 w-4" />
              {ui("viewGithub")}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-[family-name:var(--font-jetbrains-mono)] text-sm text-fg-muted">
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2 hover:text-fg">
              <Phone className="h-4 w-4 text-accent" />
              {phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {t(site.identity.location)}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
