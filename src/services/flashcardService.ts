import { FlashCard } from "../types";

export const getAllFlashCards = async (): Promise<FlashCard[]> => {
  const response = await fetch("http://localhost:3000/fiszki");
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  const response = await fetch(`http://localhost:3000/fiszki/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Server error");
  }
};

export const addNewCard = async (
  q: string,
  a: string
): Promise<FlashCard[]> => {
  const response = await fetch("http://localhost:3000/fiszki", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      question: q,
      answer: a,
    }),
  });
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};

export const editCard = async (
  id: string,
  q: string,
  a: string
): Promise<FlashCard[]> => {
  const response = await fetch(`http://localhost:3000/fiszki/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      question: q,
      answer: a,
    }),
  });
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};
