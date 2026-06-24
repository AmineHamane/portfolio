"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

/** Merge obvious duplicates so the chart counts real distinct tools. */
const NORMALIZE: Record<string, string> = {
  "docker-compose": "Docker",
  "pytorch-forecasting (TFT)": "PyTorch",
  "Google Cloud": "BigQuery / GCS",
  "BigQuery": "BigQuery / GCS",
};

/**
 * Aggregate, data-driven bar chart: how many projects use each technology.
 * Computed live from site.projects — no hard-coded numbers.
 */
export function TechFootprint() {
  const { ui, site } = useI18n();
  const reduce = useReducedMotion();

  const bars = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of site.projects) {
      const seen = new Set<string>();
      for (const raw of p.techStack) {
        const name = NORMALIZE[raw] ?? raw;
        if (seen.has(name)) continue;
        seen.add(name);
        counts.set(name, (counts.get(name) ?? 0) + 1);
      }
    }
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const max = sorted.length ? sorted[0][1] : 1;
    return sorted.slice(0, 12).map(([name, count]) => ({ name, count, pct: Math.round((count / max) * 100) }));
  }, [site.projects]);

  return (
    <Reveal>
      <div className="card mt-12 p-6 sm:p-8">
        <div className="mb-6">
          <span className="mono-label">{ui("techFootprint")}</span>
          <p className="mt-2 text-sm text-fg-muted">{ui("techFootprintSub")}</p>
        </div>
        <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {bars.map((b, i) => (
            <div key={b.name} className="flex items-center gap-3">
              <span className="w-28 shrink-0 truncate text-right font-[family-name:var(--font-jetbrains-mono)] text-xs text-fg-muted">
                {b.name}
              </span>
              <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: "linear-gradient(90deg, #814ac8, #df7afe)" }}
                  initial={{ width: reduce ? `${b.pct}%` : 0 }}
                  whileInView={{ width: `${b.pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className="w-5 text-right font-[family-name:var(--font-jetbrains-mono)] text-xs text-fg-dim">
                {b.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
