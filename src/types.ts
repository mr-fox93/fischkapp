export interface FlashCard {
  _id?: string | undefined;
  front: string;
  back: string;
}

export type FlashCardSide = "front" | "back";

export interface FlashCardState {
  currentSide: FlashCardSide;
}

export type EditPayload = { front: string } | { back: string };
