import { Container } from "@/app/components/ui";
import { stats } from "@/app/data/landingContent";

export function StatsSection() {
  return <section className="py-12"><Container><div className="rounded-3xl border border-white/10 bg-[#0d1320] p-8 lg:flex lg:items-center lg:justify-between lg:p-10"><div><p className="text-[11px] font-bold uppercase tracking-[.26em] text-teal-300">By the numbers</p><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white">Reliable delivery needs sustained, hands-on ownership.</h2></div><div className="mt-8 grid gap-5 sm:grid-cols-3 lg:mt-0">{stats.map(stat => <div key={stat.label} className="lg:max-w-35"><p className="text-3xl font-semibold text-teal-300">{stat.value}</p><p className="mt-2 text-sm leading-5 text-slate-400">{stat.label}</p></div>)}</div></div></Container></section>;
}
