"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale, Translations } from "./translations";

type LangContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<LangContextType>({
  locale: "en",
  t: translations["en"],
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
