import data from "../data/data.json";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();
  const { title, items } = data[language].projects;

  return (
    <section className="bg-secondary text-white py-20 px-4 md:px-12 lg:px-20 dark:bg-[#1A210B]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 dark:text-secondary">
          {title}
        </h2>

        <div className="flex flex-col gap-10">
          {items.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-md dark:bg-[#2B2727]"
            >
              <div className="w-full md:w-[400px] h-[240px] md:h-auto shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col justify-center p-6 gap-4 w-full">
                <h3 className="text-xl md:text-3xl font-bold text-primary dark:text-[#C1BAED]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#383838] dark:text-white">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full dark:bg-[#8173DA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#383838] underline dark:text-secondary"
                  >
                    {language === "en" ? "View Site" : "Siteyi Görüntüle"}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#383838] underline dark:text-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
