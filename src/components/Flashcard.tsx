import React, { useState } from "react";
import styles from "../components/Flashcard.module.scss";
import { FlashCard, FlashCardSide } from "../types";
import { deleteCard } from "../services/flashcardService";
import { useFlashcardContext } from "../contexts/FlashcardContext";

const Flashcard: React.FC<FlashCard> = ({ _id, front, back }) => {
  const [currentSide, setCurrentSide] = useState<FlashCardSide>("front");
  const { removeFlashcard } = useFlashcardContext();

  const flipSide = () => {
    setCurrentSide((prevSide) => (prevSide === "front" ? "back" : "front"));
  };

  const handleDelete = (_id: string | undefined) => {
    deleteCard(_id);
    removeFlashcard(_id);
  };

  return (
    <div onClick={flipSide} className={styles.card} key={_id}>
      <>
        <div>{currentSide === "front" ? <p>{front}</p> : <p>{back}</p>}</div>
        {/* {console.log(currentSide, _id)} */}
        <button onClick={() => handleDelete(_id)}>DELETE</button>
      </>
    </div>
  );
};

export default Flashcard;
