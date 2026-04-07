import React, { useState } from "react";
import Logo from "./components/Logo";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MainPageContent from "./components/MainPageContent";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="app-container">
      <header>
        <Logo />
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </header>

      <main>
        <MainPageContent lang={lang} />
      </main>
    </div>
  );
}