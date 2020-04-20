import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.border}>
        <img
          className={styles.logo}
          src="https://img.icons8.com/ios/50/000000/for-experienced.png"
        />
      </div>
      Memory-Matcher Game
      <h4> Work your memory and have a laugh!</h4>
    </div>
  );
}
