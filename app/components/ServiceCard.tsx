type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-white/5 p-8 transition hover:border-[#C66464]/40 hover:bg-white/[0.08]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C66464]/40 bg-[#C66464]/10 text-[#C66464]">
        <span className="text-lg font-semibold">↗</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
    </article>
  );
}
