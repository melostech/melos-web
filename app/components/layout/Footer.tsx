import { Container } from "@/app/components/ui";
import { navLinks } from "@/app/data/landingContent";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <p>
          © {new Date().getFullYear()} Melos Technologies. Engineering rigor for
          scalable digital ecosystems.
        </p>

        <nav className="flex gap-5" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-teal-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}