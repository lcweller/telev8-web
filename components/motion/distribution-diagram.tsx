"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const LEGACY_NODES = [
  "Programmer",
  "Aggregator",
  "Dealer",
  "On-Prem",
  "Guest",
];
const TELEV8_NODES = ["Programmer", "telev8", "Guest"];

// Layout constants — viewBox is 480 × 540 with comfortable padding so labels never clip.
const VB_W = 480;
const VB_H = 540;
const COL_LEGACY_X = 130;
const COL_TELEV8_X = 350;
const ROW_TOP = 90;
const ROW_BOTTOM = 460;
const NODE_R_LEGACY = 18;
const NODE_R_TELEV8 = 22;
const NODE_R_TELEV8_CENTER = 56;

export function DistributionDiagram() {
  const reduced = useReducedMotion();
  const legacyStep = (ROW_BOTTOM - ROW_TOP) / (LEGACY_NODES.length - 1);
  const telev8Step = (ROW_BOTTOM - ROW_TOP) / (TELEV8_NODES.length - 1);
  // Center y for the telev8 hub (middle node of 3)
  const HUB_Y = ROW_TOP + 1 * telev8Step;

  return (
    <div
      className="relative aspect-[480/540] w-full max-w-[460px]"
      role="img"
      aria-label="A vertical comparison: the legacy commercial-TV distribution chain has five layers (Programmer, Aggregator, Dealer, On-Prem, Guest); the telev8 chain has three (Programmer, telev8, Guest). Less layers, lower costs."
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, var(--accent-glow), transparent 60%)",
        }}
      />

      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Outer halo: soft cool blue (existing --info token #5EA8FF) */}
          <radialGradient id="telev8-glow-outer" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5EA8FF" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#5EA8FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5EA8FF" stopOpacity="0" />
          </radialGradient>
          {/* Inner core: saturated electric blue (#3B82F6) */}
          <radialGradient id="telev8-glow-inner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Column headers */}
        <motion.text
          x={COL_LEGACY_X}
          y={50}
          textAnchor="middle"
          fontSize={11}
          fontFamily="var(--font-body)"
          fontWeight={600}
          letterSpacing="0.18em"
          fill="var(--color-text-muted)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          LEGACY
        </motion.text>
        <motion.text
          x={COL_TELEV8_X}
          y={50}
          textAnchor="middle"
          fontSize={11}
          fontFamily="var(--font-body)"
          fontWeight={600}
          letterSpacing="0.18em"
          fill="var(--color-accent-300)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          TELEV8
        </motion.text>

        {/* Legacy column — vertical stack */}
        <g>
          {[...Array(LEGACY_NODES.length - 1)].map((_, i) => (
            <motion.line
              key={`legacy-connector-${i}`}
              x1={COL_LEGACY_X}
              y1={ROW_TOP + i * legacyStep + NODE_R_LEGACY}
              x2={COL_LEGACY_X}
              y2={ROW_TOP + (i + 1) * legacyStep - NODE_R_LEGACY}
              stroke="var(--color-text-muted)"
              strokeWidth={1}
              strokeDasharray="3 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.45 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: EASE_OUT_EXPO,
                delay: 0.45 + i * 0.18,
              }}
            />
          ))}
          {LEGACY_NODES.map((label, i) => {
            const cy = ROW_TOP + i * legacyStep;
            return (
              <motion.g
                key={`legacy-${label}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 0.55, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: EASE_OUT_EXPO,
                  delay: 0.3 + i * 0.18,
                }}
              >
                <circle
                  cx={COL_LEGACY_X}
                  cy={cy}
                  r={NODE_R_LEGACY}
                  stroke="var(--color-text-muted)"
                  strokeWidth={1}
                  fill="var(--color-bg-canvas)"
                />
                <text
                  x={COL_LEGACY_X}
                  y={cy + 4}
                  textAnchor="middle"
                  fontSize={10}
                  fontFamily="var(--font-body)"
                  fill="var(--color-text-muted)"
                >
                  {i + 1}
                </text>
                <text
                  x={COL_LEGACY_X - NODE_R_LEGACY - 14}
                  y={cy + 4}
                  textAnchor="end"
                  fontSize={12}
                  fontFamily="var(--font-body)"
                  fill="var(--color-text-secondary)"
                >
                  {label}
                </text>
              </motion.g>
            );
          })}
        </g>

        {/* telev8 column — vertical stack, slightly larger nodes, accent stroke */}
        <g>
          {/* Layered breathing glow behind the central telev8 hub */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={
              reduced
                ? { opacity: 1 }
                : { opacity: [0, 1, 0.72, 1] }
            }
            viewport={{ once: true }}
            transition={
              reduced
                ? { duration: 0.6, delay: 2.2 }
                : {
                    duration: 3.6,
                    delay: 2.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    times: [0, 0.18, 0.6, 1],
                  }
            }
            style={{ willChange: "opacity" }}
          >
            <circle
              cx={COL_TELEV8_X}
              cy={HUB_Y}
              r={NODE_R_TELEV8_CENTER * 2.6}
              fill="url(#telev8-glow-outer)"
            />
            <circle
              cx={COL_TELEV8_X}
              cy={HUB_Y}
              r={NODE_R_TELEV8_CENTER * 1.5}
              fill="url(#telev8-glow-inner)"
            />
          </motion.g>

          {[...Array(TELEV8_NODES.length - 1)].map((_, i) => {
            const startR = i === 0 ? NODE_R_TELEV8 : NODE_R_TELEV8_CENTER;
            const endR = i === 0 ? NODE_R_TELEV8_CENTER : NODE_R_TELEV8;
            return (
              <motion.line
                key={`telev8-connector-${i}`}
                x1={COL_TELEV8_X}
                y1={ROW_TOP + i * telev8Step + startR}
                x2={COL_TELEV8_X}
                y2={ROW_TOP + (i + 1) * telev8Step - endR}
                stroke="var(--color-accent-400)"
                strokeWidth={2}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: EASE_OUT_EXPO,
                  delay: 1.7 + i * 0.5,
                }}
              />
            );
          })}
          {TELEV8_NODES.map((label, i) => {
            const cy = ROW_TOP + i * telev8Step;
            const isCentral = label === "telev8";
            const r = isCentral ? NODE_R_TELEV8_CENTER : NODE_R_TELEV8;
            return (
              <motion.g
                key={`telev8-${label}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.0,
                  ease: EASE_OUT_EXPO,
                  delay: 1.5 + i * 0.5,
                }}
                style={{ transformOrigin: `${COL_TELEV8_X}px ${cy}px` }}
              >
                <circle
                  cx={COL_TELEV8_X}
                  cy={cy}
                  r={r}
                  stroke="var(--color-accent-400)"
                  strokeWidth={isCentral ? 2 : 1.5}
                  fill={
                    isCentral
                      ? "var(--color-bg-surface)"
                      : "var(--color-bg-canvas)"
                  }
                />
                {isCentral ? (
                  <image
                    href="/images/logo.avif"
                    x={COL_TELEV8_X - 36}
                    y={cy - 10}
                    width={72}
                    height={20}
                    preserveAspectRatio="xMidYMid meet"
                  />
                ) : (
                  <text
                    x={COL_TELEV8_X}
                    y={cy + 4}
                    textAnchor="middle"
                    fontSize={10}
                    fontFamily="var(--font-body)"
                    fill="var(--color-accent-300)"
                  >
                    {i + 1}
                  </text>
                )}
                {!isCentral && (
                  <text
                    x={COL_TELEV8_X + r + 14}
                    y={cy + 4}
                    textAnchor="start"
                    fontSize={12}
                    fontFamily="var(--font-body)"
                    fill="var(--color-text-secondary)"
                  >
                    {label}
                  </text>
                )}
              </motion.g>
            );
          })}
        </g>

        {/* Caption — the message */}
        <motion.text
          x={VB_W / 2}
          y={VB_H - 30}
          textAnchor="middle"
          fontSize={12}
          fontFamily="var(--font-body)"
          fontWeight={600}
          letterSpacing="0.14em"
          fill="var(--color-accent-300)"
          initial={{ opacity: 0, y: VB_H - 22 }}
          whileInView={{ opacity: 1, y: VB_H - 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 4.0, ease: EASE_OUT_EXPO }}
        >
          LESS LAYERS · LOWER COSTS
        </motion.text>
      </svg>

      <p className="sr-only">
        Legacy distribution has five layers: Programmer, Aggregator, Dealer,
        on-prem infrastructure, Guest. The telev8 distribution chain has three:
        Programmer, telev8, Guest. Less layers, lower costs.
      </p>
    </div>
  );
}
