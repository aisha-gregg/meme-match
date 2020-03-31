import React, { useState } from "react";
import styles from "./card.module.css";

//import bindClassNames from "classnames/bind";
//import getReactWithCX from "./react-cx";

//const cx = bindClassNames(styles);

export function Card(onClick) {
  const [reveal, setReveal] = useState("");

  return (
    <div className={styles.card}>
      <img
        className={styles.picture}
        src="./meme-mujer-gritando.jpg"
        onClick={reveal ? reveal : setReveal}
      ></img>
    </div>
  );
}

export default Card;
