"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  defaultReveal,
  defaultRevealTransition,
  staggerContainer,
} from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  stagger?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  stagger = false,
  ...rest
}: RevealProps) {
  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={staggerContainer}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={defaultReveal}
      transition={{ ...defaultRevealTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealChild({
  children,
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      variants={defaultReveal}
      transition={{ ...defaultRevealTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
