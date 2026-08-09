"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Users, Maximize2, Star, MapPin, Sparkles } from "lucide-react";
import { Bungalow, MOCK_BUNGALOWS } from "@/constants/bungalows";
import VirtualTourButton from "@/components/ui/VirtualTourButton";
import { useLanguage } from "@/contexts/LanguageContext";

export interface BungalowCardProps {
  bungalow: Bungalow;
  isFeatured?: boolean;
  onSelect?: (bungalow: Bungalow) => void;
  onOpenVirtualTour?: () => void;
  className?: string;
}

export interface BungalowGridProps {
  bungalows?: Bungalow[];
  onSelectBungalow?: (bungalow: Bungalow) => void;
  onOpenVirtualTour?: () => void;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export const BungalowCard: React.FC<BungalowCardProps> = ({
  bungalow,
  isFeatured = false,
  onSelect,
  onOpenVirtualTour,
  className = "",
}) => {
  const { t, language } = useLanguage();

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(bungalow);
    }
  };

  // Localized Titles & Descriptions
  const getLocalizedTitle = () => {
    if (bungalow.id === "platin-villa") return t("bungalows.categories.platin");
    if (bungalow.id === "gold-bungalov") return t("bungalows.categories.gold");
    if (bungalow.id === "silver-bungalov") return t("bungalows.categories.silver");
    if (bungalow.id === "bronz-bungalov") return t("bungalows.categories.bronz");
    return bungalow.title;
  };

  const getLocalizedTagline = () => {
    if (language === "ar") {
      if (bungalow.id === "platin-villa") return "فيلا مالك فاخرة بمسابح دافئة على مدار الفصول وجاكوزي ومدفأة حطب";
      if (bungalow.id === "gold-bungalov") return "بنغل ذهبي بمسبح دافئ وإطلالة بانورامية وجاكوزي خاص";
      if (bungalow.id === "silver-bungalov") return "بنغل فضي مريح بجاكوزي خاص وشرفة في أحضان الطبيعة";
      if (bungalow.id === "bronz-bungalov") return "بنغل برونزي دافئ بحديقة خاصة وموقد نار ومواقف سيارات";
    }
    if (language === "en") {
      if (bungalow.id === "platin-villa") return "Tetova Sapanca's Most Exclusive VIP Mansion Villa with Heated Pool & Hot Tub";
      if (bungalow.id === "gold-bungalov") return "Gold Concept Bungalow with Heated Pool & Panoramic Nature Views";
      if (bungalow.id === "silver-bungalov") return "Silver Concept Bungalow with Private Hot Tub & Nature Terrace";
      if (bungalow.id === "bronz-bungalov") return "Cozy & Warm Nature Concept Bronz Bungalow with Private Garden & BBQ";
    }
    return bungalow.tagline;
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={SPRING_TRANSITION}
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-900/10 dark:border-white/10 bg-white/80 dark:bg-stone-900/60 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] cursor-pointer ${className}`}
    >
      {/* Shared Layout Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden" onClick={handleCardClick}>
        <motion.img
          layoutId={`bungalow-img-${bungalow.id}`}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          src={bungalow.image}
          alt={getLocalizedTitle()}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.7] dark:brightness-[0.6] group-hover:brightness-[0.8]"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20 pointer-events-none" />
      </div>

      {/* Top Bar Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {bungalow.featured && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-amber-500/25 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t("bungalows.featuredBadge")}</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full backdrop-blur-md bg-stone-900/70 border border-white/15 text-stone-200 text-xs font-medium shadow-md">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Kırkpınar, Sapanca</span>
          </span>
        </div>

        {/* Rating Badge & 360 Tour Button */}
        <div className="flex items-center gap-2">
          {onOpenVirtualTour && (
            <VirtualTourButton onClick={onOpenVirtualTour} variant="card" />
          )}

          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full backdrop-blur-md bg-stone-900/70 border border-white/15 text-amber-400 text-xs font-semibold shadow-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{bungalow.rating}</span>
            <span className="text-stone-400 text-[11px]">({bungalow.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body & Footer Overlay */}
      <div className="relative z-10 p-5 sm:p-6 md:p-8 mt-auto flex flex-col gap-4 ltr:text-left rtl:text-right">
        {/* Title & Tagline */}
        <div>
          <h3 className={`font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors ${isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
            {getLocalizedTitle()}
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-2 font-normal leading-relaxed">
            {getLocalizedTagline()}
          </p>
        </div>

        {/* Capacity Specs & Glassmorphism Amenity Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-white text-xs font-medium">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>{bungalow.capacity} {t("bungalows.guests")}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/15 text-white text-xs font-medium">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{bungalow.sqm} m²</span>
          </span>
          {bungalow.amenities.slice(0, isFeatured ? 4 : 2).map((amenity, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-full backdrop-blur-md bg-stone-900/80 border border-white/15 text-white text-xs font-medium shadow-sm"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Action Button Footer */}
        <div className="flex items-center justify-end pt-4 border-t border-white/10 mt-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 border border-amber-400/30 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] cursor-pointer"
          >
            <span>{t("bungalows.viewDetails")}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const BungalowGrid: React.FC<BungalowGridProps> = ({
  bungalows = MOCK_BUNGALOWS,
  onSelectBungalow,
  onOpenVirtualTour,
}) => {
  const { t } = useLanguage();

  const handleSelect = (bungalow: Bungalow) => {
    if (onSelectBungalow) {
      onSelectBungalow(bungalow);
    }
  };

  const featuredBungalow = bungalows.find((b) => b.featured) || bungalows[0];
  const secondaryBungalows = bungalows.filter((b) => b.id !== featuredBungalow.id);

  return (
    <section className="relative bg-amber-50/40 dark:bg-stone-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-stone-900 dark:text-white transition-colors duration-300">
      {/* Glow Orbs background decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-600/10 dark:bg-amber-900/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-600/10 dark:bg-orange-900/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t("bungalows.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
            {t("bungalows.title")} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 dark:from-amber-400 dark:via-orange-300 dark:to-rose-400">
              {t("bungalows.titleGradient")}
            </span>
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t("bungalows.subtitle")}
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch"
        >
          {/* Large Featured Card */}
          {featuredBungalow && (
            <BungalowCard
              bungalow={featuredBungalow}
              isFeatured={true}
              onSelect={handleSelect}
              onOpenVirtualTour={onOpenVirtualTour}
              className="lg:col-span-7 min-h-[480px] sm:min-h-[560px]"
            />
          )}

          {/* Stacked Right Column Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 justify-between">
            {secondaryBungalows.slice(0, 2).map((bungalow) => (
              <BungalowCard
                key={bungalow.id}
                bungalow={bungalow}
                isFeatured={false}
                onSelect={handleSelect}
                onOpenVirtualTour={onOpenVirtualTour}
                className="flex-1 min-h-[260px]"
              />
            ))}
          </div>

          {/* Row 2: Remaining Bungalow Cards in Bento Grid */}
          {secondaryBungalows.slice(2).map((bungalow) => (
            <BungalowCard
              key={bungalow.id}
              bungalow={bungalow}
              isFeatured={false}
              onSelect={handleSelect}
              onOpenVirtualTour={onOpenVirtualTour}
              className="lg:col-span-12 min-h-[320px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BungalowGrid;
