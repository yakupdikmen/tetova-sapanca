"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationKey, Language } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  formatPrice: (priceTRY: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "tetova_sapanca_lang";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("tr");

  // Load language from localStorage or default to browser language
  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (savedLang && (savedLang === "tr" || savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ar")) {
        setLanguageState("ar");
      } else if (browserLang.startsWith("en")) {
        setLanguageState("en");
      } else {
        setLanguageState("tr");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  // Update HTML lang and dir attributes dynamically for SEO & RTL
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  // Dynamic nested key translation resolver (e.g. t("hero.title"))
  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to Turkish if key is missing in target language
        let fallback: any = translations["tr"];
        for (const fk of keys) {
          if (fallback && typeof fallback === "object" && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return fallback !== undefined ? fallback : keyPath;
      }
    }

    return current !== undefined ? current : keyPath;
  };

  const isRtl = language === "ar";
  const dir = isRtl ? "rtl" : "ltr";

  // Dynamic currency converter for preview display
  const formatPrice = (priceTRY: number): string => {
    if (language === "ar") {
      const priceSAR = Math.round(priceTRY / 9.5); // Approx TRY to SAR rate
      return `${priceSAR.toLocaleString("ar-SA")} ر.س`;
    }
    if (language === "en") {
      const priceUSD = Math.round(priceTRY / 36); // Approx TRY to USD rate
      return `$${priceUSD.toLocaleString("en-US")}`;
    }
    return `₺${priceTRY.toLocaleString("tr-TR")}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir,
        isRtl,
        formatPrice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
