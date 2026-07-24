"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "@/app/data/landingContent";
import { heroCapabilityMeaning } from "@/app/data/experienceContent";

const capabilities = [
  { service: services[0], label: "Build", x: 18, y: 25, color: "teal" },
  { service: services[1], label: "Operate", x: 80, y: 25, color: "violet" },
  { service: services[4], label: "Intelligence", x: 80, y: 76, color: "teal" },
  { service: services[5], label: "Evolve", x: 18, y: 76, color: "violet" },
] as const;

const nodePositions = capabilities.map(({ x, y }) => ({ x: x * 3, y: y * 3 }));

/**
 * A meaningful, interactive model of how Melos turns a business need into a
 * connected engineering system. Each node is a real service from landingContent.
 */
export function HeroSystemMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const active = capabilities[activeIndex];
  const target = nodePositions[activeIndex];
  const meaning = heroCapabilityMeaning[active.label];

  return <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
    <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-teal-300/15 via-transparent to-violet-400/15 blur-3xl" />
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]/80 p-5 shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-7">
      <header className="flex items-center justify-between"><div className="flex gap-1.5">{["bg-rose-400", "bg-amber-300", "bg-teal-300"].map(color => <span key={color} className={`h-2 w-2 rounded-full ${color}`} />)}</div><span className="font-mono text-[10px] tracking-[.16em] text-slate-500">MELOS / DELIVERY MAP</span></header>
      <p className="mt-6 text-sm leading-6 text-slate-400">A business outcome needs more than one capability. Explore how each part of the system reinforces the others.</p>

      <div className="relative mt-5 aspect-[1.08] rounded-2xl border border-white/[.07] bg-[radial-gradient(circle_at_center,rgba(20,184,166,.12),transparent_32%)]">
        <svg aria-hidden="true" viewBox="0 0 300 300" className="absolute inset-0 h-full w-full overflow-visible">
          <defs><linearGradient id="map-line" x1="0" x2="1"><stop stopColor="#5eead4" stopOpacity=".2" /><stop offset="1" stopColor="#a78bfa" stopOpacity=".32" /></linearGradient></defs>
          <motion.path d="M54 75 L240 75 L240 228 L54 228 Z" fill="none" stroke="rgba(148,163,184,.24)" strokeWidth="1" strokeDasharray="4 9" initial={{ opacity: .24, strokeDashoffset: 0 }} animate={reduced ? { opacity: .24, strokeDashoffset: 0 } : { opacity: [.16, .38, .16], strokeDashoffset: [0, -52] }} transition={{ opacity: { duration: 3, repeat: Infinity }, strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" } }} />
          {nodePositions.map((position, index) => <motion.line key={index} x1="150" y1="150" x2={position.x} y2={position.y} stroke="url(#map-line)" strokeWidth={index === activeIndex ? 2 : 1} initial={{ opacity: .35 }} animate={{ opacity: index === activeIndex ? 1 : .35 }} transition={{ duration: .35 }} />)}
          {!reduced && <motion.circle r="4" fill={active.color === "teal" ? "#5eead4" : "#c4b5fd"} initial={{ cx: 150, cy: 150, opacity: 0 }} animate={{ cx: [150, target.x], cy: [150, target.y], opacity: [0, 1, 0] }} transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }} />}
          {!reduced && <motion.circle r="2" fill="#f8fafc" initial={{ cx: 150, cy: 150, opacity: 0 }} animate={{ cx: [150, target.x], cy: [150, target.y], opacity: [0, .8, 0] }} transition={{ delay: .55, duration: 1.45, repeat: Infinity, ease: "easeInOut" }} />}
        </svg>
        <motion.div animate={reduced ? {} : { scale: [1, 1.07, 1] }} transition={{ duration: 2.4, repeat: Infinity }} className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-teal-300/45 bg-[#10252a] text-center shadow-[0_0_40px_rgba(45,212,191,.25)]"><span className="text-[9px] font-bold uppercase tracking-[.15em] text-teal-200">Your</span><span className="text-[11px] font-semibold text-white">ambition</span></motion.div>
        <AnimatePresence mode="wait">{!reduced && <motion.span key={active.label} aria-hidden="true" style={{ left: `${active.x}%`, top: `${active.y}%` }} initial={{ scale: .7, opacity: .75 }} animate={{ scale: 1.7, opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: .75, ease: "easeOut" }} className={`absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border ${active.color === "teal" ? "border-teal-300" : "border-violet-300"}`} />}</AnimatePresence>
        {capabilities.map((capability, index) => <motion.button key={capability.label} type="button" onClick={() => setActiveIndex(index)} onMouseEnter={() => setActiveIndex(index)} whileHover={{ scale: 1.06 }} whileTap={{ scale: .96 }} style={{ left: `${capability.x}%`, top: `${capability.y}%` }} className={`absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2 py-2 text-center transition focus-visible:outline-2 focus-visible:outline-teal-300 ${activeIndex === index ? capability.color === "teal" ? "border-teal-300/70 bg-teal-300/15 shadow-[0_0_26px_rgba(45,212,191,.16)]" : "border-violet-300/70 bg-violet-300/15 shadow-[0_0_26px_rgba(167,139,250,.16)]" : "border-white/10 bg-[#111c2c]/90"}`} aria-pressed={activeIndex === index}><span className={`block text-[9px] font-bold uppercase tracking-widest ${capability.color === "teal" ? "text-teal-300" : "text-violet-300"}`}>{capability.label}</span><span className="mt-1 block text-[10px] font-semibold leading-3 text-white">{capability.service.title}</span></motion.button>)}
      </div>

      <div className="mt-5 min-h-26 rounded-xl border border-white/[.07] bg-white/[.035] p-4"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-teal-300">Active capability / {String(activeIndex + 1).padStart(2, "0")}</p><AnimatePresence mode="wait"><motion.div key={active.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .2 }}><h2 className="mt-2 text-sm font-semibold text-white">{active.service.title}</h2><p className="mt-1 text-xs font-medium leading-5 text-slate-200">{meaning}</p><p className="mt-2 text-xs leading-5 text-slate-400">{active.service.description}</p></motion.div></AnimatePresence></div>
      <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.14em] text-slate-500"><span>Click a system layer</span><span className="text-teal-300">Signal flowing →</span></div>
    </div>
  </div>;
}
