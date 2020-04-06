import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./form.module.css";

export function Form() {
  const history = useHistory();

  function clickHandler() {
    history.push("/Game");
  }

  return (
    <main className={styles.main}>
      <div className={styles.border}>
        <input
          className={styles.form}
          type="text"
          placeholder="Please enter name"
        ></input>
        <input
          className={styles.form}
          type="text"
          placeholder="Please enter room ID"
        ></input>
        <button className={styles.form}>Meme Memory challenge</button>
        <button className={styles.form} onClick={() => clickHandler()}>
          Join room
        </button>
      </div>
    </main>
  );
}
