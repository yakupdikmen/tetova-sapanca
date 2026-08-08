"use client";

import React from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe,
  Heart,
  MessageCircle,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#FDFBF7] dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-amber-900/10 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Decor Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 dark:bg-emerald-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-900/10 dark:border-white/10">
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all">
                <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                  SAPANCA <span className="text-emerald-600 dark:text-emerald-400 font-black">VISTA</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-500 dark:text-slate-400 font-semibold -mt-1">
                  Luxury Bungalows
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Sapanca Gölü ve Kırkpınar ormanlarının kucağında, 4 mevsim sıcak ısıtmalı özel havuzları ve jakuzileri ile ayrıcalıklı konaklama deneyimi.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900/10 dark:bg-white/10 hover:bg-emerald-500 hover:text-slate-950 border border-amber-900/10 dark:border-white/15 text-slate-700 dark:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900/10 dark:bg-white/10 hover:bg-emerald-500 hover:text-slate-950 border border-amber-900/10 dark:border-white/15 text-slate-700 dark:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/905300000000"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Destek"
                className="w-10 h-10 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Hızlı Erişim
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#bungalows" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Bungalov Koleksiyonu
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Fiyat Simülatörü
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Doğa & Gezi Rehberi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
            </ul>
          </div>

          {/* Luxury Features Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Ayrıcalıklar
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>34°C Isıtmalı Özel Havuzlar</li>
              <li>Açık Hava Jakuzisi</li>
              <li>Şömine & Barbekü Alanı</li>
              <li>%100 Korumalı Bahçe</li>
              <li>Serpme Köy Kahvaltısı İkramı</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              İletişim & Konum
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Kırkpınar Soğuksu Mah. Sapanca / Sakarya</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a href="tel:+905300000000" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  +90 (530) 000 00 00
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@sapancavista.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  info@sapancavista.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Sapanca Vista Luxury Bungalows. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            <span>Sapanca'da sevgi ile tasarlandı</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
