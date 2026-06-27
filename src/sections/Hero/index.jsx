import Image from "next/image";
import Button from "../../ui/Button";
import { heroLocales } from "./locales";
import Stats from "./__components/Stats";
import Lanyard from "./__components/Lanyard";
import AmbientGlow from "./__animations/AmbientGlow";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={`section-pad ${styles.hero}`}>
      <AmbientGlow />

      <div className={`container-md ${styles.heroContent}`}>
        {/* ========================================
            LEFT CONTENT
        ======================================== */}
        <div className={styles.heroLeft}>
          {heroLocales.availableDot && (
            <div className={styles.availability}>
              <span className={styles.availabilityDot} />
              <span className={styles.availabilityText}>
                {heroLocales.availableLabel}
              </span>
            </div>
          )}

          <div className={styles.heading}>
            <p className={styles.greeting}>
              {heroLocales.greeting}
            </p>

            <h1 className={styles.name}>
              {heroLocales.name}

              <span className={styles.role}>
                {heroLocales.role}
              </span>
            </h1>
          </div>

          <p className={styles.tagline}>
            {heroLocales.tagline}
          </p>

          <div className={styles.actions}>
            <Button
              href={heroLocales.cta.primary.href}
              variant="primary"
            >
              {heroLocales.cta.primary.label}

              {heroLocales.ctaArrow && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.5 7h9m-4-4.5L11.5 7l-4 4.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Button>

            <Button
              href={heroLocales.cta.secondary.href}
              variant="secondary"
            >
              {heroLocales.cta.secondary.label}
            </Button>

            <Button
              href={heroLocales.cta.third.href}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/growithm-icon.png"
                alt="Growithm icon"
                width={16}
                height={16}
                className={styles.icon}
              />

              {heroLocales.cta.third.label}
            </Button>
          </div>

          <div className={styles.statsWrapper}>
            <Stats />
          </div>
        </div>

        {/* ========================================
            RIGHT CONTENT
        ======================================== */}
        <div className={styles.heroRight}>
          <div className={styles.lanyardContainer}>
          <Lanyard
              card={heroLocales.lanyard.card}
              strap={heroLocales.lanyard.strap}
          />
          </div>
        </div>
      </div>

      <div className={styles.heroFade} />
      <div className={styles.bottomCurve} />
    </section>
  );
}