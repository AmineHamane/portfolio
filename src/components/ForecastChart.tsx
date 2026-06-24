"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Decorative, abstract "forecast" visualization for the hero.
 * NOT real trading performance — a stylized historical series with a dashed
 * model projection and a confidence cone, used purely as a quant-flavored motif.
 */

const W = 720;
const H = 360;
const PAD = 24;

// Fixed, hand-picked series (deterministic → stable SSR, no Math.random).
const HISTORY = [
  0.42, 0.46, 0.4, 0.5, 0.55, 0.49, 0.58, 0.62, 0.55, 0.6, 0.68, 0.64, 0.72, 0.69, 0.77, 0.74, 0.8, 0.86,
];
const FORECAST = [0.8, 0.85, 0.83, 0.9, 0.94, 0.97]; // continues from last history point
const BAND = 0.06; // confidence half-width that widens with horizon

const allLen = HISTORY.length + FORECAST.length - 1;
const x = (i: number) => PAD + (i / (allLen - 1)) * (W - PAD * 2);
const y = (v: number) => H - PAD - v * (H - PAD * 2);

const toPath = (vals: number[], startIdx: number) =>
  vals.map((v, k) => `${k === 0 ? "M" : "L"} ${x(startIdx + k).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");

const histPath = toPath(HISTORY, 0);
const foreStart = HISTORY.length - 1;
const forePath = toPath(FORECAST, foreStart);
const areaPath = `${histPath} L ${x(HISTORY.length - 1).toFixed(1)} ${y(0).toFixed(1)} L ${x(0).toFixed(1)} ${y(0).toFixed(1)} Z`;

// Confidence cone around the forecast (widening).
const upper = FORECAST.map((v, k) => `${k === 0 ? "M" : "L"} ${x(foreStart + k).toFixed(1)} ${y(Math.min(1, v + BAND * (k / FORECAST.length + 0.3))).toFixed(1)}`).join(" ");
const lowerPts = FORECAST.map((v, k) => ({ i: foreStart + k, v: Math.max(0, v - BAND * (k / FORECAST.length + 0.3)) }));
const lower = [...lowerPts].reverse().map((p, k) => `${k === 0 ? "L" : "L"} ${x(p.i).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ");
const conePath = `${upper} ${lower} Z`;

export function ForecastChart() {
  const reduce = useReducedMotion();
  const draw = reduce
    ? { pathLength: 1, opacity: 1 }
    : { pathLength: [0, 1] as number[], opacity: [0, 1] as number[] };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Stylized forecasting chart">
      <defs>
        <linearGradient id="hist-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(34,211,238,0.28)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </linearGradient>
        <linearGradient id="hist-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5f6e7d" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1={PAD} x2={W - PAD} y1={y(g)} y2={y(g)} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
      ))}

      {/* historical area + line */}
      <motion.path
        d={areaPath}
        fill="url(#hist-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <motion.path
        d={histPath}
        fill="none"
        stroke="url(#hist-line)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={draw}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* confidence cone */}
      <motion.path
        d={conePath}
        fill="rgba(34,211,238,0.10)"
        stroke="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      />

      {/* forecast (dashed) */}
      <motion.path
        d={forePath}
        fill="none"
        stroke="#a3e635"
        strokeWidth={2.5}
        strokeDasharray="2 7"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={draw}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
      />

      {/* leading marker */}
      <motion.circle
        cx={x(allLen - 1)}
        cy={y(FORECAST[FORECAST.length - 1])}
        r={5}
        fill="#a3e635"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      />
      {!reduce && (
        <motion.circle
          cx={x(allLen - 1)}
          cy={y(FORECAST[FORECAST.length - 1])}
          r={5}
          fill="none"
          stroke="#a3e635"
          strokeWidth={1.5}
          animate={{ r: [5, 16], opacity: [0.7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* divider between observed and forecast */}
      <line
        x1={x(foreStart)}
        x2={x(foreStart)}
        y1={PAD}
        y2={H - PAD}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth={1}
        strokeDasharray="3 4"
      />
    </svg>
  );
}
