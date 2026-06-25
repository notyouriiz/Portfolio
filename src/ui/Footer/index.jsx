import { contactLocales } from "./locales";
import EmailBlock from "./__components/EmailBlock";
import styles from "./footer.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`scroll-mt-14 ${styles.contact}`}
    >
      <div className={`container-lg section-pad`}>
        <p className={styles.label}>
          {contactLocales.sectionLabel}
        </p>

        <h2 className={styles.heading}>
          {contactLocales.heading}
        </h2>

        <p className={styles.subheading}>
          {contactLocales.subheading}
        </p>

        <EmailBlock />

        <div className={styles.links}>
          {contactLocales.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkLabel}>
                {link.label}
              </span>

              <span className={styles.linkHandle}>
                {link.handle}
              </span>

              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5V6"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className="container-lg">
          <p className={styles.copyright}>
            {contactLocales.footer.copy}
          </p>
        </div>
      </div>
    </section>
  );
}