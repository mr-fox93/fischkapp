export interface FlashCard {
  _id?: string | undefined;
  front: string;
  back: string;
}

export type FlashCardSide = "front" | "back";

export interface FlashCardState {
  currentSide: FlashCardSide;
}

export interface EditedFlashCard {
  _id: string;
  front: string;
  back: string;
  key: string;
}
