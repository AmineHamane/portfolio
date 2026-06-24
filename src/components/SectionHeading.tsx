"use client";

import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <span className="mono-label">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[2.75rem]">
          {heading}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
