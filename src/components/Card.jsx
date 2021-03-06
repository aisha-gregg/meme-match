import React from "react";
import styles from "./card.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Card({ image, onClick, isRevealed, isMatched }) {
  return (
    <>
      <div className={cx("scene")} onClick={onClick}>
        <div
          className={cx("card", {
            "is-flipped": !isRevealed,
            "is-matched": isMatched,
          })}
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
