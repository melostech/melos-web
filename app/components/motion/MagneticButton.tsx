"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/app/lib/cn";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & { children: ReactNode; variant?: "primary" | "secondary" };

/** A reusable CTA with magnetic pull, press physics, ripple, and particle burst. */
export function MagneticButton({ children, className, variant = "primary", onClick, onPointerMove, onPointerLeave, ...props }: MagneticButtonProps) {
  const elementRef = useRef<HTMLAnchorElement>(null);
  const [burst, setBurst] = useState(0);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 14, mass: 0.18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 14, mass: 0.18 });
  const primary = variant === "primary";

  const move = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const bounds = elementRef.current?.getBoundingClientRect();
    if (bounds) { x.set((event.clientX - bounds.left - bounds.width / 2) * .16); y.set((event.clientY - bounds.top - bounds.height / 2) * .16); }
    onPointerMove?.(event);
  };
  const leave = (event: React.PointerEvent<HTMLAnchorElement>) => { x.set(0); y.set(0); onPointerLeave?.(event); };
  const click = (event: React.MouseEvent<HTMLAnchorElement>) => { setBurst(value => value + 1); onClick?.(event); };

  return <motion.a ref={elementRef} {...props} onClick={click} onPointerMove={move} onPointerLeave={leave} style={{ x, y }} whileTap={{ scale: .92 }} className={cn("relative isolate inline-flex items-center justify-center overflow-visible rounded-xl px-5 py-3.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300", primary ? "bg-teal-300 text-slate-950 shadow-[0_12px_40px_rgba(20,184,166,.24)]" : "border border-white/15 bg-white/[.06] text-white backdrop-blur-sm", className)}>
    <span className="relative z-10">{children}</span>
    <AnimatePresence key={burst}>{burst > 0 && <>
      <motion.span aria-hidden="true" className={cn("absolute inset-0 rounded-xl border", primary ? "border-teal-100" : "border-violet-300")} initial={{ scale: .7, opacity: .8 }} animate={{ scale: 1.7, opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: .55, ease: "easeOut" }} />
      {Array.from({ length: 8 }, (_, index) => { const angle = index * 45; const distance = 34 + (index % 2) * 10; return <motion.span key={`${burst}-${index}`} aria-hidden="true" className={cn("absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full", primary ? "bg-teal-100" : "bg-violet-300")} initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }} animate={{ x: `calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px)`, y: `calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)`, opacity: 0, scale: 0 }} transition={{ duration: .5, ease: "easeOut" }} />; })}
    </>}</AnimatePresence>
  </motion.a>;
}
