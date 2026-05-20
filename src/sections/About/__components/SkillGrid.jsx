import { aboutLocales } from "../locales";

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {aboutLocales.skillGroups.map((group) => (
        <div key={group.category}>
          <p className="text-xs font-medium text-[var(--color-ink-muted)] uppercase tracking-widest mb-3">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}