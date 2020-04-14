import React from "react";
import { Board } from "../components/Board";
import { useState } from "react";

export function Game() {
  const [cards, setCards] = useState();
  const [canFlip, setCanFlip] = useState("false");
  const [firstCard, setFirstCard] = useState();
  const [secondCard, setSecondCard] = useState();

  return <Board></Board>;
}
