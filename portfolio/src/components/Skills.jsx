import data from "../data/data.json";

export default function Skills() {
  const { skills, skillsTitle } = data;

  return (
    <section className="pt-[120px] pb-[120px] px-[239px]">
      <div className="max-w-[960px] mx-auto flex gap-[60px]">
        <h2 className="text-[48px] font-bold text-[#4731D3] mb-10">
          {skillsTitle}
        </h2>

        <div className="flex w-[960px] h-[430px] justify-between">
          <div className="flex flex-col justify-between">
            {skills.slice(0, 3).map((skill) => (
              <div key={skill.id} className="flex items-center gap-6">
                <div className="w-110 h-110">
                  <img
                    src={skill.icon}
                    alt={skill.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between ">
            {skills.slice(3).map((skill) => (
              <div key={skill.id} className="flex items-center gap-6">
                <div className="w-110 h-110">
                  <img
                    src={skill.icon}
                    alt={skill.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg text-gray-700 font-medium">
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
