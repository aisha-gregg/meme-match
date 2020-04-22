import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./form.module.css";
import { useContext } from "react";
import { UserContext } from "../userContext";

export function Form() {
  const history = useHistory();

  const { username, setUsername } = useContext(UserContext);

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
          value={username}
          onInput={(event) => setUsername(event.target.value)}
        ></input>

        <button className={styles.form}>Memory challenge</button>
        <button className={styles.form} onClick={() => clickHandler()}>
          Join room
        </button>
      </div>
    </main>
  );
}
