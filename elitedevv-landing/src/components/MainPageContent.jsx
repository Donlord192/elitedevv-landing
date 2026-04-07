import React from "react";
import { translations } from "../i18n";
import AnimatedSection from "./AnimatedSection";
import FAQ from "./FAQ";

export default function MainPageContent({ lang }) {
  const t = translations[lang];
  if (!t) return <div>Ошибка: переводы не найдены для языка "{lang}"</div>;

  const currentYear = new Date().getFullYear();

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
          {Array.isArray(t.skillList) &&
            t.skillList.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="services">
        <h3>{t.services}</h3>
        <ul>
          {Array.isArray(t.serviceList) &&
            t.serviceList.map((service, i) => <li key={i}>{service}</li>)}
        </ul>
      </AnimatedSection>

      {/* FAQ с переводом заголовка */}
      <AnimatedSection className="faq">
        <h3>{t.faqTitle}</h3>
        <FAQ faqList={t.faq.list} />
      </AnimatedSection>

      {/* Контакты */}
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

      {/* Футер с переводом и динамическим годом */}
      <footer className="footer">
        &copy; {currentYear} {t.footerRights}
      </footer>
    </>
  );
}