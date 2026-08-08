"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Phone, Menu, X, Home, Trees, Calculator, HelpCircle, BookOpen } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all">
            <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-extrabold tracking-tight flex items-center gap-1 ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
              SAPANCA <span className="text-emerald-400 font-black">VISTA</span>
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-semibold -mt-1 ${isScrolled ? "text-slate-500 dark:text-slate-400" : "text-slate-300"}`}>
              Luxury Bungalows
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center gap-7 text-sm font-medium ${isScrolled ? "text-slate-800 dark:text-slate-200" : "text-white/90"}`}>
          <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4 text-emerald-400" />
            <span>Ana Sayfa</span>
          </a>
          <a href="#bungalows" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>Bungalovlar</span>
          </a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Fiyat Hesapla</span>
          </a>
          <a href="#blog" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Doğa & Gezi Rehberi</span>
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>S.S.S</span>
          </a>
        </nav>

        {/* Right CTA Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="tel:+905300000000"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border font-medium text-xs sm:text-sm backdrop-blur-md transition-all duration-300 shadow-md ${
              isScrolled
                ? "bg-slate-900/10 dark:bg-white/10 border-black/5 dark:border-white/15 text-slate-900 dark:text-white"
                : "bg-white/15 border-white/20 text-white hover:bg-white/25"
            }`}
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+90 (530) 000 00 00</span>
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
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
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-emerald-400" />
            <span>Ana Sayfa</span>
          </a>
          <a
            href="#bungalows"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>Bungalov Koleksiyonu</span>
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Fiyat Hesapla</span>
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Doğa & Gezi Rehberi</span>
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-white py-2 border-b border-white/5 flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Sıkça Sorulan Sorular</span>
          </a>
          <a
            href="tel:+905300000000"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            <span>Hemen Ara</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
