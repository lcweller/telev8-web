import type { Transition, Variants } from "framer-motion";

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
export const EASE_IN_OUT_QUAD = [0.45, 0, 0.55, 1] as const;

export const DURATION = {
  instant: 0.1,
  quick: 0.2,
  medium: 0.4,
  slow: 0.6,
  cinematic: 1.2,
} as const;

export const defaultReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export const defaultRevealTransition: Transition = {
  duration: DURATION.slow,
  ease: EASE_OUT_EXPO,
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
