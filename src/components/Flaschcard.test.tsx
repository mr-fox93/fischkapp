import { render, screen, fireEvent } from "../test-utils";
import Flashcard from "./Flashcard";
import { vi } from "vitest";

describe("Flashcard", () => {
  it("should render the front of the card", () => {
    render(<Flashcard front="front" back="back" />);
    expect(screen.getByText("front")).toBeInTheDocument();
  });
  it("should render the back of the card", () => {
    render(<Flashcard front="front" back="back" />);
    expect(screen.getByText("back")).toBeInTheDocument();
  });
  it("should render the edit button", () => {
    render(<Flashcard front="front" back="back" />);
    const editButtons = screen.getAllByRole("button", { name: "Edit" });
    expect(editButtons.length).toBeGreaterThanOrEqual(1);
  });
});
