import { EditPayload, FlashCard } from "../types";

export const getAllFlashCards = async (): Promise<FlashCard[]> => {
  const response = await fetch(
    "https://training.nerdbord.io/api/v1/fischkapp/flashcards",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};

export const deleteCard = async (_id: string | undefined): Promise<void> => {
  const response = await fetch(
    `https://training.nerdbord.io/api/v1/fischkapp/flashcards/${_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "secret_token",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Server error");
  }
};

export const addNewCard = async (data: FlashCard): Promise<FlashCard[]> => {
  const response = await fetch(
    "https://training.nerdbord.io/api/v1/fischkapp/flashcards",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: "secret_token",
      },

      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};

export const editCard = async (
  data: EditPayload,
  _id: string | undefined
): Promise<FlashCard[]> => {
  const response = await fetch(
    `https://training.nerdbord.io/api/v1/fischkapp/flashcards/${_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "secret_token",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
};
