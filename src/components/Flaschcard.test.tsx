import { render, screen, fireEvent } from "../test-utils";
import Flashcard from "./Flashcard";
import { vi } from "vitest";

describe("Flashcard", () => {
  it('user cannot save flashcard with empty "front" input', async () => {
    const { getByTestId, getAllByRole } = render(
      <Flashcard front="" back="" />
    );
    const editBtn = getAllByRole("button", { name: "Edit" });

    fireEvent.click(editBtn[0]);
    const input1 = (await getByTestId("input1")) as HTMLInputElement;
    const saveBtn = getAllByRole("button", { name: "Save" });

    expect(input1.value).toBe("");
    expect(saveBtn[0]).toBeDisabled();
  });

  it('use can save data when "front" input is not empty', async () => {
    const { getByTestId, getAllByRole } = render(
      <Flashcard front="Front text" back="Back text" />
    );
    const editBtn = getAllByRole("button", { name: "Edit" });

    fireEvent.click(editBtn[0]);
    const input1 = getByTestId("input1") as HTMLInputElement;
    const saveBtn = getAllByRole("button", { name: "Save" });

    expect(input1.value).toBe("Front text");
    expect(saveBtn[0]).toBeEnabled();
  });

  it('user cannot save flashcard with empty "back" input', async () => {
    const { getByTestId, getAllByRole } = render(
      <Flashcard front="" back="" />
    );
    const editBtn = getAllByRole("button", { name: "Edit" });

    fireEvent.click(editBtn[0]);
    const input2 = (await getByTestId("input2")) as HTMLInputElement;
    const saveBtn = getAllByRole("button", { name: "Save" });

    expect(input2.value).toBe("");
    expect(saveBtn[0]).toBeDisabled();
  });

  it('use can save data when "back" input is not empty', async () => {
    const { getByTestId, getAllByRole } = render(
      <Flashcard front="Front text" back="Back text" />
    );
    const editBtn = getAllByRole("button", { name: "Edit" });

    fireEvent.click(editBtn[0]);
    const input2 = getByTestId("input2") as HTMLInputElement;
    const saveBtn = getAllByRole("button", { name: "Save" });

    expect(input2.value).toBe("Back text");
    expect(saveBtn[0]).toBeEnabled();
  });
});
