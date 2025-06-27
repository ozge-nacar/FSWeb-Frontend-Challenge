import data from "../data/data.json";
import { useLanguage } from "../context/LanguageContext";

export default function Profile() {
  const { language } = useLanguage();
  const profile = data[language].profile;

  return (
    <section className="bg-primary text-white py-20 px-6 dark:bg-[#171043]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-6xl font-bold text-secondary mb-12 text-start">
          {profile.title}
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4">
              {profile.basicInfoTitle}
            </h3>
            <div className="space-y-6 text-xl">
              <p>
                <span className="font-semibold text-secondary">
                  {language === "en" ? "Date of Birth: " : "Doğum Tarihi: "}
                </span>
                {profile.birthDate}
              </p>
              <p>
                <span className="font-semibold text-secondary">
                  {" "}
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

          <div className="flex justify-center items-center">
            <img
              src={profile.image}
              alt="Profile"
              className="w-80 h-80 object-cover "
            />
          </div>

          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4">
              {profile.aboutTitle}
            </h3>
            <div className="space-y-3 text-xl leading-relaxed">
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
