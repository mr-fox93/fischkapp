import { render, screen, fireEvent } from "../test-utils";
import AddNewCard from "./AddNewCard";
import { vi } from "vitest";

vi.mock("../services/flashcardService", () => ({
  addNewCard: vi.fn(() => Promise.resolve([])),
}));

describe("AddNewCard", () => {
  it("input1 cannot be empty", () => {
    const { getByTestId, getByRole } = render(<AddNewCard onVoid={() => {}} />);

    const input1 = getByTestId("input1") as HTMLInputElement;
    const nextBtn = getByRole("button", { name: "Next" });

    expect(input1.value).toBe("");
    expect(nextBtn).toBeDisabled();
  });

  it("input2 cannot be empty", async () => {
    const { getByTestId, getByRole } = render(<AddNewCard onVoid={() => {}} />);

    const input1 = getByTestId("input1") as HTMLInputElement;
    const nextBtn = getByRole("button", { name: "Next" });

    fireEvent.change(input1, { target: { value: "Front text" } });
    fireEvent.click(nextBtn);

    const input2 = (await getByTestId("input2")) as HTMLInputElement;
    const saveBtn = getByRole("button", { name: "SAVE" });

    expect(input2.value).toBe("");
    expect(saveBtn).toBeDisabled();
  });

  it('should call "addNewCard" with correct data', async () => {
    const { getByTestId, getByRole } = render(<AddNewCard onVoid={() => {}} />);

    const input1 = getByTestId("input1") as HTMLInputElement;
    const nextBtn = getByRole("button", { name: "Next" });

    fireEvent.change(input1, { target: { value: "Front text" } });
    fireEvent.click(nextBtn);

    const input2 = (await getByTestId("input2")) as HTMLInputElement;
    const saveBtn = getByRole("button", { name: "SAVE" });

    fireEvent.change(input2, { target: { value: "Back text" } });
    fireEvent.click(saveBtn);
  });
});
