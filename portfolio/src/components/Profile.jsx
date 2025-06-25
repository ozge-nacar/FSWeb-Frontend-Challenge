import data from "../data/data.json";

export default function Profile() {
  const profile = data.profile;

  return (
    <section className="bg-primary text-white py-20 px-6">
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
                  Date of Birth:{" "}
                </span>
                {profile.birthDate}
              </p>
              <p>
                <span className="font-semibold text-secondary">City: </span>
                {profile.city}
              </p>
              <p>
                <span className="font-semibold text-secondary">
                  Education Status:{" "}
                </span>
                {profile.education}
              </p>
              <p>
                <span className="font-semibold text-secondary">
                  Preferred Role:{" "}
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
