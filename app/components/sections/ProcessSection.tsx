"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, SectionHeading } from "@/app/components/ui";
import { deliverySteps } from "@/app/data/experienceContent";

export function ProcessSection() {
  const reduced = useReducedMotion();
  return <section id="process" className="relative overflow-hidden py-24"><div aria-hidden="true" className="absolute left-1/2 top-1/2 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[.055] blur-3xl" /><Container className="relative"><SectionHeading eyebrow="Delivery, made visible" title="From uncertainty to a system that performs." description="A disciplined process, designed to make the high-leverage decisions early and execution legible throughout." />
    <div className="relative mt-14 grid gap-4 lg:grid-cols-4"><div aria-hidden="true" className="absolute left-10 right-10 top-10 hidden h-px bg-gradient-to-r from-transparent via-teal-300/35 to-transparent lg:block" />{deliverySteps.map((step, index) => <motion.article key={step.number} initial={{ opacity: 0, y: reduced ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: index * .1, duration: .65 }} className="relative rounded-2xl border border-white/10 bg-[#0d1320]/70 p-6 backdrop-blur-sm"><motion.div whileHover={{ scale: 1.08 }} className="grid h-10 w-10 place-items-center rounded-full border border-teal-300/40 bg-teal-300/10 text-xs font-bold text-teal-200">{step.number}</motion.div><h3 className="mt-7 text-lg font-semibold text-white">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{step.detail}</p></motion.article>)}</div>
  </Container></section>;
}
