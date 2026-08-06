import { trustSignals } from "@/app/data/experienceContent";

export function TrustBand() {
  return <section aria-label="Who we build for" className="border-y border-white/[.07] bg-white/[.025]">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 lg:flex-row lg:items-center lg:px-8">
      <p className="shrink-0 text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">
        Built for teams moving through complexity</p><div className="flex flex-wrap gap-x-6 gap-y-3">
        {trustSignals.map(signal =>
          <span key={signal} className="text-sm font-medium text-slate-300 before:mr-2 before:text-teal-300 before:content-['✦']">
            {signal}
          </span>)}
      </div>
    </div>
  </section>;
}
