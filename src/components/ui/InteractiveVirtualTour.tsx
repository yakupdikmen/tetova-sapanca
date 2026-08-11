"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Maximize2,
  Minimize2,
  Compass,
  ArrowRight,
  MapPin,
  MoveHorizontal,
  Home,
  Waves,
  Bed,
} from "lucide-react";
import { Bungalow, MOCK_BUNGALOWS } from "@/constants/bungalows";
import { openWhatsApp } from "@/utils/whatsapp";
import { useLanguage } from "@/contexts/LanguageContext";

export interface InteractiveVirtualTourProps {
  isOpen: boolean;
  onClose: () => void;
  tourUrl?: string;
  bungalow?: Bungalow | null;
  onBookNow?: (bungalow?: Bungalow | null) => void;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const InteractiveVirtualTour: React.FC<InteractiveVirtualTourProps> = ({
  isOpen,
  onClose,
  tourUrl = "https://app.cloudpano.com/tours/TOHswRzYT",
  bungalow = MOCK_BUNGALOWS[0],
  onBookNow,
}) => {
  const { t, language } = useLanguage();
  const [activeScene, setActiveScene] = useState<string>("veranda");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showDragPrompt, setShowDragPrompt] = useState<boolean>(true);

  const displayBungalow = bungalow || MOCK_BUNGALOWS[0];

  const getBungalowTitle = (b: Bungalow) => {
    if (b.id === "platin-villa") return t("bungalows.categories.platin");
    if (b.id === "gold-bungalov") return t("bungalows.categories.gold");
    if (b.id === "silver-bungalov") return t("bungalows.categories.silver");
    if (b.id === "bronz-bungalov") return t("bungalows.categories.bronz");
    return b.title;
  };

  const scenePresets = [
    { id: "veranda", label: t("tour.scenes.veranda"), icon: Home },
    { id: "havuz", label: t("tour.scenes.pool"), icon: Waves },
    { id: "yatak-odasi", label: t("tour.scenes.bedroom"), icon: Bed },
  ];

  // Lock body scroll & listen for Escape key press with reliable cleanup
  useEffect(() => {
    let promptTimer: NodeJS.Timeout;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowDragPrompt(true);

      promptTimer = setTimeout(() => {
        setShowDragPrompt(false);
      }, 3500);
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      if (promptTimer) clearTimeout(promptTimer);
    };
  }, [isOpen, onClose, isFullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-stone-950 flex items-center justify-center overflow-hidden selection:bg-amber-500 selection:text-white"
        >
          {/* Layer 1: Base Layer Fullscreen CloudPano iFrame */}
          <div className="relative w-full h-full">
            <iframe
              src={tourUrl}
              title="360° Virtual Tour"
              className="w-full h-full border-none bg-stone-950"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
              allowFullScreen
            />
          </div>

          {/* Layer 2: Glassmorphism HUD Overlay (pointer-events-none parent) */}
          <div className="absolute inset-0 z-10 pointer-events-none p-4 sm:p-6 md:p-8 flex flex-col justify-between ltr:text-left rtl:text-right">
            {/* Top HUD Bar */}
            <div className="flex items-start justify-between gap-4">
              {/* Top-Left: Live Status Badge & Quick Scene Selector */}
              <div className="flex flex-col gap-3 pointer-events-auto">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-xl bg-stone-900/80 border border-white/15 text-white shadow-2xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                  </span>
                  <span className="text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                    <span>{t("tour.liveBadge")}</span>
                  </span>
                </div>

                {/* Scene Selector Pills */}
                <div className="hidden sm:flex flex-wrap items-center gap-2 p-1.5 rounded-2xl backdrop-blur-xl bg-stone-900/80 border border-white/10 shadow-xl">
                  {scenePresets.map((scene) => {
                    const IconComp = scene.icon;
                    const isActive = activeScene === scene.id;
                    return (
                      <motion.button
                        key={scene.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={SPRING_TRANSITION}
                        type="button"
                        onClick={() => setActiveScene(scene.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-amber-500 text-stone-950 shadow-md"
                            : "text-stone-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{scene.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Top-Right: Fullscreen Toggle & Exit Controls */}
              <div className="flex items-center gap-2.5 pointer-events-auto">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={SPRING_TRANSITION}
                  type="button"
                  onClick={toggleFullscreen}
                  title={t("tour.fullscreen")}
                  className="w-11 h-11 rounded-2xl backdrop-blur-xl bg-stone-900/80 border border-white/15 text-stone-300 hover:text-white flex items-center justify-center shadow-xl cursor-pointer"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={SPRING_TRANSITION}
                  type="button"
                  onClick={onClose}
                  title={t("tour.close")}
                  className="w-11 h-11 rounded-2xl backdrop-blur-xl bg-stone-900/80 border border-white/15 text-stone-300 hover:text-white flex items-center justify-center shadow-xl cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Micro-Interaction: Initial Drag Gesture Prompt */}
            <AnimatePresence>
              {showDragPrompt && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={SPRING_TRANSITION}
                  className="self-center pointer-events-none mb-auto mt-auto"
                >
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-2xl bg-stone-900/85 border border-amber-500/30 text-white shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-pulse">
                    <MoveHorizontal className="w-5 h-5 text-amber-400" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      {t("tour.dragPrompt")}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom HUD Bar */}
            <div className="flex items-end justify-between w-full">
              {/* Bottom-Left: Location Info */}
              <div className="hidden md:flex flex-col gap-1 pointer-events-auto">
                <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Kırkpınar, Sapanca
                </span>
                <span className="text-lg font-bold text-white">
                  {getBungalowTitle(displayBungalow)}
                </span>
              </div>

              {/* Bottom-Right Sticky Card: Reservation Widget */}
              <div className="pointer-events-auto ltr:ml-auto rtl:mr-auto">
                <div className="bg-stone-900/80 backdrop-blur-xl border border-amber-500/20 p-4 sm:p-5 rounded-2xl max-w-sm w-full shadow-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={displayBungalow.image}
                      alt={getBungalowTitle(displayBungalow)}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {getBungalowTitle(displayBungalow)}
                      </h4>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_TRANSITION}
                    type="button"
                    onClick={() => {
                      const bungalowName = getBungalowTitle(displayBungalow);

                      let waText = "";
                      if (language === "ar") {
                        waText = `مرحباً، أتواصل معكم من صفحة الجولة الافتراضية 360° لـ تيتوفا صبانجة.\n\n🏡 *المنزل المعاين:* ${bungalowName}\n\nأود الحصول على معلومات التوفر والحجز لهذا البنغل.`;
                      } else if (language === "en") {
                        waText = `Hello, I'm reaching out from the 360° Virtual Tour page of Tetova Sapanca.\n\n🏡 *Inspected Home:* ${bungalowName}\n\nI would like to get availability and booking information for this bungalow.`;
                      } else {
                        waText = `Merhaba, Tetova Sapanca 360° Sanal Tur sayfanızdan ulaşıyorum.\n\n🏡 *İncelenen Ev:* ${bungalowName}\n\nBu bungalov için müsaitlik durumu bilgisi almak istiyorum.`;
                      }

                      openWhatsApp(waText);
                      if (onBookNow) onBookNow(displayBungalow);
                      onClose();
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t("tour.bookWhatsapp")}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveVirtualTour;
