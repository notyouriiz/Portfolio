import { navbarLocales } from "./locales";
import NavLinks from "./__components/NavLinks";
import MobileMenu from "./__components/MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="container-lg flex items-center justify-between h-14 relative">
        <a href={navbarLocales.logoHref} className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-md bg-[var(--color-ink)] text-white text-xs font-semibold flex items-center justify-center tracking-tight">
            {navbarLocales.logo}
          </span>
          <span className="text-sm font-medium text-[var(--color-ink)] hidden sm:block">
            {navbarLocales.name}
          </span>
        </a>
        <NavLinks />
        <div className="flex items-center gap-3">
          <a href={navbarLocales.cta.href}
            className="hidden md:inline-flex text-sm font-medium text-[var(--color-ink)] border border-[var(--color-ink)] px-4 py-1.5 rounded-full hover:bg-[var(--color-ink)] hover:text-white transition-all duration-200">
            {navbarLocales.cta.label}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}