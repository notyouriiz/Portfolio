import { aboutLocales } from "./locales";
import SkillGrid from "./__components/SkillGrid";
import styles from "./about.module.css";

export default function About() {
  const headingLines = aboutLocales.heading.split("\n");

  return (
    <section id="about" className={`section-pad scroll-mt-14 ${styles.about}`}>
      <div className={`container-lg ${styles.container}`}>
        <div>
          <p className={styles.label}>
            {aboutLocales.sectionLabel}
          </p>

          <h2 className={styles.heading}>
            {headingLines.map((line, i) => (
              <span key={i} className={styles.headingLine}>
                {i === 1 ? (
                  <span className={styles.headingMuted}>
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h2>

          <div className={styles.bio}>
            {aboutLocales.bio.map((para, i) => (
              <p key={i} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.label}>
            {aboutLocales.skillsSectionLabel}
          </p>

          <SkillGrid />
        </div>
      </div>
    </section>
  );
}