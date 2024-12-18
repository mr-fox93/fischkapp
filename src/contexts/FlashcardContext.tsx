// import React, { createContext, useState, useContext, ReactNode } from "react";

// interface Flashcard {
//     id: number;
//     question: string;
//     answer: string;
// }

// interface FlashcardContextType {
//     flashcards: Flashcard[];
//     addFlashcard: (flashcard: Flashcard) => void;
//     removeFlashcard: (id: number) => void;
// }

// const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

// export const FlashcardProvider = ({ children }: { children: ReactNode }) => {
//     const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

//     const addFlashcard = (flashcard: Flashcard) => {
//         setFlashcards([...flashcards, flashcard]);
//     };

//     const removeFlashcard = (id: number) => {
//         setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
//     };

//     return (
//         <FlashcardContext.Provider value={{ flashcards, addFlashcard, removeFlashcard }}>
//             {children}
//         </FlashcardContext.Provider>
//     );
// };

// export const useFlashcardContext = () => {
//     const context = useContext(FlashcardContext);
//     if (context === undefined) {
//         throw new Error('useFlashcardContext must be used within a FlashcardProvider');
//     }
//     return context;
// };

// import React, { createContext, useContext, useState, ReactNode } from "react";

// type FlashCardState = "front" | "back";

// interface FlashCardContextType {
//   currentSide: FlashCardState;
//   flipCard: () => void;
// }

// const FlashCardContext = createContext<FlashCardContextType | undefined>(
//   undefined
// );

// export const FlashCardProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [currentSide, setCurrentSide] = useState<FlashCardState>("front");

//   const flipCard = () => {
//     setCurrentSide((prevSide) => (prevSide === "front" ? "back" : "front"));
//   };

//   return (
//     <FlashCardContext.Provider value={{ currentSide, flipCard }}>
//       {children}
//     </FlashCardContext.Provider>
//   );
// };

// export const useFlashCard = (): FlashCardContextType => {
//   const context = useContext(FlashCardContext);
//   if (!context) {
//     throw new Error("useFlashCard must be used within a FlashCardProvider");
//   }
//   return context;
// };
