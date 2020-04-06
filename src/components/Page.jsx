import React from "react";
import styles from "./page.module.css";
import { Header } from "./Header";

export function Page() {
  return (
    <div className={styles.page}>
      <Header></Header>
    </div>
  );
}
