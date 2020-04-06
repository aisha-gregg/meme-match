import React, { useState } from "react";
import styles from "./game.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Game() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div className={cx("scene")}>
        <div
          className={cx("card", {
            "is-flipped": !isFlipped,
          })}
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          <div className={cx("card-face", "card-front")}>
            <img src="meme-mujer-gritando.jpg" className={cx("image")} />
          </div>

          <div className={cx("card-face", "card-back")}></div>
        </div>
      </div>
    </>
  );
}
