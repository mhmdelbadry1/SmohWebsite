import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../tailwind.css";
import "./i18n"; // Import i18n configuration

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
