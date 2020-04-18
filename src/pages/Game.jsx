import React, { useEffect } from "react";
import styles from "./game.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { MemeRepository } from "../components/MemeRepository";
import { Card } from "./../components/Card";

const cx = classNames.bind(styles);

export function Game() {
  const [memes, setMemes] = useState([]);
  const [flippedMemes, setFlippedMemes] = useState([]);
  const [peekedMemes, setPeekedMemes] = useState([]);

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

  function peek({ id, index }) {
    setPeekedMemes([...peekedMemes, { id, index }]);
  }

  function isFlipped(id) {
    return flippedMemes.map((flippedMeme) => flippedMeme.id).includes(id);
  }

  function isPeeked({ id, index }) {
    return peekedMemes.map((peekedMeme) => peekedMeme.index).includes(index);
  }

  function isMatched() {
    const matchCheck = peekedMemes.every(
      (peekedMeme) => peekedMemes[0].id === peekedMeme.id
    );
    if (!matchCheck) {
      setPeekedMemes([]);
    }
  }

  return (
    <>
      F: {flippedMemes} - P: {JSON.stringify(peekedMemes)}
      <div className={cx("gameBoard")}>
        {memes.map((meme, index) => (
          <Card
            key={index}
            isRevealed={isPeeked({ id: meme.id, index })}
            image={meme.image}
            onClick={() => {
              peek({ index, id: meme.id });
              isMatched(meme.id);
            }}
          ></Card>
        ))}
      </div>
    </>
  );

  // Passing values as reference
  function getRandomizedArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy;
  }
}
