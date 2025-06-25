import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("dark", false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
