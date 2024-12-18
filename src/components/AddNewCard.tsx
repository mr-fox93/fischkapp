import { FlashCard } from "../types";
import { addNewCard } from "../services/flashcardService";
import styles from "../components/Flashcard.module.scss";
import { useState } from "react";

const AddNewCard: React.FC = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addNewCard({ front: input1, back: input2 });
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <div className={styles.card}>
          <input type="text" onChange={(e) => setInput1(e.target.value)} />
          <input type="text" onChange={(e) => setInput2(e.target.value)} />
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewCard;
