"use client";

import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

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
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
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
