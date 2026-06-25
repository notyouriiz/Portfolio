"use client";

import styles from "./ambientglow.module.css";

export default function AmbientGlow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blueGlow} />
      <div className={styles.purpleGlow} />
    </div>
  );
}
