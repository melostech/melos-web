import { Card, Container } from "@/app/components/ui";
import { whyChoose } from "@/app/data/landingContent";

export function ValueSection() {
  return <section className="py-12"><Container><div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[.03] p-8 lg:grid-cols-[.85fr_1.15fr] lg:p-10"><div><p className="text-[11px] font-bold uppercase tracking-[.26em] text-violet-300">Why Melos</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Senior technical judgment, without the hiring bottleneck.</h2><p className="mt-5 leading-7 text-slate-400">We work like an accountable product partner: clarifying the important decisions, then executing with care.</p></div><div className="grid gap-3 sm:grid-cols-2">{whyChoose.map(item => <Card key={item.title} className="p-5"><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p></Card>)}</div></div></Container></section>;
}
