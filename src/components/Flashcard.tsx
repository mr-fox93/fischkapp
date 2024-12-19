import React, { useState } from "react";
import styles from "../components/Flashcard.module.scss";
import { FlashCard, FlashCardSide } from "../types";
import { deleteCard } from "../services/flashcardService";
import { useFlashcardContext } from "../contexts/FlashcardContext";
import { editCard } from "../services/flashcardService";

const Flashcard: React.FC<FlashCard> = ({ _id, front, back }) => {
  const { removeFlashcard, editFlashcard } = useFlashcardContext();
  const [currentSide, setCurrentSide] = useState<FlashCardSide>("front");
  const [isEdit, setIsEdit] = useState(false);
  const [input1, setInput1] = useState<string>(front);
  const [input2, setInput2] = useState<string>(back);

  const flipSide = () => {
    if (!isEdit)
      setCurrentSide((prevSide) => (prevSide === "front" ? "back" : "front"));
  };

  const handleDelete = (_id: string | undefined) => {
    deleteCard(_id);
    removeFlashcard(_id);
  };

  const handleEdit = (_id: string | undefined) => {
    editCard({ front: input1, back: input2 }, _id);
    editFlashcard({ _id, front: input1, back: input2 });
    setIsEdit(false);
  };

  return (
    <div onClick={flipSide} className={styles.card} key={_id}>
      {currentSide === "front" ? (
        <div>
          {isEdit ? (
            <>
              <input
                value={input1}
                type="text"
                onChange={(e) => setInput1(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <button onClick={() => handleEdit(_id)}>Save</button>
            </>
          ) : (
            <>
              <p>{front}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEdit(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </>
          )}
        </div>
      ) : (
        <div>
          {isEdit ? (
            <>
              <input
                value={input2}
                type="text"
                onChange={(e) => setInput2(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <button onClick={() => handleEdit(_id)}>Save</button>
            </>
          ) : (
            <>
              <p>{back}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEdit(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </>
          )}{" "}
        </div>
      )}
    </div>
  );
};
export default Flashcard;
