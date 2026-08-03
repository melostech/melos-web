"use client";

import { useId, useState } from "react";
import { Container, SectionHeading } from "@/app/components/ui";
import { faqs } from "@/app/data/landingContent";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionId = useId();
  return <section id="faq" className="py-20"><Container><SectionHeading eyebrow="Questions" title="Frequently asked questions" description="A few practical answers about working with Melos." /><div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[.025]">{faqs.map((faq) => { const isOpen = openId === faq.id; const panelId = `${sectionId}-${faq.id}`; return <div key={faq.id}><h3><button type="button" className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal-300" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenId(isOpen ? null : faq.id)}><span>{faq.question}</span><span aria-hidden="true" className="text-xl text-teal-300">{isOpen ? "−" : "+"}</span></button></h3>{isOpen && <div id={panelId} role="region" aria-label={faq.question} className="px-6 pb-6 leading-7 text-slate-400">{faq.answer}</div>}</div>; })}</div></Container></section>;
}
