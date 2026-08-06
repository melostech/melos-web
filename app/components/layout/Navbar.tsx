"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navLinks } from "@/app/data/landingContent";
import { navbarCta } from "@/app/data/uiContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        initial={{ maxWidth: 1280 }}
        animate={{ maxWidth: scrolled ? 1120 : 1280 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        className={`mx-auto flex items-center justify-between rounded-2xl px-4 py-3 transition-colors sm:px-5 ${
          scrolled
            ? "border border-white/10 bg-[#090f1ccc]/85 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          aria-label="Melos home"
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-400 text-sm font-black text-slate-950 transition-transform group-hover:rotate-6">
            <img src="/logo.png" alt="" />
          </span>
          <span className="text-md font-semibold tracking-[.23em] text-white">
            MELOS
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[.16em] text-slate-400 transition hover:text-teal-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={navbarCta.href}
          className="hidden rounded-xl bg-teal-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-teal-300 sm:block"
        >
          {navbarCta.label} <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={menuId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-xl rounded-2xl border border-white/10 bg-[#0d1320]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                onClick={() => setOpen(false)}
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-teal-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href={navbarCta.href}
              className="mt-2 block rounded-xl bg-teal-400 px-4 py-3 text-sm font-bold text-slate-950"
            >
              {navbarCta.label} →
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}