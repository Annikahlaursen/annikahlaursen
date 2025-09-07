import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/annikahlaursen"} //dette er kun til en rod, hvis det er hoved domænet så ikke sæt det ind
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
