"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A quiet global reading-progress cue for long-form marketing pages. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-400" 
  style={{ scaleX }} 
  />;
}
