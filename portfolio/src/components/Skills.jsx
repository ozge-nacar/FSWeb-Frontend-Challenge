import data from "../data/data.json";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { language } = useLanguage();
  const { skills, skillsTitle } = data[language];

  return (
    <section className="pt-[120px] pb-[120px] px-4 sm:px-[239px] dark:bg-[#211F0B] 	pt-4 md:pt-[120px] ">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-10 md:gap-[60px] ">
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#4731D3] dark:text-secondary text-center md:text-left">
          {skillsTitle}
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[960px] md:h-[430px] gap-10 md:gap-0">
          <div className="flex flex-col justify-between space-y-6 md:space-y-0">
            {skills.slice(0, 3).map((skill) => (
              <div key={skill.id} className="flex items-center gap-4 sm:gap-6">
                <div className="w-[60px] h-[60px] sm:w-[110px] sm:h-[110px]">
                  <img
                    src={skill.icon}
                    alt={skill.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-base sm:text-lg text-gray-700 font-medium dark:text-white">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between space-y-6 md:space-y-0">
            {skills.slice(3).map((skill) => (
              <div key={skill.id} className="flex items-center gap-4 sm:gap-6">
                <div className="w-[60px] h-[60px] sm:w-[110px] sm:h-[110px]">
                  <img
                    src={skill.icon}
                    alt={skill.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-base sm:text-lg text-gray-700 font-medium dark:text-white">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
