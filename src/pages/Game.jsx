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

  function peek(id) {
    setPeekedMemes([...peekedMemes, id]);
  }
  function isFlipped(id) {
    for (let i = 0; i < flippedMemes.length; i++) {
      if (flippedMemes[i] === id) {
        return true;
      }
    }
    return false;
  }

  function isPeeked(id) {
    for (let i = 0; i < peekedMemes.length; i++) {
      if (peekedMemes[i] === id) {
        return true;
      }
    }
    return false;
  }
  return (
    <>
      F: {flippedMemes} - P: {peekedMemes}
      <div className={cx("gameBoard")}>
        {memes.map((meme, index) => (
          <Card
            isRevealed={isFlipped(meme.id) || isPeeked(meme.id)}
            key={index}
            image={meme.image}
            onClick={() => peek(meme.id)}
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
