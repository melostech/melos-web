import { cn } from "@/app/lib/cn";

type Props = { eyebrow: string; title: string; description?: string; align?: "left" | "center" };
export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
    <p className="text-[11px] font-bold uppercase tracking-[.26em] text-teal-300">{eyebrow}</p>
    <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>}
  </div>;
}
