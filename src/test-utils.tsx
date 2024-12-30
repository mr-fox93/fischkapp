import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { FlashcardProvider } from "./contexts/FlashcardContext";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <FlashcardProvider>{children}</FlashcardProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
