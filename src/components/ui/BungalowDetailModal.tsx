"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Star,
  Users,
  Maximize2,
  Check,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Bungalow } from "@/constants/bungalows";
import SocialCards, { SocialCardItem } from "@/components/ui/card-fan-carousel";
import { openWhatsApp } from "@/utils/whatsapp";
import { useLanguage } from "@/contexts/LanguageContext";

export interface BungalowDetailModalProps {
  selectedBungalow: Bungalow | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: (bungalow: Bungalow) => void;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const BungalowDetailModal: React.FC<BungalowDetailModalProps> = ({
  selectedBungalow,
  isOpen,
  onClose,
  onBookNow,
}) => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Reset active index when bungalow changes or opens
  useEffect(() => {
    if (selectedBungalow) {
      setActiveIndex(0);
    }
  }, [selectedBungalow]);

  // Lock body scroll & listen for Escape key press with reliable cleanup
  useEffect(() => {
    if (isOpen && selectedBungalow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedBungalow, onClose]);

  if (!isOpen || !selectedBungalow) return null;

  const getLocalizedTitle = () => {
    if (selectedBungalow.id === "platin-villa") return t("bungalows.categories.platin");
    if (selectedBungalow.id === "gold-bungalov") return t("bungalows.categories.gold");
    if (selectedBungalow.id === "silver-bungalov") return t("bungalows.categories.silver");
    if (selectedBungalow.id === "bronz-bungalov") return t("bungalows.categories.bronz");
    return selectedBungalow.title;
  };

  const getLocalizedTagline = () => {
    if (language === "ar") {
      if (selectedBungalow.id === "platin-villa") return "فيلا مالك فاخرة بمسابح دافئة على مدار الفصول وجاكوزي ومدفأة حطب";
      if (selectedBungalow.id === "gold-bungalov") return "بنغل ذهبي بمسبح دافئ وإطلالة بانورامية وجاكوزي خاص";
      if (selectedBungalow.id === "silver-bungalov") return "بنغل فضي مريح بجاكوزي خاص وشرفة في أحضان الطبيعة";
      if (selectedBungalow.id === "bronz-bungalov") return "بنغل برونزي دافئ بحديقة خاصة وموقد نار ومواقف سيارات";
    }
    if (language === "en") {
      if (selectedBungalow.id === "platin-villa") return "Tetova Sapanca's Most Exclusive VIP Mansion Villa with Heated Pool & Hot Tub";
      if (selectedBungalow.id === "gold-bungalov") return "Gold Concept Bungalow with Heated Pool & Panoramic Nature Views";
      if (selectedBungalow.id === "silver-bungalov") return "Silver Concept Bungalow with Private Hot Tub & Nature Terrace";
      if (selectedBungalow.id === "bronz-bungalov") return "Cozy & Warm Nature Concept Bronz Bungalow with Private Garden & BBQ";
    }
    return selectedBungalow.tagline;
  };

  const galleryImages = selectedBungalow.gallery?.length
    ? selectedBungalow.gallery
    : [selectedBungalow.image];

  const fanCards: SocialCardItem[] = galleryImages.map((imgUrl, idx) => ({
    id: `detail-fan-${idx}`,
    title: `${getLocalizedTitle()} - ${idx + 1}`,
    image: imgUrl,
  }));

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const handleWhatsAppBooking = () => {
    const bTitle = getLocalizedTitle();

    let waText = "";
    if (language === "ar") {
      waText = `مرحباً، أود الحصول على معلومات وحجز ${bTitle} عبر تيتوفا صبانجة.\n\n🏡 *نوع البنغل:* ${bTitle}\n👥 *السعة:* ${selectedBungalow.capacity} ضيوف\n\nهل يمكنني معرفة التوفر والتواريخ المتاحة؟`;
    } else if (language === "en") {
      waText = `Hello, I would like to get information and book ${bTitle} at Tetova Sapanca.\n\n🏡 *Bungalow Type:* ${bTitle}\n👥 *Capacity:* ${selectedBungalow.capacity} Guests\n\nCould you please let me know availability and suitable dates?`;
    } else {
      waText = `Merhaba, Tetova Sapanca ${bTitle} hakkında bilgi alıp rezervasyon yaptırmak istiyorum.\n\n🏡 *Bungalov Tipi:* ${bTitle}\n👥 *Kapasite:* ${selectedBungalow.capacity} Misafir\n\nMüsaitlik durumunu ve uygun tarihleri öğrenebilir miyim?`;
    }

    openWhatsApp(waText);
    if (onBookNow) onBookNow(selectedBungalow);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && selectedBungalow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          {/* Floating Dark Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={SPRING_TRANSITION}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900/90 border border-white/10 rounded-3xl w-full max-w-6xl p-5 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl my-auto ltr:text-left rtl:text-right"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-white/10">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedBungalow.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t("bungalows.featuredBadge")}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-slate-300 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    Kırkpınar, Sapanca
                  </span>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/70 border border-white/10 text-amber-400 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{selectedBungalow.rating}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  {getLocalizedTitle()}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  {getLocalizedTagline()}
                </p>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={SPRING_TRANSITION}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-950/80 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center backdrop-blur-md shadow-lg cursor-pointer flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Center Section: Embedded Card Fan Carousel with Synced State */}
            <div className="py-2 sm:py-4">
              <SocialCards
                cards={fanCards}
                activeIndex={activeIndex}
                onIndexChange={(idx) => setActiveIndex(idx)}
                className="min-h-[340px] sm:min-h-[400px]"
              />
            </div>

            {/* Bottom Thumbnail Navigation Bar, Chevrons & Pagination */}
            <div className="flex flex-col items-center gap-3 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-4 w-full justify-center">
                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-slate-950/80 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                >
                  <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                </button>

                {/* Horizontal Scrollable Thumbnail Strip */}
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto py-2 px-2 max-w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {galleryImages.map((imgUrl, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-14 sm:w-18 h-20 sm:h-24 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                          isActive
                            ? "border-2 border-emerald-400 shadow-lg shadow-emerald-500/30 scale-105 opacity-100"
                            : "border border-white/10 opacity-40 hover:opacity-80 scale-95"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${getLocalizedTitle()} photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-slate-950/80 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                >
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 pt-1">
                {galleryImages.map((_, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-6 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Bottom Bar: Booking Action */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Specs & Amenities Tags */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-white text-xs font-medium">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedBungalow.capacity} {t("bungalows.guests")}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-white text-xs font-medium">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedBungalow.sqm} m²</span>
                  </span>
                  {selectedBungalow.amenities.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glowing CTA Button */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={SPRING_TRANSITION}
                  onClick={handleWhatsAppBooking}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t("bungalows.modal.instantBook")}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BungalowDetailModal;
