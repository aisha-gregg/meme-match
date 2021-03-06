import React, { useState } from "react";
import { useInterval } from "./useInterval";
import styles from "./CountdownTimer.css";

export function CountdownTimer() {
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    setCounter(counter + 1);
  }, 1_000);

  function formatSeconds(seconds) {
    const date = new Date(0);
    date.setSeconds(seconds);
    const timeString = date.toISOString().substr(11, 8);
    return timeString;
  }

  return (
    <div className={styles.counter}>
      <h1>Countdown</h1>

      {formatSeconds(counter)}
    </div>
  );
}
