import React from "react";
import data from "../data/data.json";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const { title, description, description2, email } = data[language].contact;
  const socialLinks = data[language].socialMedia;
  const { darkMode } = useDarkMode();

  return (
    <section id="contact" className="py-20 px-6 dark:bg-[#252128]">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6 dark:text-[#8F88FF]">
          {title}
        </h2>
        <p className="text-m mb-2 dark:text-white">{description}</p>
        <p className="text-m mb-2 dark:text-white">{description2}</p>

        <a
          href={`mailto:${email}`}
          className=" text-primary underline dark:text-[#8F88FF]"
        >
          {email}
        </a>

        <div className="mt-6 flex justify-center gap-6">
          {socialLinks?.map(({ name, url, icon, alt }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              aria-label={name}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={
                  darkMode
                    ? icon.replace(".png", "-dark.png")
                    : icon.replace(".png", "-light.png")
                }
                alt={alt || `${name} icon`}
                className="w-8 h-8 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
