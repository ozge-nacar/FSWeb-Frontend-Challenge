import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../data/data.json";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const { title, description, description2, email } = data[language].contact;
  const socialLinks = data[language].socialMedia;
  const { darkMode } = useDarkMode();

  const [status, setStatus] = useState(null);
  const [content, setContent] = useState(null);

  const API_KEY = "AIzaSyDBvQL98EaJHZDmHvsvceVoSkbGENOQLgk"; //

  useEffect(() => {
    const postData = {
      name: "Almila",
      job: "Frontend Developer",
    };

    axios
      .post("https://reqres.in/api/workintech", postData, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((response) => {
        setContent(response.data);
        console.log(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error("API gönderim hatası:", error);
        setStatus("error");
      });
  }, []);
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 dark:bg-[#252128] bg-[#F9F9F9]"
    >
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 dark:text-[#8F88FF]">
          {title}
        </h2>
        <p className="text-sm sm:text-base mb-2 dark:text-white">
          {description}
        </p>
        <p className="text-sm sm:text-base mb-4 dark:text-white">
          {description2}
        </p>

        <a
          href={`mailto:${email}`}
          className="text-primary underline dark:text-[#8F88FF] font-medium block mb-6 text-sm sm:text-base"
        >
          {email}
        </a>

        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks?.map(({ name, url, icon, alt }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
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
                className="w-6 sm:w-8 h-6 sm:h-8 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
