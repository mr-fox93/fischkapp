import { AppLayout } from "./components/AppLayout";
import "./App.module.scss";
import AppHeader from "./components/AppHeader";
import { useEffect, useState } from "react";
import { getAllFlashCards } from "./services/flashcardService";
import { FlashCard } from "./types";
import Flashcard from "./components/Flashcard";

function App() {
  const [flashcards, setFlashCards] = useState<FlashCard[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getAllFlashCards().then((data) => {
      setFlashCards(data);
    });
  }, []);

  return (
    <AppLayout>
      <AppHeader
        cardsAmount={flashcards.length}
        onVisible={() => setIsVisible(true)}
      />
      {isVisible && <Flashcard _id="" front="" back="" key="new" />}{" "}
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
