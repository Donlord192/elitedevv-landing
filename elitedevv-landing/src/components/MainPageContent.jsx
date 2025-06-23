import React from "react";
import { translations } from "../i18n";
import AnimatedSection from "./AnimatedSection";

export default function MainPageContent({ lang }) {
  const t = translations[lang];

  return (
    <>
      <AnimatedSection className="main-title">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
      </AnimatedSection>

      <AnimatedSection className="description">
        <pre>{t.description}</pre>
      </AnimatedSection>

      <AnimatedSection className="skills">
        <h3>{t.skills}</h3>
        <ul>
          {t.skillList.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="services">
        <h3>{t.services}</h3>
        <ul>
          {t.serviceList.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="contact">
        <h3>{t.contact}</h3>
        <p>
          {t.telegram}:{" "}
          <a href="https://t.me/EliteDevv" target="_blank" rel="noreferrer">
            @EliteDevv
          </a>
        </p>
        <p>
          {t.instagram}:{" "}
          <a href="https://www.instagram.com/elitedevv/" target="_blank" rel="noreferrer">
            @elitedevv
          </a>
        </p>
      </AnimatedSection>
    </>
  );
}
