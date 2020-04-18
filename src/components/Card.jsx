import React, { useState } from "react";
import styles from "./card.module.css";
import classNames from "classnames/bind";
import { useEffect } from "react";

const cx = classNames.bind(styles);

export function Card({ image, onClick, matched }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(matched);
  }, []);

  return (
    <>
      <div className={cx("scene")} onClick={onClick}>
        <div
          className={cx("card", {
            "is-flipped": !isRevealed,
          })}
          onClick={() => {
            if (!matched) {
              setIsRevealed(!isRevealed);
            }
          }}
        >
          <div className={cx("card-face", "card-front")}>
            <img src={image} className={cx("image")} />
          </div>

          <div className={cx("card-face", "card-back")}></div>
        </div>
      </div>
    </>
  );
}
