"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../lib/data";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition duration-500 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-full border px-5 py-3 backdrop-blur-2xl transition duration-500 sm:px-6 ${
          scrolled
            ? "border-fuchsia-200/20 bg-[#08050d]/76 shadow-[0_24px_80px_rgba(0,0,0,0.34),0_0_70px_rgba(191,18,238,0.13)]"
            : "border-white/10 bg-white/[0.035] shadow-[0_18px_70px_rgba(0,0,0,0.16)]"
        }`}>
        <a href="/" className="text-base font-semibold tracking-[0.24em] text-white transition hover:text-fuchsia-100">
          Vexora
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const href = link.href.startsWith('#') ? `/${link.href}` : link.href;
            return (
              <a
                key={link.href}
                href={href}
                className="group relative transition duration-300 hover:text-fuchsia-100"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-[#bf12ee] shadow-[0_0_18px_rgba(191,18,238,0.72)] transition duration-300 group-hover:scale-x-100" />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" href="/#contact" className="px-5 py-2.5 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(191,18,238,0.18)]">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
