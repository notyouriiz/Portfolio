"use client";

import { navbarLocales } from "../locales";
import ProjectDropdown from "./ProjectDropdown";

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <a
        href={navbarLocales.links[0].href}
        className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors duration-200"
      >
        {navbarLocales.links[0].label}
      </a>

      <ProjectDropdown />

      <a
        href={navbarLocales.links[1].href}
        className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors duration-200"
      >
        {navbarLocales.links[1].label}
      </a>
    </nav>
  );
}