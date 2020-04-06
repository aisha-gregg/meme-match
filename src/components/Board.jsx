import React from "react";
import styles from "./board.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export function Board() {
  return (
    <div className={cx("gameBoard")}>
      <img src="meme-mujer-gritando.jpg" />
      <img src="meme-mujer-gritando.jpg" />
      <img src="meme-mujer-gritando.jpg" />
      <img src="meme-mujer-gritando.jpg" />
      <img src="meme-mujer-gritando.jpg" />
      <img src="meme-mujer-gritando.jpg" />
    </div>
  );
}
