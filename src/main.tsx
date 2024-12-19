import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { FlashCardProvider } from "./contexts/FlashcardContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <FlashCardProvider> */}
    <App />
    {/* </FlashCardProvider> */}
  </React.StrictMode>
);
