"use client";
import { useState } from "react";
import { contactLocales } from "../locales";

export default function EmailBlock() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactLocales.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* fallback */ }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <a href={`mailto:${contactLocales.email}`}
        className="text-xl sm:text-2xl font-semibold text-[var(--color-ink)] hover:opacity-70 transition-opacity tracking-tight">
        {contactLocales.email}
      </a>
      <button type="button" onClick={copyEmail}
        className="flex items-center gap-1.5 text-xs text-[var(--color-ink-muted)] border border-[var(--color-border)] px-3 py-1.5 rounded-full hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-all duration-200 cursor-pointer">
        {copied ? (
          <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {contactLocales.copiedLabel}
          </>
        ) : (
          <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="4" y="4" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.1" />
              <path d="M2 8V2h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
            {contactLocales.copyLabel}
          </>
        )}
      </button>
    </div>
  );
}