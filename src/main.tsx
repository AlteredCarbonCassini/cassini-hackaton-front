import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import CoordsProvider from "./components/CoordsProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoordsProvider>
      <App />
    </CoordsProvider>
  </StrictMode>
);
