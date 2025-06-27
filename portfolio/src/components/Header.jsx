import React from "react";
import data from "../data/data.json";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const header = data[language].header;

  return (
    <header className="flex h-[600px] w-full font-sans relative overflow-hidden ">
      <div className="flex-1 bg-primary text-secondary px-6 md:px-16 py-20 flex flex-col justify-between dark:bg-[#171043]">
        <div className="flex justify-between items-start ">
          <h3 className="text-3xl font-bold translate-y-[-30px] translate-x-[250px]   ">
            {header.name}
          </h3>
          <div className="flex items-center gap-4 ">
            <button
              onClick={toggleLanguage}
              className="text-sm text-secondary  translate-x-[50px] translate-y-[-40px] dark:text-[#8173DA]"
            >
              {language === "en" ? "TÜRKÇE’YE GEÇ" : "SWITCH TO ENGLISH"}
            </button>
          </div>
        </div>

        <div className=" max-w-[500px] mx-auto">
          <h1 className="text-5xl font-bold leading-snug">{header.title}</h1>
          <h1 className="text-5xl font-bold text-accent mb-40">
            {header.title2}
          </h1>
          <p className="max-w-md text-sm translate-y-[-100px] dark:text-white">
            {header.description}
          </p>
          <div className="flex gap-4 mt-6 translate-y-[-100px]">
            <a
              href={header.github}
              className=" flex items-center  gap-2 px-4 py-2 bg-white text-primary rounded shadow font-semibold dark:bg-[#211F0B] dark:text-white"
            >
              <img
                src={
                  darkMode
                    ? header.githubIcon.replace(".png", "-dark.png")
                    : header.githubIcon
                }
                alt="GitHub"
                className="w-5 h-5"
              />
              Github
            </a>
            <a
              href={header.linkedin}
              className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded shadow font-semibold dark:bg-[#211F0B] dark:text-white"
            >
              {" "}
              <img
                src={
                  darkMode
                    ? header.linkedinIcon.replace(".png", "-dark.png")
                    : header.linkedinIcon
                }
                alt="LinkedIn"
                className="w-5 h-5"
              />
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-secondary flex  justify-center p-10 dark:bg-[#211F0B]">
        <label className="relative inline-flex  translate-x-[-150px] ">
          <input
            type="checkbox"
            className="sr-only peer"
            data-testid="darkMode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div
            className="w-11 h-6 bg-[#8F88FF] rounded-full 
             peer-checked:after:translate-x-full 
             rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
             after:absolute after:top-0.5 after:start-[2px] 
             after:transition-all 
             after:rounded-full after:h-5 after:w-5 
             after:border after:border-gray-300 after:bg-[#FFE86E] 
             dark:after:translate-x-0
             dark:after:content-['🌙'] dark:after:bg-transparent dark:after:border-0 
             dark:after:h-auto dark:after:w-auto dark:after:rounded-none
             peer-checked:bg-[#3A3A3A] dark:after:[transform:scaleX(-1)]"
          ></div>
          <span className="ms-3  font-medium text-gray-900 dark:text-gray-300">
            {darkMode ? " DARK MODE" : "LIGHT MODE"}
          </span>
        </label>

        <img
          src="/assets/header/profile.png"
          alt="Profile"
          className="
      max-w-[400px] 
    rounded-[12px] 
    absolute 
    top-1/2 
    left-[70%] 
    transform 
    -translate-x-1/2 
    -translate-y-1/2 
    z-10"
        />
      </div>
    </header>
  );
}

export default Header;
