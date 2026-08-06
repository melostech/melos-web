import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/app/lib/cn";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary" };

export function Button({ className, variant = "primary", children, ...props }: 
  ButtonProps) {
  return <a className={
    cn("inline-flex items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300", 
    variant === "primary" ? "bg-teal-400 text-slate-950 hover:bg-teal-300" : "border border-white/15 bg-white/5 text-white hover:border-teal-300/50 hover:bg-white/10", className)} 
    {...props}>{children}</a>;
}
