"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { translations, Language } from "@/i18n/translations";
import { localizedPath, stripLocalePrefix } from "@/utils/locale";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => string;
  dir: "ltr" | "rtl";
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; locale: Language }> = ({
  children,
  locale,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const language = locale;

  // The URL is the single source of truth for the active language: switching
  // navigates to the /en, /ar (or unprefixed for tr) equivalent of the
  // current path, so the choice is crawlable and shareable, not just local.
  const setLanguage = (lang: Language) => {
    const pathWithoutLocale = stripLocalePrefix(pathname);
    router.push(localizedPath(lang, pathWithoutLocale));
  };

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

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir,
        isRtl,
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
