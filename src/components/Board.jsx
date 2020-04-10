import React, { useEffect, useState } from "react";
import styles from "./board.module.css";
import classNames from "classnames/bind";
import { MemeRepository } from "./MemeRepository";
import { Card } from "./Card";

const cx = classNames.bind(styles);

export function Board() {
  const [memes, setMemes] = useState([]);
  const [revealed, setRevealed] = useState();
  useEffect(() => {
    fetchMemes();
  }, []);

  async function fetchMemes() {
    const memeRepository = new MemeRepository();
    const memes = await memeRepository.findAll();
    const duplicatedMemes = [...memes, ...memes];

    const randomizedDuplicatedMemes = getRandomizedArray(duplicatedMemes);
    setMemes(randomizedDuplicatedMemes);
  }

  return (
    <div className={cx("gameBoard")}>
      {memes.map((meme) => (
        <Card key={meme.id} image={meme.image}></Card>
      ))}
    </div>
  );
}

// Passing values as reference
function getRandomizedArray(array) {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}
