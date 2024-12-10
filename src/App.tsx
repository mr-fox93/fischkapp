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
      {isVisible && (
        <Flashcard
          id=""
          question=""
          answer=""
          key="new"
          onVisible={() => setIsVisible(false)}
          idx={0}
        />
      )}{" "}
      {flashcards &&
        flashcards.map((card, index) => (
          <Flashcard
            key={card.id}
            id={card.id}
            question={card.question}
            answer={card.answer}
            onVisible={() => setIsVisible(false)}
            idx={index}
          />
        ))}
    </AppLayout>
  );
}

export default App;
