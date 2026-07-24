"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "@/app/data/landingContent";
import { serviceExperience } from "@/app/data/experienceContent";

export function ServiceExperience() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return <LayoutGroup><div className="mt-12 grid gap-3 lg:grid-cols-2">{services.map((service, index) => {
    const isActive = active === index;
    const details = serviceExperience[service.title as keyof typeof serviceExperience];
    return <motion.button layout key={service.title} type="button" onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} className={`relative overflow-hidden rounded-2xl border p-6 text-left transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 ${isActive ? "border-teal-300/45 bg-teal-300/[.075]" : "border-white/10 bg-white/[.025] hover:border-white/20"}`}>
      {isActive && <motion.span layoutId="service-active" className="absolute inset-0 rounded-2xl border border-teal-300/40" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
      <div className="relative flex items-start justify-between gap-5"><span className="text-xs font-bold text-teal-300">0{index + 1}</span><motion.span animate={{ rotate: isActive ? 45 : 0 }} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-slate-300">+</motion.span></div>
      <h3 className="relative mt-8 text-xl font-semibold text-white">{service.title}</h3><p className="relative mt-3 max-w-xl leading-7 text-slate-400">{service.description}</p>
      <AnimatePresence initial={false}>{isActive && <motion.div initial={{ height: reduced ? "auto" : 0, opacity: reduced ? 1 : 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: reduced ? "auto" : 0, opacity: reduced ? 1 : 0 }} transition={{ duration: .35, ease: [0.16, 1, .3, 1] }} className="relative overflow-hidden"><div className="mt-6 flex flex-wrap gap-2 border-t border-teal-300/15 pt-5">{details.map((detail, detailIndex) => <motion.span key={detail} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: detailIndex * .06 }} className="rounded-lg bg-teal-300/10 px-3 py-2 text-xs font-medium text-teal-100">{detail}</motion.span>)}</div></motion.div>}</AnimatePresence>
    </motion.button>;
  })}</div></LayoutGroup>;
}
