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
  }, [flashcards]);

  return (
    <AppLayout>
      <AppHeader cardsAmount={0} onVisible={() => setIsVisible(!isVisible)} />
      {isVisible && <Flashcard id="" question="" answer="" key="new" />}{" "}
      {flashcards &&
        flashcards.map((card) => (
          <Flashcard
            key={card.id}
            id={card.id}
            question={card.question}
            answer={card.answer}
          />
        ))}
    </AppLayout>
  );
}

export default App;
