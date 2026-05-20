import { projectsLocales } from "./locales";
import ProjectCard from "./__components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-14 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="container-lg">
        <div className="mb-12">
          <p className="text-xs font-medium text-[var(--color-ink-muted)] uppercase tracking-widest mb-4">
            {projectsLocales.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-ink)] mb-3">
            {projectsLocales.heading}
          </h2>
          <p className="text-sm text-[var(--color-ink-muted)] max-w-lg">{projectsLocales.subheading}</p>
        </div>
        <div className="flex flex-col">
          {projectsLocales.projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}