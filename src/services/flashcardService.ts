import { FlashCard } from "../types";

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

// export const editCard = async (
//   id: string,
//   q: string,
//   a: string
// ): Promise<FlashCard[]> => {
//   const response = await fetch(
//     `https://training.nerdbord.io/api/v1/fischkapp/flashcards/${id}`,
//     {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "secret_token",
//       },
//       body: JSON.stringify({
//         front: q,
//         back: a,
//       }),
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Server error");
//   }
//   return await response.json();
// };

// export const editCard = async (
//   id: string,
//   q: string,
//   a: string
// ): Promise<FlashCard[]> => {
//   console.log(`Editing card with ID: ${id}`);
//   const response = await fetch(
//     `https://training.nerdbord.io/api/v1/fischkapp/flashcards/675c532fc2a7e3bf7f0d3ed9`,
//     {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "secret_token",
//       },
//       body: JSON.stringify({
//         front: q,
//         back: a,
//       }),
//     }
//   );
//   if (!response.ok) {
//     const errorText = await response.text();
//     console.error(`Error ${response.status}: ${errorText}`);
//     throw new Error(`Server error: ${response.status} - ${errorText}`);
//   }
//   return await response.json();
// };

/// for test purposes

// export async function getOneCard(id: string): Promise<FlashCard[]> {
//   const response = await fetch(
//     `https://training.nerdbord.io/api/v1/fischkapp/flashcards/_${id}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "secret_token",
//       },
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Server error");
//   }
//   return await response.json();
// }
