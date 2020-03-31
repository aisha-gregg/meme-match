import React from "react";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      Memory-Matcher Game
      <h4> Work your memory and have a laugh!</h4>
    </div>
  );
}
