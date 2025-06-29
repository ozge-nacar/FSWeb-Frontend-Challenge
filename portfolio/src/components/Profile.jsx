import data from "../data/data.json";
import { useLanguage } from "../context/LanguageContext";

export default function Profile() {
  const { language } = useLanguage();
  const profile = data[language].profile;

  return (
    <section className="bg-primary text-white py-16 px-4 sm:px-8 md:px-12 lg:px-24 dark:bg-[#171043]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-12 text-left">
          {profile.title}
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              {profile.basicInfoTitle}
            </h3>
            <div className="space-y-4 text-base sm:text-lg md:text-xl">
              <p>
                <span className="font-semibold text-secondary">
                  {language === "en" ? "Date of Birth: " : "Doğum Tarihi: "}
                </span>
                {profile.birthDate}
              </p>
              <p>
                <span className="font-semibold text-secondary">
                  {language === "en" ? "City: " : "Şehir: "}
                </span>
                {profile.city}
              </p>
              <p>
                <span className="font-semibold text-secondary">
                  {language === "en" ? "Education Status: " : "Eğitim Durumu: "}
                </span>
                {profile.education}
              </p>
              <p>
                <span className="font-semibold text-secondary">
                  {language === "en"
                    ? "Preferred Role: "
                    : "Tercih Edilen Rol: "}
                </span>
                {profile.preferredRole}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[280px] flex justify-center items-center">
            <img
              src={profile.image}
              alt="Profile"
              data-testid="profile-img"
              className="w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              {profile.aboutTitle}
            </h3>
            <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed">
              {profile.aboutText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
