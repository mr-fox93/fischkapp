import React from "react";
import styles from "../components/Flashcard.module.scss";
import { deleteCard } from "../services/flashcardService";
import { FlashCard } from "../types";
import { addNewCard } from "../services/flashcardService";

const Flashcard: React.FC<FlashCard> = ({ id, question, answer }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [newCard, setNewCard] = React.useState({ question: "", answer: "" });

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleCardClick} className={styles.card}>
      {isFlipped ? <p>{answer}</p> : <p>{question}</p>}

      <input
        type="text"
        value={newCard.question}
        onChange={(e) =>
          setNewCard((prev) => ({ ...prev, question: e.target.value }))
        }
      />
      <input
        type="text"
        value={newCard.answer}
        onChange={(e) =>
          setNewCard((prev) => ({ ...prev, answer: e.target.value }))
        }
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteCard(id);
        }}
      >
        Delete
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addNewCard(newCard.question, newCard.answer);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Flashcard;
