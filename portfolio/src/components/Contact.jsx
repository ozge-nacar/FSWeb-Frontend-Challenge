import React from "react";
import data from "../data/data.json";

export default function Contact() {
  const { title, description, description2, email } = data.contact;
  const socialLinks = data.socialMedia;

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">{title}</h2>
        <p className="text-m mb-2">{description}</p>
        <p className="text-m mb-2">{description2}</p>

        <a href={`mailto:${email}`} className=" text-primary underline">
          {email}
        </a>

        <div className="mt-6 flex justify-center gap-6">
          {socialLinks.map(({ name, url, icon, alt }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img src={icon} alt={alt} className="w-8 h-8 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
