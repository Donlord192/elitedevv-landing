import React from "react";

const flags = {
  en: "🇺🇸",
  ru: "🇷🇺",
  uk: "🇺🇦",
  nl: "🇳🇱"
};

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="language-switcher">
      {Object.entries(flags).map(([code, flag]) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={lang === code ? "active" : ""}
          aria-label={`Switch to ${code}`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}