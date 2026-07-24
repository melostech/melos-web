import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/app/lib/cn";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return <article className={cn("glass-panel rounded-2xl", className)} {...props} />;
}
