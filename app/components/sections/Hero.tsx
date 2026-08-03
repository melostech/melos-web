"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/app/components/motion/MagneticButton";
import { NetworkField } from "@/app/components/motion/NetworkField";
import { HeroSystemMap } from "@/app/components/sections/hero/HeroSystemMap";
import { services } from "@/app/data/landingContent";
import { heroPill, heroSignals } from "@/app/data/uiContent";

const headline = ["Digital", "systems", "for", "ambition", "at", "scale."];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useSpring(useMotionValue(0), { stiffness: 100, damping: 22 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 100, damping: 22 });
  const architectureX = useTransform(mouseX, [-.5, .5], [-13, 13]);
  const architectureY = useTransform(mouseY, [-.5, .5], [-10, 10]);
  const headlineX = useTransform(mouseX, [-.5, .5], [-7, 7]);
  const headlineY = useTransform(mouseY, [-.5, .5], [-4, 4]);

  const move = (event: React.PointerEvent<HTMLElement>) => {
    const box = heroRef.current?.getBoundingClientRect();
    if (!box || reduceMotion) return;
    mouseX.set((event.clientX - box.left) / box.width - .5);
    mouseY.set((event.clientY - box.top) / box.height - .5);
  };

  return <section ref={heroRef} id="top" onPointerMove={move} onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }} className="site-grid relative isolate min-h-[850px] overflow-hidden pt-32 sm:pt-40">
    <NetworkField pointerTarget={heroRef} />
    <div aria-hidden="true" className="hero-orb absolute -left-28 top-24 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl" />
    <div aria-hidden="true" className="hero-orb hero-orb--two absolute right-0 top-28 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_5%,#070b14_88%)]" />

    <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:px-8 lg:pb-28">
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/[.07] px-3 py-2 text-xs font-medium text-teal-100 backdrop-blur-xl">
          <span className="relative flex h-2 w-2"><span className="pulse-ring absolute inset-0 rounded-full bg-teal-300" /><span className="relative h-2 w-2 rounded-full bg-teal-300" /></span>{heroPill}
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .18, duration: .7 }} className="mt-8 text-[11px] font-bold uppercase tracking-[.28em] text-teal-300">Engineering excellence, rooted in ambition</motion.p>
        <motion.h1 style={{ x: headlineX, y: headlineY }} className="mt-5 max-w-4xl text-[clamp(3.5rem,6.2vw,7.4rem)] font-semibold leading-[.86] tracking-[-.075em] text-white">
          {headline.map((word, index) => <span key={word} className="mr-[.17em] inline-block overflow-hidden pb-[.04em]"><motion.span initial={{ y: "112%", rotate: 5 }} animate={{ y: 0, rotate: 0 }} transition={{ delay: .23 + index * .075, duration: .84, type: "spring", bounce: .22 }} className={`inline-block ${word === "ambition" ? "text-gradient" : ""}`}>{word}</motion.span></span>)}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .75, duration: .65 }} className="mt-8 max-w-xl text-lg leading-8 text-slate-300">{services[0].description} We turn the complicated work of building into a clear, resilient advantage.</motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .88, duration: .65 }} className="mt-9 flex flex-wrap gap-3">
          <MagneticButton href="#contact">Start a conversation <span className="ml-1">→</span></MagneticButton>
          <MagneticButton href="#services" variant="secondary">Explore capabilities</MagneticButton>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: .65 }} className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[.15em] text-slate-500">{heroSignals.map(signal => <span key={signal} className="before:mr-2 before:text-teal-400 before:content-['✦']">{signal}</span>)}</motion.div>
      </div>

      <motion.div style={{ x: architectureX, y: architectureY }} initial={{ opacity: 0, scale: .9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .42, duration: 1, type: "spring", bounce: .2 }} className="relative mx-auto w-full max-w-md lg:max-w-none"><HeroSystemMap /></motion.div>
    </div>
  </section>;
}
