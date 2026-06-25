import { projectsLocales } from "./locales";
import ProjectTabs from "./__components/ProjectTabs";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`section-pad scroll-mt-14 ${styles.projects}`}
    >
      <div className="container-lg">
        <div className={styles.header}>
          <p className={styles.label}>
            {projectsLocales.sectionLabel}
          </p>

          <h2 className={styles.heading}>
            {projectsLocales.heading}
          </h2>

          <p className={styles.subheading}>
            {projectsLocales.subheading}
          </p>
        </div>

        <ProjectTabs projects={projectsLocales.projects} />
      </div>
    </section>
  );
}