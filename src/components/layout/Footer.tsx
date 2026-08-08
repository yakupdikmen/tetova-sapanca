"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Heart,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { useLanguage } from "@/contexts/LanguageContext";

const InstagramIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#FDFBF7] dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-amber-900/10 dark:border-white/10 overflow-hidden transition-colors duration-300">
      {/* Background Decor Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 dark:bg-emerald-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-900/10 dark:border-white/10">
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4 ltr:text-left rtl:text-right">
            <a href="#" className="flex items-center gap-3 group">
              {/* Gold Logo for Light Mode Footer */}
              <Image
                src="/tetova_gold.svg"
                alt="Tetova Sapanca Logo"
                width={240}
                height={80}
                className="h-14 sm:h-16 w-auto object-contain block dark:hidden transition-all"
              />
              {/* White Logo for Dark Mode Footer */}
              <Image
                src="/tetova.svg"
                alt="Tetova Sapanca Logo"
                width={240}
                height={80}
                className="h-14 sm:h-16 w-auto object-contain hidden dark:block transition-all"
              />
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/tetovasapanca/"
                target="_blank"
                rel="noreferrer"
                title="Instagram @tetovasapanca"
                className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white border border-pink-500/30 text-pink-600 dark:text-pink-400 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558498265541"
                target="_blank"
                rel="noreferrer"
                title="Facebook Tetova Sapanca"
                className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 hover:bg-blue-600 hover:text-white border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              >
                <FacebookIcon />
              </a>
              <a
                href={getWhatsAppUrl("Merhaba, Tetova Sapanca web sitenizden ulaşıyorum. Bilgi ve rezervasyon talebinde bulunmak istiyorum.")}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Support"
                className="w-10 h-10 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3 ltr:text-left rtl:text-right">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#bungalows" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t("nav.bungalows")}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t("nav.guide")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {t("nav.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Bungalow Models Column */}
          <div className="flex flex-col gap-3 ltr:text-left rtl:text-right">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {t("footer.bungalowsTitle")}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>{t("bungalows.categories.platin")}</li>
              <li>{t("bungalows.categories.gold")}</li>
              <li>{t("bungalows.categories.silver")}</li>
              <li>{t("bungalows.categories.bronz")}</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3 ltr:text-left rtl:text-right">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {t("footer.contactTitle")}
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/Tetova+Sapanca+Bungalov/@40.6883377,30.1949589,17z/data=!3m1!4b1!4m6!3m5!1s0x14cca742addd099d:0xa2c6bb62c910ee12!8m2!3d40.6883377!4d30.1975338!16s%2Fg%2F11w3mdlzpc?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {t("footer.address")}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a href="tel:+905337182524" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  +90 (533) 718 25 24
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a href="mailto:sapancatetova@gmail.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  sapancatetova@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Tetova Sapanca. {t("footer.rights")}</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Sapanca lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
