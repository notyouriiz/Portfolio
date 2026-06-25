import { navbarLocales } from "./locales";
import NavLinks from "./__components/NavLinks";
import MobileMenu from "./__components/MobileMenu";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container-lg ${styles.container}`}>
        <a href={navbarLocales.logoHref} className={styles.brand}>
          <span className={styles.logo}>
            {navbarLocales.logo}
          </span>

          <span className={styles.brandName}>
            {navbarLocales.name}
          </span>
        </a>

        <NavLinks />

        <div className={styles.actions}>
          <a
            href={navbarLocales.cta.href}
            className={styles.cta}
          >
            {navbarLocales.cta.label}
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}