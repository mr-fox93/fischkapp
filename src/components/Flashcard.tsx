import React, { useState } from "react";
import styles from "../components/Flashcard.module.scss";
import { FlashCard, FlashCardSide } from "../types";

const Flashcard: React.FC<FlashCard> = ({ _id, front, back }) => {
  const [currentSide, setCurrentSide] = useState<FlashCardSide>("front");

  const flipSide = () => {
    setCurrentSide((prevSide) => (prevSide === "front" ? "back" : "front"));
  };

  return (
    <div onClick={flipSide} className={styles.card} key={_id}>
      <>
        <div>{currentSide === "front" ? <p>{front}</p> : <p>{back}</p>}</div>
        {console.log(currentSide, _id)}
      </>
    </div>
  );
};

export default Flashcard;
