"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Flame,
  Waves,
  Trees,
  Wifi,
  Coffee,
  Sparkles,
  ShieldCheck,
  Tv,
  Car,
  UtensilsCrossed,
  Wind,
  LucideIcon,
} from "lucide-react";
import { LUXURY_AMENITIES, LuxuryAmenity } from "@/constants/amenities";
import { useLanguage } from "@/contexts/LanguageContext";

export interface AmenityCardProps {
  amenity: LuxuryAmenity;
  index: number;
}

export interface AmenitiesSectionProps {
  amenities?: LuxuryAmenity[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  Flame,
  Waves,
  Trees,
  Wifi,
  Coffee,
  Sparkles,
  ShieldCheck,
  Tv,
  Car,
  UtensilsCrossed,
  Wind,
};

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export const AmenityCard: React.FC<{ title: string; desc: string; iconName: string; index: number }> = ({
  title,
  desc,
  iconName,
}) => {
  const IconComponent = ICON_MAP[iconName] || Sparkles;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={SPRING_TRANSITION}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-amber-900/10 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] ltr:text-left rtl:text-right"
    >
      <div>
        {/* Top Icon & Tag Bar */}
        <div className="flex items-center justify-between mb-6">
          {/* Animated Icon Box */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 6 }}
            transition={SPRING_TRANSITION}
            className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md"
          >
            <IconComponent className="w-7 h-7" />
          </motion.div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed font-normal">
          {desc}
        </p>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="w-12 h-1 rounded-full bg-emerald-500/20 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500 mt-6" />
    </motion.div>
  );
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = () => {
  const { t } = useLanguage();

  const amenityList: { title: string; desc: string }[] = (t("amenities.list") as any) || [
    {
      title: "4 Mevsim Isıtmalı Havuzlar",
      desc: "Kışın en soğuk günlerinde bile 38°C sıcaklıkta kesintisiz açık hava havuz keyfi.",
    },
    {
      title: "%100 Mahrem Özel Bahçeler",
      desc: "Tamamen korunaklı, dışarıdan görünmeyen yüksek çitlerle çevrili özel çim bahçeler.",
    },
    {
      title: "VIP Jakuzi & Odun Şöminesi",
      desc: "Tüm bungalovlarımızda hidro-masajlı özel jakuzi ve meşe odunu hazırlıklı şömine.",
    },
    {
      title: "7/24 Kesintisiz Resepsiyon",
      desc: "Konaklamanız boyunca tüm istekleriniz için anında WhatsApp ve resepsiyon desteği.",
    },
  ];

  const icons = ["Waves", "Trees", "Sparkles", "ShieldCheck"];

  return (
    <section className="relative bg-[#FDFBF7] dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-950/20 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-950/20 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t("amenities.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t("amenities.title")} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
              {t("amenities.titleGradient")}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t("amenities.subtitle")}
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {amenityList.map((item, index) => (
            <AmenityCard
              key={index}
              title={item.title}
              desc={item.desc}
              iconName={icons[index % icons.length]}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
