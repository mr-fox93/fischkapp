import { AppLayout } from "./components/AppLayout";
import "./App.module.scss";
import AppHeader from "./components/AppHeader";
import { useEffect, useState } from "react";
import { getAllFlashCards } from "./services/flashcardService";
import { FlashCard } from "./types";
import Flashcard from "./components/Flashcard";
import AddNewCard from "./components/AddNewCard";
import { useFlashcardContext } from "./contexts/FlashcardContext";

function App() {
  // const [flashcards, setFlashCards] = useState<FlashCard[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { setFlashCards, flashcards } = useFlashcardContext();

  useEffect(() => {
    getAllFlashCards().then((data) => {
      setFlashCards(data);
      console.log("po pobraniu", data, "a to flashcards", flashcards);
    });
  }, []);

  return (
    <AppLayout>
      <AppHeader
        cardsAmount={flashcards.length}
        onVisible={() => setIsVisible(true)}
      />
      {isVisible && <AddNewCard onVoid={() => setIsVisible(false)} />}
      {flashcards &&
        flashcards.map((card) => (
          <Flashcard
            key={card._id}
            _id={card._id}
            front={card.front}
            back={card.back}
          />
        ))}
    </AppLayout>
  );
}

export default App;
