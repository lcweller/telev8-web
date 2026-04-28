"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const VB = "0 0 280 220";

function GlowDef({ id }: { id: string }) {
  return (
    <radialGradient id={id} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="var(--color-accent-400)" stopOpacity="0.32" />
      <stop offset="60%" stopColor="var(--color-accent-400)" stopOpacity="0.08" />
      <stop offset="100%" stopColor="var(--color-accent-400)" stopOpacity="0" />
    </radialGradient>
  );
}

const STROKE_WHITE = "rgba(245,247,250,0.78)";
const STROKE_ACCENT = "var(--color-accent-400)";
const STROKE_DIM = "rgba(245,247,250,0.32)";

/* ---------------------------------------------------------------- */
/* 1. No Commercial TVs. No Rewiring.                               */
/* ---------------------------------------------------------------- */

export function NoCommercialTvsViz() {
  const reduced = useReducedMotion();
  return (
    <svg
      viewBox={VB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="A consumer TV with three Wi-Fi arcs above and faint legacy cable lines fading behind it — telev8 runs on existing wiring with no rewire required."
    >
      <defs>
        <GlowDef id="nctvs-glow" />
      </defs>

      <ellipse cx="200" cy="170" rx="110" ry="60" fill="url(#nctvs-glow)" />

      <g opacity="0.5">
        <path
          d="M 40 200 Q 80 160 120 180 T 240 170"
          stroke={STROKE_DIM}
          strokeWidth="1"
          strokeDasharray="2 5"
        />
        <path
          d="M 40 210 Q 90 180 130 200 T 240 195"
          stroke={STROKE_DIM}
          strokeWidth="1"
          strokeDasharray="2 5"
        />
      </g>

      <g>
        <rect
          x="80"
          y="70"
          width="120"
          height="76"
          rx="6"
          stroke={STROKE_WHITE}
          strokeWidth="1.4"
        />
        <rect
          x="86"
          y="76"
          width="108"
          height="64"
          rx="3"
          stroke={STROKE_WHITE}
          strokeWidth="0.8"
          opacity="0.4"
        />
        <text
          x="140"
          y="113"
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-display)"
          fontWeight={700}
          letterSpacing="-0.02em"
          fill={STROKE_WHITE}
        >
          telev8
        </text>
        <line x1="120" y1="146" x2="160" y2="146" stroke={STROKE_WHITE} strokeWidth="1.2" />
        <line x1="140" y1="146" x2="140" y2="156" stroke={STROKE_WHITE} strokeWidth="1.2" />
        <line x1="120" y1="156" x2="160" y2="156" stroke={STROKE_WHITE} strokeWidth="1.2" />
      </g>

      <g>
        {[24, 36, 48].map((r, i) => {
          const targetOpacity = 0.85 - i * 0.18;
          return (
            <motion.path
              key={i}
              d={`M ${140 - r} 50 A ${r} ${r * 0.7} 0 0 1 ${140 + r} 50`}
              stroke={STROKE_ACCENT}
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={
                reduced
                  ? { opacity: targetOpacity, scale: 1 }
                  : { opacity: targetOpacity, scale: 1 }
              }
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={
                reduced
                  ? { duration: 0.4, ease: EASE_OUT_EXPO }
                  : {
                      duration: 1.6,
                      ease: "easeInOut",
                      delay: 0.2 + i * 0.12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.5,
                    }
              }
              style={{ transformOrigin: "140px 50px" }}
            />
          );
        })}
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 2. One Platform. Five Verticals.                                 */
/* ---------------------------------------------------------------- */

const VERTICALS = [
  { angle: -90, label: "Hotels" },
  { angle: -18, label: "Multi-Family" },
  { angle: 54, label: "Senior Living" },
  { angle: 126, label: "Hospitals" },
  { angle: 198, label: "Out-of-Home" },
];

export function OnePlatformViz() {
  const cx = 140;
  const cy = 120;
  const r = 75;
  const hub = 32;
  const sat = 36;

  return (
    <svg
      viewBox={VB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="A central telev8 hub with five satellite nodes labeled Hotel, MDU, Senior, Hospital, and OOH — one platform serves every vertical."
    >
      <defs>
        <GlowDef id="oneplat-glow" />
      </defs>

      <circle cx={cx} cy={cy} r="78" fill="url(#oneplat-glow)" />

      {VERTICALS.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const x1 = cx + hub * Math.cos(rad);
        const y1 = cy + hub * Math.sin(rad);
        const x2 = cx + (r - sat) * Math.cos(rad);
        const y2 = cy + (r - sat) * Math.sin(rad);
        return (
          <motion.line
            key={`spoke-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={STROKE_ACCENT}
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.55,
              ease: EASE_OUT_EXPO,
              delay: 0.25 + i * 0.06,
            }}
          />
        );
      })}

      {VERTICALS.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <motion.g
            key={`vert-${i}`}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.5,
              ease: EASE_OUT_EXPO,
              delay: 0.45 + i * 0.07,
            }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            <circle
              cx={x}
              cy={y}
              r={sat}
              stroke={STROKE_WHITE}
              strokeWidth="1.2"
              fill="var(--color-bg-canvas)"
            />
            <text
              x={x}
              y={y + 3}
              textAnchor="middle"
              fontSize="8"
              fontFamily="var(--font-body)"
              letterSpacing="0.02em"
              fill={STROKE_WHITE}
            >
              {s.label}
            </text>
          </motion.g>
        );
      })}

      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={hub}
          stroke={STROKE_ACCENT}
          strokeWidth="1.6"
          fill="var(--color-bg-surface)"
        />
        <text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          fontSize="13"
          fontFamily="var(--font-display)"
          fontWeight={700}
          letterSpacing="-0.02em"
          fill={STROKE_WHITE}
        >
          telev8
        </text>
      </motion.g>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 3. Stop Maintaining TV. Start Monetizing It.                     */
/* ---------------------------------------------------------------- */

export function MonetizeTvViz() {
  const reduced = useReducedMotion();
  return (
    <svg
      viewBox={VB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="A broadcast timeline with a highlighted ad slot and an upward-trending revenue line — targeted ads turn TV into a revenue line."
    >
      <defs>
        <GlowDef id="monetize-glow" />
      </defs>

      <ellipse cx="170" cy="115" rx="50" ry="22" fill="url(#monetize-glow)" />

      <rect
        x="60"
        y="30"
        width="160"
        height="62"
        rx="4"
        stroke={STROKE_WHITE}
        strokeWidth="1.4"
      />
      <line x1="100" y1="98" x2="180" y2="98" stroke={STROKE_WHITE} strokeWidth="1" />
      <line x1="140" y1="92" x2="140" y2="98" stroke={STROKE_WHITE} strokeWidth="1" />

      <line
        x1="40"
        y1="140"
        x2="240"
        y2="140"
        stroke={STROKE_DIM}
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {[60, 100, 200].map((x, i) => (
        <rect
          key={i}
          x={x}
          y="132"
          width="20"
          height="16"
          rx="2"
          stroke={STROKE_DIM}
          strokeWidth="1"
        />
      ))}

      {/* All animated elements use the same 5s master cycle so they re-sync each loop */}
      <motion.g
        initial={{ opacity: 0, y: -4 }}
        whileInView={
          reduced
            ? { opacity: 1, y: 0 }
            : {
                opacity: [0, 0, 1, 1, 0, 0],
                y: [-4, -4, 0, 0, 0, -4],
              }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.4, ease: EASE_OUT_EXPO }
            : {
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.08, 0.2, 0.82, 0.96, 1],
                repeat: Infinity,
              }
        }
      >
        <rect
          x="148"
          y="128"
          width="34"
          height="24"
          rx="3"
          stroke={STROKE_ACCENT}
          strokeWidth="1.6"
          fill="var(--color-bg-surface)"
        />
        <text
          x="165"
          y="143"
          textAnchor="middle"
          fontSize="8"
          fontFamily="var(--font-body)"
          fontWeight={600}
          letterSpacing="0.08em"
          fill={STROKE_ACCENT}
        >
          AD
        </text>
      </motion.g>

      <motion.line
        x1="165"
        y1="92"
        x2="165"
        y2="128"
        stroke={STROKE_ACCENT}
        strokeWidth="1"
        strokeDasharray="2 3"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={
          reduced
            ? { pathLength: 1, opacity: 0.7 }
            : {
                pathLength: [0, 0, 1, 1, 1, 0],
                opacity: [0, 0, 0.7, 0.7, 0, 0],
              }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.4, ease: EASE_OUT_EXPO }
            : {
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.14, 0.26, 0.82, 0.96, 1],
                repeat: Infinity,
              }
        }
      />

      <motion.path
        d="M 40 190 Q 90 188 130 180 T 220 160"
        stroke={STROKE_ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={
          reduced
            ? { pathLength: 1, opacity: 1 }
            : {
                pathLength: [0, 0, 1, 1, 1, 0],
                opacity: [0, 0, 1, 1, 0, 0],
              }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.4, ease: EASE_OUT_EXPO }
            : {
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.18, 0.42, 0.82, 0.96, 1],
                repeat: Infinity,
              }
        }
      />
      <motion.polygon
        points="216,156 224,160 216,164"
        fill={STROKE_ACCENT}
        initial={{ opacity: 0 }}
        whileInView={
          reduced ? { opacity: 1 } : { opacity: [0, 0, 0, 1, 1, 0, 0] }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.3 }
            : {
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.38, 0.4, 0.42, 0.82, 0.96, 1],
                repeat: Infinity,
              }
        }
      />
      <motion.text
        x="232"
        y="164"
        fontSize="11"
        fontFamily="var(--font-display)"
        fontWeight={700}
        fill={STROKE_ACCENT}
        initial={{ opacity: 0 }}
        whileInView={
          reduced ? { opacity: 1 } : { opacity: [0, 0, 0, 1, 1, 0, 0] }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.4 }
            : {
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.4, 0.42, 0.44, 0.82, 0.96, 1],
                repeat: Infinity,
              }
        }
      >
        $
      </motion.text>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 5. Closed-Loop. Edge-Cached. Five-Nines.                         */
/* ---------------------------------------------------------------- */

const NETWORK_NODES: [number, number][] = [
  [55, 80],
  [95, 50],
  [140, 70],
  [185, 45],
  [225, 80],
  [240, 130],
  [205, 165],
  [150, 175],
  [95, 165],
  [50, 130],
  [120, 110],
  [175, 115],
];

const NETWORK_EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 0],
  [0, 10],
  [10, 11],
  [11, 5],
  [10, 7],
  [11, 2],
];

const PULSE_PATH = [0, 10, 11, 4] as const;

export function ClosedLoopViz() {
  const reduced = useReducedMotion();
  const pulsePoints = PULSE_PATH.map((i) => NETWORK_NODES[i]!);
  return (
    <svg
      viewBox={VB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="A network mesh of twelve nodes connected by lines, with a data flow pulse traveling along one path — closed-loop delivery network spanning global edge locations."
    >
      <defs>
        <GlowDef id="closedloop-glow" />
      </defs>

      <ellipse cx="140" cy="115" rx="120" ry="80" fill="url(#closedloop-glow)" />

      <ellipse
        cx="140"
        cy="115"
        rx="110"
        ry="74"
        stroke={STROKE_DIM}
        strokeWidth="0.8"
        strokeDasharray="3 4"
      />

      {NETWORK_EDGES.map(([a, b], i) => {
        const [x1, y1] = NETWORK_NODES[a]!;
        const [x2, y2] = NETWORK_NODES[b]!;
        return (
          <motion.line
            key={`e-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={STROKE_DIM}
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.5,
              ease: EASE_OUT_EXPO,
              delay: 0.1 + i * 0.025,
            }}
          />
        );
      })}

      {NETWORK_NODES.map(([x, y], i) => (
        <motion.circle
          key={`n-${i}`}
          cx={x}
          cy={y}
          r={i === 10 || i === 11 ? 3.4 : 2.4}
          fill={STROKE_ACCENT}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{
            duration: 0.4,
            ease: EASE_OUT_EXPO,
            delay: 0.4 + i * 0.04,
          }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}

      {!reduced && (
        <motion.circle
          r="3.5"
          fill={STROKE_WHITE}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 1, 0],
            cx: pulsePoints.map(([x]) => x),
            cy: pulsePoints.map(([, y]) => y),
          }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{
            duration: 2.4,
            delay: 1.1,
            ease: "easeInOut",
            times: [0, 0.1, 0.5, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0.9,
          }}
        />
      )}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 6. Exclusive Partnerships. Compounding IP. — Convergence Diagram */
/* ---------------------------------------------------------------- */

export function ExclusivePartnershipsViz() {
  const reduced = useReducedMotion();

  // Stream paths: two inputs converge at the telev8 junction, then continue as one.
  const PATH_TIVO = "M 60 72 C 96 72 102 110 122 110";
  const PATH_UEI = "M 60 148 C 96 148 102 110 122 110";
  const PATH_OUT = "M 158 110 L 226 110";

  return (
    <svg
      viewBox={VB}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Two streams labeled TiVo and UEI flow inward and converge at a central telev8 hub, then continue as one combined stream out to the property — two exclusive partnerships compounding into one defensible platform."
    >
      <defs>
        <GlowDef id="conv-glow" />
        <radialGradient id="conv-junction" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Backdrop wash */}
      <ellipse cx="140" cy="115" rx="120" ry="65" fill="url(#conv-glow)" />

      {/* TiVo source node */}
      <g>
        <circle cx="44" cy="72" r="18" stroke={STROKE_WHITE} strokeWidth="1.2" />
        <text
          x="44"
          y="76"
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-display)"
          fontWeight={700}
          letterSpacing="-0.01em"
          fill={STROKE_WHITE}
        >
          TiVo
        </text>
      </g>

      {/* UEI source node */}
      <g>
        <circle cx="44" cy="148" r="18" stroke={STROKE_WHITE} strokeWidth="1.2" />
        <text
          x="44"
          y="152"
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-display)"
          fontWeight={700}
          letterSpacing="-0.01em"
          fill={STROKE_WHITE}
        >
          UEI
        </text>
      </g>

      {/* Stream 1: TiVo → junction */}
      <motion.path
        d={PATH_TIVO}
        stroke={STROKE_ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={
          reduced
            ? { pathLength: 1, opacity: 1 }
            : {
                pathLength: [0, 0, 1, 1, 1, 0],
                opacity: [0, 0, 1, 1, 0, 0],
              }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.6, ease: EASE_OUT_EXPO }
            : {
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.04, 0.28, 0.82, 0.95, 1],
                repeat: Infinity,
              }
        }
      />

      {/* Stream 2: UEI → junction */}
      <motion.path
        d={PATH_UEI}
        stroke={STROKE_ACCENT}
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={
          reduced
            ? { pathLength: 1, opacity: 1 }
            : {
                pathLength: [0, 0, 1, 1, 1, 0],
                opacity: [0, 0, 1, 1, 0, 0],
              }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.6, ease: EASE_OUT_EXPO }
            : {
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.04, 0.28, 0.82, 0.95, 1],
                repeat: Infinity,
              }
        }
      />

      {/* Junction glow flash — pulses when streams reach it */}
      <motion.circle
        cx="140"
        cy="110"
        r="42"
        fill="url(#conv-junction)"
        initial={{ opacity: 0 }}
        whileInView={
          reduced
            ? { opacity: 0.4 }
            : { opacity: [0, 0, 0, 0.85, 0.45, 0.45, 0] }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.4 }
            : {
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.27, 0.29, 0.34, 0.45, 0.82, 1],
                repeat: Infinity,
              }
        }
      />

      {/* telev8 central junction node */}
      <g>
        <circle
          cx="140"
          cy="110"
          r="22"
          stroke={STROKE_ACCENT}
          strokeWidth="1.8"
          fill="var(--color-bg-surface)"
        />
        <text
          x="140"
          y="114"
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-display)"
          fontWeight={800}
          letterSpacing="-0.02em"
          fill={STROKE_WHITE}
        >
          telev8
        </text>
      </g>

      {/* Combined output: junction → property */}
      <motion.path
        d={PATH_OUT}
        stroke={STROKE_ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={
          reduced
            ? { pathLength: 1, opacity: 1 }
            : {
                pathLength: [0, 0, 0, 1, 1, 1, 0],
                opacity: [0, 0, 0, 1, 1, 0, 0],
              }
        }
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={
          reduced
            ? { duration: 0.6, ease: EASE_OUT_EXPO }
            : {
                duration: 6,
                ease: "easeInOut",
                times: [0, 0.34, 0.36, 0.56, 0.82, 0.95, 1],
                repeat: Infinity,
              }
        }
      />

      {/* Pulse circle traveling along the output path */}
      {!reduced && (
        <motion.circle
          r="3.5"
          fill={STROKE_WHITE}
          initial={{ opacity: 0, cx: 158, cy: 110 }}
          whileInView={{
            opacity: [0, 0, 0, 0, 0, 1, 1, 0],
            cx: [158, 158, 158, 158, 158, 158, 226, 226],
            cy: [110, 110, 110, 110, 110, 110, 110, 110],
          }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            times: [0, 0.5, 0.55, 0.58, 0.6, 0.62, 0.85, 1],
            repeat: Infinity,
          }}
        />
      )}

      {/* Property destination (TV silhouette) */}
      <g>
        <rect
          x="220"
          y="96"
          width="36"
          height="28"
          rx="2"
          stroke={STROKE_WHITE}
          strokeWidth="1.2"
        />
        <line
          x1="232"
          y1="128"
          x2="244"
          y2="128"
          stroke={STROKE_WHITE}
          strokeWidth="1"
        />
        <line
          x1="238"
          y1="124"
          x2="238"
          y2="128"
          stroke={STROKE_WHITE}
          strokeWidth="1"
        />
      </g>

      {/* Subtle category labels */}
      <text
        x="44"
        y="44"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-body)"
        fontWeight={600}
        letterSpacing="0.16em"
        fill={STROKE_DIM}
      >
        IP
      </text>
      <text
        x="44"
        y="180"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-body)"
        fontWeight={600}
        letterSpacing="0.16em"
        fill={STROKE_DIM}
      >
        HARDWARE
      </text>
      <text
        x="238"
        y="148"
        textAnchor="middle"
        fontSize="7"
        fontFamily="var(--font-body)"
        fontWeight={600}
        letterSpacing="0.16em"
        fill={STROKE_DIM}
      >
        PROPERTY
      </text>
    </svg>
  );
}
