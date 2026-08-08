"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Star,
  Users,
  Maximize2,
  Bed,
  Bath,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Bungalow } from "@/constants/bungalows";
import { openWhatsApp } from "@/utils/whatsapp";

export interface BungalowLightboxProps {
  selectedBungalow: Bungalow | null;
  onClose: () => void;
  onBookNow?: (bungalow: Bungalow) => void;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export const BungalowLightbox: React.FC<BungalowLightboxProps> = ({
  selectedBungalow,
  onClose,
  onBookNow,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Set active image when bungalow opens or changes
  useEffect(() => {
    if (selectedBungalow) {
      setActiveImage(selectedBungalow.image);
    }
  }, [selectedBungalow]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!selectedBungalow) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBungalow, onClose]);

  if (!selectedBungalow) return null;

  const galleryImages = selectedBungalow.gallery?.length
    ? selectedBungalow.gallery
    : [selectedBungalow.image];

  const currentDisplayImage = activeImage || selectedBungalow.image;

  return (
    <AnimatePresence>
      {selectedBungalow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
          onClick={onClose}
        >
          {/* Main Lightbox Card Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={SPRING_TRANSITION}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900/90 border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row my-auto"
          >
            {/* Top-Right Sleek Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={SPRING_TRANSITION}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center backdrop-blur-md shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Left/Top: Image & Gallery Section (60% width) */}
            <div className="lg:w-[60%] flex flex-col p-4 sm:p-6 bg-slate-950/50 border-b lg:border-b-0 lg:border-r border-white/10">
              {/* Main Image with Shared layoutId */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 flex items-center justify-center">
                <motion.img
                  layoutId={`bungalow-img-${selectedBungalow.id}`}
                  transition={SPRING_TRANSITION}
                  src={currentDisplayImage}
                  alt={selectedBungalow.title}
                  className="w-full h-full object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-slate-950/70 border border-white/15 text-amber-400 text-xs font-semibold shadow-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{selectedBungalow.rating}</span>
                  <span className="text-slate-400 text-[11px]">
                    ({selectedBungalow.reviewCount} değerlendirme)
                  </span>
                </div>
              </div>

              {/* Mini Gallery Slider Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                  {galleryImages.map((imgUrl, index) => {
                    const isActive = imgUrl === currentDisplayImage;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                          isActive
                            ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105"
                            : "border-white/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${selectedBungalow.title} galeri ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right/Bottom: Bungalow Details & CTA Section (40% width) */}
            <div className="lg:w-[40%] p-6 sm:p-8 flex flex-col justify-between text-white">
              <div className="flex flex-col gap-5">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {selectedBungalow.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-emerald-300" />
                        VIP SEÇENEK
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-slate-300 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {selectedBungalow.location}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {selectedBungalow.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    {selectedBungalow.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-950/60 border border-white/5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>{selectedBungalow.capacity} Misafir</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                    <span>{selectedBungalow.sqm} m² Alan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-emerald-400" />
                    <span>{selectedBungalow.bedrooms} Yatak Odası</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-emerald-400" />
                    <span>{selectedBungalow.bathrooms} Banyo</span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Öne Çıkan Özellikler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBungalow.amenities.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/10 text-xs text-slate-200"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    Gecelik Konaklama
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">
                      ₺{selectedBungalow.price.toLocaleString("tr-TR")}
                    </span>
                    <span className="text-xs text-slate-400">/ gece</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRING_TRANSITION}
                  onClick={() => {
                    openWhatsApp(`Merhaba, Tetova Sapanca ${selectedBungalow.title} detaylarını inceledim.\n\n🏡 *Seçilen Ev:* ${selectedBungalow.title}\n💰 *Gecelik Fiyat:* ₺${selectedBungalow.price.toLocaleString("tr-TR")}\n👥 *Kapasite:* ${selectedBungalow.capacity} Misafir\n\nRezervasyon ve müsaitlik teyidi almak istiyorum.`);
                    if (onBookNow) onBookNow(selectedBungalow);
                    onClose();
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>WhatsApp ile Rezerve Et</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BungalowLightbox;
