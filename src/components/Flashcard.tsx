import React from "react";
import styles from "../components/Flashcard.module.scss";
import { deleteCard } from "../services/flashcardService";
import { FlashCard } from "../types";
import { addNewCard } from "../services/flashcardService";

const Flashcard: React.FC<FlashCard> = ({ id, question, answer }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [newCard, setNewCard] = React.useState({ question: "", answer: "" });
  const [steps, setSteps] = React.useState<number>(id === "" ? 0 : 2);
  const handleCardClick = () => {
    if (steps === 2) setIsFlipped(!isFlipped);
    setIsFlipped(!isFlipped);
  };

  const handleSteps = () => {
    if (steps === 0) {
      setSteps(1);
    } else if (steps === 1) {
      setSteps(2);
    }
  };

  const handleSave = async () => {
    await addNewCard(newCard.question, newCard.answer);
    handleSteps();
  };

  return (
    <div onClick={handleCardClick} className={styles.card}>
      {steps === 0 && (
        <div>
          <input
            type="text"
            value={newCard.question}
            onChange={(e) =>
              setNewCard((prev) => ({ ...prev, question: e.target.value }))
            }
          />
          <button onClick={handleSteps}>Next</button>
        </div>
      )}
      {steps === 1 && (
        <div>
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
              handleSave();
            }}
          >
            Save
          </button>
        </div>
      )}
      {steps === 2 && (
        <>
          <div>{isFlipped ? <p>{answer}</p> : <p>{question}</p>}</div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteCard(id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Flashcard;
