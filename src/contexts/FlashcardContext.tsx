import React, { createContext, useState, useContext, ReactNode } from "react";
import { FlashCard } from "../types";
import { getAllFlashCards } from "../services/flashcardService";

interface FlashcardContextType {
  flashcards: FlashCard[];
  addFlashcard: (flashcard: FlashCard) => void;
  removeFlashcard: (_id: string | undefined) => void;
  getAllCards: () => void;
  setFlashCards: React.Dispatch<React.SetStateAction<FlashCard[]>>;
}

const FlashcardContext = createContext<FlashcardContextType | undefined>(
  undefined
);

export const FlashcardProvider = ({ children }: { children: ReactNode }) => {
  const [flashcards, setFlashCards] = useState<FlashCard[]>([]);

  const addFlashcard = (flashcard: FlashCard) => {
    setFlashCards([...flashcards, flashcard]);
  };

  const removeFlashcard = (_id: string | undefined) => {
    setFlashCards(flashcards.filter((flashcard) => flashcard._id !== _id));
  };

  const getAllCards = () => {
    getAllFlashCards().then((data) => {
      setFlashCards(data);
    });
  };

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        addFlashcard,
        removeFlashcard,
        getAllCards,
        setFlashCards,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcardContext = () => {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error(
      "useFlashcardContext must be used within a FlashcardProvider"
    );
  }
  return context;
};
