import React from "react";
import styles from "./icon.module.css";

export function PlayerIcon() {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>Player 1</div>
      <div className={styles.icon}>Player 2</div>
    </div>
  );
}
