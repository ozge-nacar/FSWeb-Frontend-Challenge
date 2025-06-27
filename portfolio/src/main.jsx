import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </DarkModeProvider>
);
