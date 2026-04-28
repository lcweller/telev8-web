"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

type PlanItem = { n: string; h: string; body: string };

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

const number: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO, delay: 0.2 },
  },
};

export function PlanCards({ items }: { items: PlanItem[] }) {
  const reduced = useReducedMotion();
  return (
    <motion.ol
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 list-none"
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={container}
    >
      {items.map((step) => (
        <motion.li
          key={step.n}
          variants={card}
          className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--color-bg-surface)] p-8 lg:p-10 h-full flex flex-col gap-6"
        >
          <motion.span
            variants={number}
            className="mono text-[var(--color-accent-400)] block"
            style={{
              fontSize: "clamp(2.25rem, 2vw + 1.5rem, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {step.n}
          </motion.span>
          <h3 className="h3">{step.h}</h3>
          <p className="text-[1rem] leading-[1.65] text-[var(--color-text-secondary)]">
            {step.body}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
