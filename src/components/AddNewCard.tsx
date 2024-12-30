import { FlashCard } from "../types";
import { addNewCard } from "../services/flashcardService";
import styles from "../components/Flashcard.module.scss";
import { useState } from "react";
import { useFlashcardContext } from "../contexts/FlashcardContext";

interface AddNewCardProps {
  onVoid: () => void;
}

const AddNewCard: React.FC<AddNewCardProps> = ({ onVoid }) => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const { addFlashcard, flashcards } = useFlashcardContext();
  const [visibleSideOne, setVisibleSideOne] = useState(true);
  const [visibleSideTwo, setVisibleSideTwo] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addNewCard({ front: input1, back: input2 });
    addFlashcard({ front: input1, back: input2 });
    onVoid();
    console.log("po dodaniu", flashcards);
  };

  const handleVisible = () => {
    setVisibleSideOne(false);
    setVisibleSideTwo(true);
  };

  const handleBackButton = () => {
    setVisibleSideOne(true);
    setVisibleSideTwo(false);
  };

  return (
    <>
      <form onSubmit={handleSave} className={styles.cardContainer}>
        <div className={styles.card}>
          {visibleSideOne && (
            <div className={styles.sideOne}>
              <input
                value={input1}
                type="text"
                onChange={(e) => setInput1(e.target.value)}
                className={styles.input}
              />
              <div className={styles.buttonContainer}>
                <button className={styles.cancelButton} onClick={onVoid}>
                  Cancel
                </button>
                <button className={styles.nextButton} onClick={handleVisible}>
                  Next
                </button>
              </div>
            </div>
          )}
          {visibleSideTwo && (
            <div className={styles.sideTwo}>
              <p className={styles.previewText}>{input1}</p>
              <input
                value={input2}
                type="text"
                onChange={(e) => setInput2(e.target.value)}
                className={styles.input}
              />
              <div className={styles.buttonContainer}>
                <button
                  className={styles.backButton}
                  onClick={handleBackButton}
                >
                  Back
                </button>
                <button className={styles.saveButton} type="submit">
                  SAVE
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default AddNewCard;
