"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  Star,
  Trees,
  Compass,
  Utensils,
  ShoppingBag,
  Sparkles,
  ExternalLink,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  DESTINATION_CATEGORIES,
  DESTINATIONS,
  RESORT_BASE_LOCATION,
} from "@/constants/destinations";
import { useLanguage } from "@/contexts/LanguageContext";

// Dynamically import Leaflet Map to bypass SSR window issues
const AdvancedMap = dynamic(
  () => import("@/components/ui/interactive-map"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 font-medium animate-pulse">
        Interactive Map...
      </div>
    ),
  }
);

export interface DestinationMapSectionProps {
  className?: string;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case "Trees":
      return Trees;
    case "Compass":
      return Compass;
    case "Utensils":
      return Utensils;
    case "ShoppingBag":
      return ShoppingBag;
    default:
      return Sparkles;
  }
};

export const DestinationMapSection: React.FC<DestinationMapSectionProps> = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeSpotId, setActiveSpotId] = useState<string>(DESTINATIONS[0].id);

  const filteredDestinations = DESTINATIONS.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const activeSpot =
    DESTINATIONS.find((d) => d.id === activeSpotId) || DESTINATIONS[0];

  const handleSelectSpot = (id: string) => {
    setActiveSpotId(id);
    const cardElem = document.getElementById(`spot-card-${id}`);
    if (cardElem) {
      cardElem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const getCategoryName = (catId: string) => {
    if (catId === "all") return t("destinations.categories.all");
    if (catId === "nature") return t("destinations.categories.nature");
    if (catId === "attraction") return t("destinations.categories.attraction");
    if (catId === "food") return t("destinations.categories.food");
    if (catId === "shopping") return t("destinations.categories.shopping");
    return catId;
  };

  return (
    <section className="relative bg-[#FAF8F5] dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 dark:bg-emerald-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t("destinations.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t("destinations.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t("destinations.subtitle")}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {DESTINATION_CATEGORIES.map((cat) => {
              const IconComponent = getCategoryIcon(cat.iconName);
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                      : "bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 shadow-sm"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{getCategoryName(cat.id)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Map Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scrollable List View (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar ltr:text-left rtl:text-right">
            {filteredDestinations.map((spot) => {
              const isSelected = activeSpotId === spot.id;

              return (
                <motion.div
                  key={spot.id}
                  id={`spot-card-${spot.id}`}
                  onClick={() => handleSelectSpot(spot.id)}
                  whileHover={{ scale: 1.01 }}
                  transition={SPRING_TRANSITION}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-md ${
                    isSelected
                      ? "bg-white dark:bg-slate-900/90 border-transparent ring-2 ring-emerald-500 dark:ring-emerald-400 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
                      : "bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 hover:shadow-xl"
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    {/* Spot Image */}
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900">
                      <img
                        src={spot.image}
                        alt={spot.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-1.5 ltr:left-1.5 rtl:right-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-400 flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5 fill-amber-400" />
                          {spot.rating}
                        </span>
                      </div>
                    </div>

                    {/* Spot Details */}
                    <div className="flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            {spot.categoryLabel}
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-emerald-500" />
                            {spot.durationMinutes} {t("destinations.minAway")}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                          {spot.name}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 font-normal">
                          {spot.description}
                        </p>
                      </div>

                      {/* Distance & Directions CTA */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-white/5">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-500" />
                          {spot.distance}
                        </span>

                        <a
                          href={spot.googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
                        >
                          <span>{t("destinations.getDirections")}</span>
                          <ExternalLink className="w-3 h-3 rtl:rotate-180" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Leaflet Interactive Map Container (lg:col-span-7) */}
          <div className="lg:col-span-7 relative w-full h-[600px]">
            <AdvancedMap
              destinations={filteredDestinations}
              activeSpotId={activeSpotId}
              onSelectSpot={handleSelectSpot}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationMapSection;
