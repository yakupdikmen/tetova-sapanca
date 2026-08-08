"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, Users, Sparkles, Search, Home } from "lucide-react";
import { BUNGALOW_CATEGORIES, SearchFilterState } from "@/constants/bungalows";
import VirtualTourButton from "@/components/ui/VirtualTourButton";
import LiveWeatherBanner from "@/components/ui/LiveWeatherBanner";

export interface HeroSectionProps {
  onSearch?: (filters: SearchFilterState) => void;
  onOpenVirtualTour?: () => void;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...SPRING_TRANSITION,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onOpenVirtualTour,
}) => {
  // Get tomorrow and next day default dates formatted YYYY-MM-DD
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 1))
    .toISOString()
    .split("T")[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 2))
    .toISOString()
    .split("T")[0];

  const [searchFilters, setSearchFilters] = useState<SearchFilterState>({
    checkIn: defaultCheckIn,
    checkOut: defaultCheckOut,
    guests: 2,
    categoryId: "all",
  });

  const handleInputChange = (field: keyof SearchFilterState, value: string | number) => {
    setSearchFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchFilters);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image & Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Sapanca Lüks Bungalov Manzarası"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.6] contrast-105"
        />
        {/* Full-bleed Smooth Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-[#FAF8F5] dark:to-slate-950 transition-colors duration-300" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Top Badges Area */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Sapanca'nın En Seçkin Lüks Bungalovları</span>
            </div>

            {onOpenVirtualTour && (
              <VirtualTourButton onClick={onOpenVirtualTour} variant="hero" />
            )}
          </motion.div>

          {/* Main Headline (Always High-Contrast White) */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.15] max-w-4xl drop-shadow-md"
          >
            Doğanın Kalbinde, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Unutulmaz Bir Lüks Tatil
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-slate-200 font-normal text-base sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm mt-2 mb-8 leading-relaxed"
          >
            Özel ısıtmalı havuzlu, jakuzili ve panoramik göl manzaralı VIP bungalovlarda kendinize ve sevdiklerinize hak ettiğiniz konforu sunun.
          </motion.p>

          {/* Smart Live Weather & Experience Banner */}
          <motion.div variants={itemVariants} className="w-full mb-8">
            <LiveWeatherBanner />
          </motion.div>

          {/* Floating Dark Frosted Glass Search Widget */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-5xl bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-3xl p-4 md:p-6 shadow-2xl text-left"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
              {/* Bungalow Category */}
              <div className="lg:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Home className="w-4 h-4 text-emerald-400" />
                  <span>Konaklama Türü</span>
                </label>
                <div className="relative">
                  <select
                    value={searchFilters.categoryId}
                    onChange={(e) => handleInputChange("categoryId", e.target.value)}
                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none cursor-pointer"
                  >
                    {BUNGALOW_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id} className="bg-slate-900 text-white">
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Check-in Date */}
              <div className="lg:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Giriş Tarihi</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={searchFilters.checkIn}
                    onChange={(e) => handleInputChange("checkIn", e.target.value)}
                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Check-out Date */}
              <div className="lg:col-span-3 flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Çıkış Tarihi</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={searchFilters.checkOut}
                    onChange={(e) => handleInputChange("checkOut", e.target.value)}
                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Guests Count */}
              <div className="lg:col-span-3 flex flex-col gap-2 sm:col-span-2 lg:col-span-3">
                <label className="text-xs font-medium text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Misafir Sayısı</span>
                </label>
                <div className="relative">
                  <select
                    value={searchFilters.guests}
                    onChange={(e) => handleInputChange("guests", parseInt(e.target.value, 10))}
                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 appearance-none cursor-pointer"
                  >
                    <option value={1} className="bg-slate-900 text-white">1 Misafir</option>
                    <option value={2} className="bg-slate-900 text-white">2 Misafir (Çift)</option>
                    <option value={3} className="bg-slate-900 text-white">3 Misafir</option>
                    <option value={4} className="bg-slate-900 text-white">4 Misafir (Aile)</option>
                    <option value={5} className="bg-slate-900 text-white">5 Misafir</option>
                    <option value={6} className="bg-slate-900 text-white">6+ Misafir (Grup)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Glowing Emerald Search CTA Button */}
              <div className="lg:col-span-12 mt-2 pt-2 border-t border-white/10 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                >
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>Bungalov Ara</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
