"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Phone, Menu, X, Home, Trees, Calculator, HelpCircle, BookOpen } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace("#", "");
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 text-slate-900 dark:text-slate-100 shadow-xl py-3.5"
          : "bg-gradient-to-b from-slate-950/80 to-transparent text-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, "#")} className="flex items-center gap-3 group py-0.5">
          <div className="relative flex items-center">
            {/* White Logo for Dark Mode or Transparent Dark Hero Header */}
            <Image
              src="/tetova.svg"
              alt="Tetova Sapanca Logo"
              width={240}
              height={80}
              priority
              className={`h-13 sm:h-15 md:h-16 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "hidden dark:block" : "block"
              }`}
            />
            {/* Gold Logo for Light Mode Scrolled Header */}
            <Image
              src="/tetova_gold.svg"
              alt="Tetova Sapanca Logo"
              width={240}
              height={80}
              priority
              className={`h-13 sm:h-15 md:h-16 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "block dark:hidden" : "hidden"
              }`}
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center gap-7 text-sm font-medium ${isScrolled ? "text-slate-800 dark:text-slate-200" : "text-white/90"}`}>
          <a href="#" onClick={(e) => handleNavClick(e, "#")} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer">
            <Home className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.home")}</span>
          </a>
          <a href="#bungalows" onClick={(e) => handleNavClick(e, "#bungalows")} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer">
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.bungalows")}</span>
          </a>
          <a href="#blog" onClick={(e) => handleNavClick(e, "#blog")} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.guide")}</span>
          </a>
          <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.faq")}</span>
          </a>
        </nav>

        {/* Right CTA Button, Language Switcher & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />

          <a
            href="tel:+905337182524"
            aria-label={t("nav.callUs")}
            title={t("nav.callUs")}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border backdrop-blur-md transition-all duration-300 shadow-md ${
              isScrolled
                ? "bg-slate-900/10 dark:bg-white/10 border-black/5 dark:border-white/15 text-slate-900 dark:text-white"
                : "bg-white/15 border-white/20 text-white hover:bg-white/25"
            }`}
          >
            <Phone className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Mobile Menu Toggle, Language Switcher & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center cursor-pointer ${
              isScrolled
                ? "bg-white/70 dark:bg-slate-900 border-black/5 dark:border-white/10 text-slate-900 dark:text-slate-100"
                : "bg-slate-900/60 border-white/20 text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 mt-3">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.home")}</span>
          </a>
          <a
            href="#bungalows"
            onClick={(e) => handleNavClick(e, "#bungalows")}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.bungalows")}</span>
          </a>
          <a
            href="#blog"
            onClick={(e) => handleNavClick(e, "#blog")}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.guide")}</span>
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, "#faq")}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>{t("nav.faq")}</span>
          </a>
          <a
            href="tel:+905337182524"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            <span>{t("nav.callUs")}</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
