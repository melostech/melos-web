"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, viewportOnce } from "@/app/lib/motion";

type RevealProps = { children: ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" };

/** Consistent, accessible viewport entry animation for marketing sections. */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const reduced = useReducedMotion();
  const offset = direction === "up" ? { y: 28 } : direction === "left" ? { x: -28 } : { x: 28 };
  return <motion.div
    className={className}
    initial={{ opacity: 0, ...(reduced ? {} : offset) }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={viewportOnce}
    transition={{ ...revealTransition, delay }}>
    {children}
  </motion.div>;
}
