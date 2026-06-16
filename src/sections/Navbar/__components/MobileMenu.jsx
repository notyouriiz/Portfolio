"use client";
import { useState } from "react";
import { navbarLocales } from "../locales";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={navbarLocales.mobileMenuAriaLabel}
        className="flex flex-col gap-1.5 p-1 cursor-pointer"
      >
        <span className={`block h-px w-5 bg-[var(--color-ink)] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-px w-5 bg-[var(--color-ink)] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-px w-5 bg-[var(--color-ink)] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] px-6 py-6 flex flex-col gap-5">

          {navbarLocales.links.map((link) => {
            if (link.dropdown) {
              const expanded = openDropdown === link.label;

              return (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        expanded ? null : link.label
                      )
                    }
                    className="w-full flex items-center justify-between text-sm font-medium text-[var(--color-ink)]"
                  >
                    {link.label}

                    <span
                      className={`inline-block w-1.5 h-1.5 border-r border-b border-current transition-transform duration-200 ${
                        expanded ? "-rotate-135" : "rotate-45"
                      }`}
                    ></span>
                  </button>

                  {expanded && (
                    <div className="mt-3 ml-4 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                {link.label}
              </a>
            );
          })}

          <a
            href={navbarLocales.cta.href}
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-[var(--color-ink)] border border-[var(--color-ink)] px-4 py-2 rounded-full text-center hover:bg-[var(--color-ink)] hover:text-white transition-all duration-200"
          >
            {navbarLocales.cta.label}
          </a>

        </div>
      )}
    </div>
  );
}