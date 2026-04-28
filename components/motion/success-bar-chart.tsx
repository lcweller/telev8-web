"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

type Metric = {
  label: string;
  legacy: number;
  telev8: number;
  direction: "down" | "up";
};

const METRICS: Metric[] = [
  { label: "Capital Expenditure", legacy: 1.0, telev8: 0.35, direction: "down" },
  { label: "Operating Cost", legacy: 1.0, telev8: 0.5, direction: "down" },
  {
    label: "Ad Revenue Per Room / Month",
    legacy: 0,
    telev8: 0.78,
    direction: "up",
  },
];

const BAR_HEIGHT = "h-2.5";
const BAR_RADIUS = "rounded-full";

function Bar({
  fill,
  color,
  delay,
}: {
  fill: number;
  color: "legacy" | "telev8";
  delay: number;
}) {
  return (
    <div
      className={`relative w-full ${BAR_HEIGHT} ${BAR_RADIUS} bg-[rgba(255,255,255,0.04)] overflow-hidden`}
    >
      <motion.div
        className={`absolute inset-y-0 left-0 ${BAR_RADIUS}`}
        style={{
          transformOrigin: "left",
          width: "100%",
          background:
            color === "legacy"
              ? "rgba(110,119,135,0.55)"
              : "var(--color-accent-400)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: fill }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.0, delay, ease: EASE_OUT_EXPO }}
      />
    </div>
  );
}

export function SuccessBarChart() {
  return (
    <div className="w-full max-w-[64rem] mx-auto">
      <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--color-bg-surface)] p-6 sm:p-10">
        <div className="flex items-center gap-6 mb-8 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="block w-3 h-2 rounded-full"
              style={{ background: "rgba(110,119,135,0.55)" }}
            />
            Legacy
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="block w-3 h-2 rounded-full"
              style={{ background: "var(--color-accent-400)" }}
            />
            telev8
          </span>
        </div>

        <ul className="flex flex-col gap-8">
          {METRICS.map((m, i) => {
            const baseDelay = 0.15 + i * 0.25;
            return (
              <li key={m.label} className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[0.9375rem] sm:text-base text-[var(--color-text-primary)]">
                    {m.label}
                  </span>
                  <motion.span
                    className="mono text-sm uppercase tracking-wider text-[var(--color-accent-300)]"
                    initial={{ opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{
                      duration: 0.5,
                      delay: baseDelay + 0.6,
                      ease: EASE_OUT_EXPO,
                    }}
                  >
                    {m.direction === "down" ? "↓ Lower" : "↑ Higher"}
                  </motion.span>
                </div>
                <div className="grid grid-cols-[64px_1fr] gap-3 items-center">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--color-text-muted)]">
                    Legacy
                  </span>
                  <Bar fill={m.legacy} color="legacy" delay={baseDelay} />
                </div>
                <div className="grid grid-cols-[64px_1fr] gap-3 items-center">
                  <span className="text-[0.6875rem] uppercase tracking-wider text-[var(--color-accent-300)]">
                    telev8
                  </span>
                  <Bar fill={m.telev8} color="telev8" delay={baseDelay + 0.3} />
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-[0.6875rem] leading-relaxed text-[var(--color-text-disabled)]">
          Illustrative only. Property-specific benchmarks reviewed at demo.
        </p>
      </div>
    </div>
  );
}
