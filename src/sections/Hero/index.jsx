import { heroLocales } from "./locales";
import Stats from "./__components/Stats";

export default function Hero() {
  return (
    <section id="hero" className="section-pad pt-32 min-h-screen flex items-center bg-[var(--color-surface)]">
      <div className="container-md">

        {heroLocales.availableDot && (
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-[var(--color-ink-muted)]">{heroLocales.availableLabel}</span>
          </div>
        )}

        <div className="mb-6 fade-in">
          <p className="text-sm text-[var(--color-ink-muted)] mb-2">{heroLocales.greeting}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--color-ink)] leading-[1.05]">
            {heroLocales.name}
            <span className="block text-[var(--color-ink-muted)] font-normal text-3xl sm:text-4xl lg:text-5xl mt-2">
              {heroLocales.role}
            </span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-[var(--color-ink-muted)] max-w-xl leading-relaxed mb-10 fade-in">
          {heroLocales.tagline}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href={heroLocales.cta.primary.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-ink)] text-white text-sm font-medium rounded-full hover:opacity-80 transition-opacity duration-200">
            {heroLocales.cta.primary.label}
            {heroLocales.ctaArrow && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9m-4-4.5L11.5 7l-4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </a>
          <a href={heroLocales.cta.secondary.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-ink)] text-sm font-medium rounded-full hover:border-[var(--color-ink)] transition-colors duration-200">
            {heroLocales.cta.secondary.label}
          </a>
        </div>

        <Stats />
      </div>
    </section>
  );
}