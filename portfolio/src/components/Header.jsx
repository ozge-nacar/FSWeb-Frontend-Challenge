import React from "react";
import data from "../data/data.json";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const header = data[language].header;

  return (
    <>
      {/*Masaüstü görünüm */}
      <header className="hidden lg:flex h-[600px] w-full font-sans relative overflow-hidden">
        <div className="flex-1 bg-primary text-secondary px-6 py-20 flex flex-col justify-between dark:bg-[#171043]">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl font-bold translate-y-[-30px] translate-x-[270px]">
              {header.name}
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="text-sm text-secondary translate-x-[20px] translate-y-[-40px] dark:text-[#8173DA]"
              >
                {language === "en" ? "TÜRKÇE’YE GEÇ" : "SWITCH TO ENGLISH"}
              </button>
            </div>
          </div>

          <div className="max-w-[500px] mx-auto">
            <h1 className="text-5xl font-bold leading-snug">{header.title}</h1>
            <h1 className="text-5xl font-bold text-accent mb-40">
              {header.title2}
            </h1>
            <p className="text-white max-w-md text-sm translate-y-[-100px] dark:text-white">
              {header.description}
            </p>
            <div className="flex gap-4 mt-6 translate-y-[-100px]">
              <a
                href={header.github}
                className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded shadow font-semibold dark:bg-[#211F0B] dark:text-white"
              >
                <img
                  src={darkMode ? header.githubDarkIcon : header.githubIcon}
                  alt="GitHub"
                  className="w-5 h-5"
                />
                Github
              </a>
              <a
                href={header.linkedin}
                className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded shadow font-semibold dark:bg-[#211F0B] dark:text-white"
              >
                <img
                  src={darkMode ? header.linkedinDarkIcon : header.linkedinIcon}
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                Linkedin
              </a>
            </div>
          </div>
        </div>

        <div className="w-[30%] bg-secondary flex justify-center p-10 dark:bg-[#211F0B]">
          <label className="relative inline-flex translate-x-[-150px]">
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
                after:absolute after:top-0.5 after:start-[2px]
                after:transition-all after:rounded-full after:h-5 after:w-5 
                after:border after:border-gray-300 after:bg-[#FFE86E]
                peer-checked:bg-[#3A3A3A]
                dark:after:content-['🌙'] dark:after:bg-transparent 
                dark:after:border-0 dark:after:h-auto dark:after:w-auto"
            />
            <span className="ms-3 font-medium text-primary dark:text-[#D9D9D9]">
              {darkMode ? " LIGHT MODE" : "DARK MODE"}
            </span>
          </label>

          <img
            src="/assets/header/profile.png"
            alt="Profile"
            className="max-w-[400px] rounded-[12px] absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </header>

      {/*Mobil görünüm */}
      <header className="block lg:hidden w-full font-sans bg-primary text-secondary px-6 py-10 dark:bg-[#171043]">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-between w-full items-center mb-4">
            <h3 className="text-xl font-bold ">{header.name}</h3>
            <div className="flex items-center gap-3 translate-x-[-5px]">
              <button
                onClick={toggleLanguage}
                className="text-xs font-semibold dark:text-[#CBF281]"
              >
                {language === "en" ? "TÜRKÇE’YE GEÇ" : "SWITCH TO EN"}
              </button>
              <label className="relative inline-flex items-center">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <div
                  className="w-11 h-6 bg-[#8F88FF] rounded-full 
                    peer-checked:after:translate-x-full
                    after:absolute after:top-0.5 after:start-[2px]
                    after:transition-all after:rounded-full after:h-5 after:w-5 
                    after:border after:border-gray-300 after:bg-[#FFE86E]
                    peer-checked:bg-[#3A3A3A]
                    dark:after:content-['🌙'] dark:after:bg-transparent 
                    dark:after:border-0 dark:after:h-auto dark:after:w-auto"
                />
                <span className="ms-3 font-medium text-secondary dark:text-[#D9D9D9]">
                  {darkMode ? " LIGHT MODE" : "DARK MODE"}
                </span>
              </label>
            </div>
          </div>

          <h1 className="text-3xl font-bold">{header.title}</h1>
          <h1 className="text-3xl font-bold text-accent mb-6">
            {header.title2}
          </h1>
          <p className="text-sm text-white dark:text-white mb-6 max-w-xs">
            {header.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href={header.github}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-primary rounded shadow font-semibold dark:bg-[#211F0B] dark:text-white"
            >
              <img
                src={darkMode ? header.githubDarkIcon : header.githubIcon}
                alt="GitHub"
                className="w-5 h-5"
              />
              Github
            </a>
            <a
              href={header.linkedin}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-primary rounded shadow font-semibold dark:bg-[#211F0B] dark:text-white"
            >
              <img
                src={darkMode ? header.linkedinDarkIcon : header.linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5"
              />
              Linkedin
            </a>
          </div>

          <img
            src="/assets/header/profile.png"
            alt="Profile"
            className="max-w-[250px] rounded-[12px]"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
