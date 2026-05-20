import { aboutLocales } from "../locales";

export default function GrowithmCard() {
  const { growithm } = aboutLocales;
  return (
    <a href={growithm.link} target="_blank" rel="noopener noreferrer"
      aria-label={growithm.ariaLabel}
      className="group flex items-start gap-4 p-5 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-ink)] transition-colors duration-200 bg-[var(--color-surface-soft)]">
      <div className="shrink-0 w-9 h-9 rounded-lg bg-[var(--color-ink)] text-white text-xs font-bold flex items-center justify-center">
        {growithm.logoLetter}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-[var(--color-ink)]">{growithm.label}</span>
          <svg className="w-3 h-3 text-[var(--color-ink-faint)] group-hover:text-[var(--color-ink)] transition-colors" fill="none" viewBox="0 0 12 12">
            <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xs text-[var(--color-ink-muted)] leading-relaxed">{growithm.description}</p>
      </div>
    </a>
  );
}