import { Card, Container, SectionHeading } from "@/app/components/ui";
import { Reveal } from "@/app/components/motion/Reveal";
import { caseStudies } from "@/app/data/landingContent";

export function PortfolioSection() {
  return <section id="portfolio" className="py-20"><Container><Reveal><SectionHeading eyebrow="Selected engagements" title="Work shaped around real operational stakes." description="We build for product teams and enterprise systems where technical reliability matters." /></Reveal>
    <div className="mt-12 grid gap-5 lg:grid-cols-3">{caseStudies.map((study, index) => <Reveal key={study.name} delay={index * .08} direction={index % 2 ? "right" : "left"}><Card className="h-full p-7 transition hover:border-violet-300/30"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-violet-300">{study.category}</p><h3 className="mt-4 text-2xl font-semibold text-white">{study.name}</h3><div className="mt-7 space-y-5 text-sm leading-6 text-slate-400"><p><b className="block text-xs uppercase tracking-widest text-slate-300">Challenge</b>{study.problem}</p><p><b className="block text-xs uppercase tracking-widest text-slate-300">Response</b>{study.solution}</p><p><b className="block text-xs uppercase tracking-widest text-teal-300">Outcome</b>{study.impact}</p></div></Card></Reveal>)}</div>
  </Container></section>;
}
