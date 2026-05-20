"use client";
import { navbarLocales } from "../locales";

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navbarLocales.links.map((link) => (
        <a key={link.href} href={link.href}
          className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors duration-200">
          {link.label}
        </a>
      ))}
    </nav>
  );
}