import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Homepage } from "./screens/Homepage/Homepage";
import "../tailwind.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Homepage />
  </StrictMode>
);
