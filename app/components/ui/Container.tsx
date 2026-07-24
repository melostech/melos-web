import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/app/lib/cn";

type ContainerProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = "div">({ as, className, ...props }: ContainerProps<T>) {
  const Component = as ?? "div";
  return <Component className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)} {...props} />;
}
