import { navLinks } from "@/app/data/landingContent";
import { navbarCta } from "@/app/data/uiContent";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.35em] text-[#f8fafc]">
          MELOS SOFTWARE
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#2dd4bf]">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={navbarCta.href}
          className="rounded-full border border-[#14b8a6]/40 bg-[#14b8a6]/10 px-4 py-2 text-sm font-medium text-[#2dd4bf] transition hover:bg-[#14b8a6]/20"
        >
          {navbarCta.label}
        </a>
      </div>
    </header>
  );
}
