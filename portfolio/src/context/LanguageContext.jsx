import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "tr" : "en";
    setLanguage(newLang);
    toast.success(
      newLang === "en"
        ? "language set to English"
        : "Dil Türkçe olarak ayarlandı."
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
