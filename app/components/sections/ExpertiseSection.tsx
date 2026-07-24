import { Container, SectionHeading } from "@/app/components/ui";
import { Reveal } from "@/app/components/motion/Reveal";
import { expertise } from "@/app/data/landingContent";

export function ExpertiseSection() {
  return <section id="expertise" className="py-20"><Container><Reveal><SectionHeading eyebrow="Technology radar" title="Depth across the product stack." description="We choose technology for fit, maintainability, and the operational needs that come after launch." /></Reveal>
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{expertise.map((area, index) => <Reveal key={area.title} delay={index * .07}><div className="border-l border-teal-300/40 py-2 pl-5 transition hover:border-violet-300"><h3 className="font-semibold text-white">{area.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p><div className="mt-4 flex flex-wrap gap-2">{area.tools.map(tool => <span key={tool} className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">{tool}</span>)}</div></div></Reveal>)}</div>
  </Container></section>;
}
