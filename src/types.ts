export interface FlashCard {
  _id?: string;
  front: string;
  back: string;
}

export type FlashCardSide = "front" | "back";

export interface FlashCardState {
  currentSide: FlashCardSide;
}
