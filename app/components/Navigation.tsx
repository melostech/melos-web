import { navLinks } from "@/app/data/landingContent";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.35em] text-[#C66464]">
          MELOS SOFTWARE
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[#C66464]/60 px-4 py-2 text-sm font-medium text-[#C66464] transition hover:bg-[#C66464] hover:text-[#0F172A]"
        >
          Request Consultation
        </a>
      </div>
    </header>
  );
}
