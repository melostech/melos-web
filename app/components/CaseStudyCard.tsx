type CaseStudyCardProps = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
};

export function CaseStudyCard({
  name,
  category,
  problem,
  solution,
  impact,
}: CaseStudyCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-[#C66464]">{category}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{name}</h3>
      <div className="mt-6 space-y-4 text-slate-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Problem</p>
          <p className="mt-2 leading-7">{problem}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Technical solution</p>
          <p className="mt-2 leading-7">{solution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Impact</p>
          <p className="mt-2 leading-7">{impact}</p>
        </div>
      </div>
    </article>
  );
}
