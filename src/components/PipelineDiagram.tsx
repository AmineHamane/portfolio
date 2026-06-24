"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import type { Accent, PipelineStep } from "@/content/types";
import { useI18n } from "@/lib/i18n";
import { accentA, accentHex } from "@/lib/accent";

export function PipelineDiagram({ steps, accent }: { steps: PipelineStep[]; accent: Accent }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const hex = accentHex(accent);

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-1 items-center gap-2 lg:flex-col lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.07 }}
            className="flex-1 rounded-xl border p-3"
            style={{ borderColor: accentA(accent, 0.25), background: accentA(accent, 0.05) }}
          >
            <div className="flex items-center gap-2">
              <span
                className="grid h-6 w-6 shrink-0 place-items-center rounded-md font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold"
                style={{ background: accentA(accent, 0.15), color: hex }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-semibold leading-tight text-fg">{t(step.label)}</span>
            </div>
            <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-[0.7rem] leading-snug text-fg-muted">
              {t(step.desc)}
            </p>
          </motion.div>
          {i < steps.length - 1 && (
            <ChevronRight
              className="h-4 w-4 shrink-0 rotate-90 self-center text-fg-dim lg:rotate-0"
              style={{ color: accentA(accent, 0.5) }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
