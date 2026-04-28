"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

type Kpi = {
  key: string;
  label: string;
  prefix?: string;
  suffix?: string;
  target: number;
  decimals: number;
  direction: "down" | "up";
  jitter: number;
};

const KPIS: Kpi[] = [
  {
    key: "truck_rolls",
    label: "truck_rolls / mo",
    target: 4,
    decimals: 0,
    direction: "down",
    jitter: 1,
  },
  {
    key: "cost_per_room",
    label: "cost_per_room",
    prefix: "$",
    target: 12,
    decimals: 0,
    direction: "down",
    jitter: 0,
  },
  {
    key: "resident_sat",
    label: "resident_satisfaction",
    target: 94.2,
    decimals: 1,
    suffix: "%",
    direction: "up",
    jitter: 0.1,
  },
  {
    key: "ad_revenue",
    label: "ad_revenue / mo",
    prefix: "$",
    target: 18420,
    decimals: 0,
    direction: "up",
    jitter: 12,
  },
];

function KpiTile({ kpi, delay }: { kpi: Kpi; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState<number>(0);
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setValue(kpi.target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, kpi.target, {
      duration: 2.5,
      delay,
      ease: EASE_OUT_EXPO,
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [inView, kpi.target, delay, reduced]);

  useEffect(() => {
    if (reduced || !inView || kpi.jitter === 0) return;
    let interval: ReturnType<typeof setInterval> | null = null;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setValue(() => {
          const drift = (Math.random() - 0.5) * 2 * kpi.jitter;
          const next = Math.max(0, kpi.target + drift);
          return Number(next.toFixed(kpi.decimals));
        });
      }, 2400);
    }, (delay + 2.6) * 1000);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [inView, kpi.target, kpi.jitter, kpi.decimals, delay, reduced]);

  const formatted = `${kpi.prefix ?? ""}${value.toLocaleString("en-US", {
    minimumFractionDigits: kpi.decimals,
    maximumFractionDigits: kpi.decimals,
  })}${kpi.suffix ?? ""}`;

  return (
    <div
      ref={ref}
      className="relative rounded-xl border border-[var(--border-subtle)] bg-[var(--color-bg-canvas)] p-5 sm:p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="mono text-[0.6875rem] uppercase tracking-wider text-[var(--color-text-muted)]">
          {kpi.label}
        </span>
        <span
          className="block w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-accent-400)" }}
          aria-hidden="true"
        />
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <span
          className="mono text-[var(--color-text-primary)] tabular-nums"
          style={{
            fontSize: "clamp(1.625rem, 2vw + 1rem, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {formatted}
        </span>
        <span
          className="mono text-xs uppercase tracking-wider"
          style={{
            color:
              kpi.direction === "up"
                ? "var(--color-accent-300)"
                : "var(--color-text-muted)",
          }}
        >
          {kpi.direction === "up" ? "↑" : "↓"}
        </span>
      </div>
    </div>
  );
}

export function SuccessTelemetry() {
  return (
    <div className="w-full max-w-[64rem] mx-auto">
      <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--color-bg-surface)] p-6 sm:p-10">
        <div className="flex items-center justify-between mb-6">
          <span className="mono text-xs uppercase tracking-wider text-[var(--color-accent-300)]">
            telev8.live · property_metrics
          </span>
          <span className="mono text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            ● live
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {KPIS.map((k, i) => (
            <KpiTile key={k.key} kpi={k} delay={0.15 + i * 0.18} />
          ))}
        </div>
        <p className="mt-8 text-[0.6875rem] leading-relaxed text-[var(--color-text-disabled)]">
          Illustrative dashboard. Live operator metrics surfaced in the actual
          telev8 console at demo.
        </p>
      </div>
    </div>
  );
}
