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

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addNewCard({ front: input1, back: input2 });
    addFlashcard({ front: input1, back: input2 });
    onVoid();
    console.log("po dodaniu", flashcards);
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className={styles.card}>
          <input type="text" onChange={(e) => setInput1(e.target.value)} />
          <input type="text" onChange={(e) => setInput2(e.target.value)} />
          <button type="submit">SAVE</button>
        </div>
      </form>
    </>
  );
};

export default AddNewCard;
