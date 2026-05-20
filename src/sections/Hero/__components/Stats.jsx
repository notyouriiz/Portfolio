import { heroLocales } from "../locales";

export default function Stats() {
  return (
    <div className="flex flex-wrap gap-8 pt-10 border-t border-[var(--color-border)]">
      {heroLocales.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-0.5">
          <span className="text-2xl font-semibold text-[var(--color-ink)] tracking-tight">{stat.value}</span>
          <span className="text-xs text-[var(--color-ink-muted)]">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}