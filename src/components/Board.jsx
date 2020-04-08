import React, { useEffect, useState } from "react";
import styles from "./board.module.css";
import classNames from "classnames/bind";
import { MemeRepository } from "./MemeRepository";
import { Card } from "./Card";

const cx = classNames.bind(styles);

export function Board() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    fetchMemes();
  }, []);

  async function fetchMemes() {
    const memeRepository = new MemeRepository();
    const memes = await memeRepository.findAll();
    setMemes(memes);
  }

  return (
    <div className={cx("gameBoard")}>
      {memes.map((meme) => (
        <Card key={meme.id} image={meme.image}></Card>
      ))}
    </div>
  );
}
