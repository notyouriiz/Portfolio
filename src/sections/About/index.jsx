import { aboutLocales } from "./locales";
import SkillGrid from "./__components/SkillGrid";
import GrowithmCard from "./__components/GrowithmCard";

export default function About() {
  const headingLines = aboutLocales.heading.split("\n");

  return (
    <section id="about" className="section-pad scroll-mt-14 bg-[var(--color-surface-soft)] border-t border-[var(--color-border)]">
      <div className="container-lg grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <p className="text-xs font-medium text-[var(--color-ink-muted)] uppercase tracking-widest mb-5">
            {aboutLocales.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-ink)] leading-tight mb-8">
            {headingLines.map((line, i) => (
              <span key={i} className="block">
                {i === 1
                  ? <span className="text-[var(--color-ink-muted)] font-normal">{line}</span>
                  : line}
              </span>
            ))}
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {aboutLocales.bio.map((para, i) => (
              <p key={i} className="text-sm text-[var(--color-ink-muted)] leading-relaxed">{para}</p>
            ))}
          </div>
          <GrowithmCard />
        </div>

        <div>
          <p className="text-xs font-medium text-[var(--color-ink-muted)] uppercase tracking-widest mb-5">
            {aboutLocales.skillsSectionLabel}
          </p>
          <SkillGrid />
        </div>
      </div>
    </section>
  );
}