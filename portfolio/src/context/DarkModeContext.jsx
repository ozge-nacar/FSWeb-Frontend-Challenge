import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("dark", false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    toast.info(newMode ? "Karanlık Mod Aktif" : "Aydınlık Mod Aktif");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div>
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
