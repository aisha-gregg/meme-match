import React, { useEffect } from "react";
import styles from "./game.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { MemeRepository } from "../components/MemeRepository";
import { Card } from "./../components/Card";
import { Header } from "../components/Header";
import { UserContext } from "./userContext";

const cx = classNames.bind(styles);

export function Game() {
  const [memes, setMemes] = useState([]);
  const [flippedMemes, setFlippedMemes] = useState([]);
  const [peekedMemes, setPeekedMemes] = useState([]);
  let max = 2;

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    checkMatched();
  }, [peekedMemes]);

  async function fetchMemes() {
    const memeRepository = new MemeRepository();
    const memes = await memeRepository.findAll();
    const duplicatedMemes = Array.from(
      { length: max },
      (key, value) => value + 1
    ).reduce((previous) => [...previous, ...memes], []);

    const randomizedDuplicatedMemes = getRandomizedArray(duplicatedMemes);
    setMemes(randomizedDuplicatedMemes);
  }

  function peek({ id, index }) {
    setPeekedMemes([...peekedMemes, { id, index }]);
  }

  function isFlipped(index) {
    return flippedMemes.map((flippedMeme) => flippedMeme.index).includes(index);
  }

  function isPeeked(index) {
    return peekedMemes.map((peekedMeme) => peekedMeme.index).includes(index);
  }

  function checkMatched() {
    if (peekedMemes.length < max) {
      return;
    }

    const isMatched = peekedMemes.every(
      (peekedMeme) => peekedMemes[0].id === peekedMeme.id
    );

    if (isMatched) {
      setFlippedMemes([...flippedMemes, ...peekedMemes]);
      setPeekedMemes([]);
    } else {
      setTimeout(() => {
        setPeekedMemes([]);
      }, 1000);
    }
  }

  function isRevealed(index) {
    return isPeeked(index) || isFlipped(index);
  }

  return (
    <>
      <Header></Header>
      <div> </div>
      <UserContext.Provider value={UserContext}>Welcome</UserContext.Provider>
      <div className={cx("gameBoard")}>
        {memes.map((meme, index) => (
          <Card
            key={index}
            isRevealed={isRevealed(index)}
            isMatched={isFlipped(index)}
            image={meme.image}
            onClick={() => {
              if (!isRevealed(index) && peekedMemes.length < max) {
                peek({ index, id: meme.id });
              }
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
