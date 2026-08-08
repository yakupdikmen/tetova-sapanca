"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Maximize2,
  Minimize2,
  Compass,
  ArrowRight,
  Sparkles,
  MapPin,
  MoveHorizontal,
  Home,
  Waves,
  Bed,
} from "lucide-react";
import { Bungalow, MOCK_BUNGALOWS } from "@/constants/bungalows";

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

const SCENE_PRESETS = [
  { id: "veranda", label: "Veranda & Bahçe", icon: Home },
  { id: "havuz", label: "Isıtmalı Havuz", icon: Waves },
  { id: "jakuzi", label: "Jakuzi Suite", icon: Sparkles },
  { id: "yatak-odasi", label: "Yatak Odası & Loft", icon: Bed },
];

export const InteractiveVirtualTour: React.FC<InteractiveVirtualTourProps> = ({
  isOpen,
  onClose,
  tourUrl = "https://app.cloudpano.com/tours/TOHswRzYT",
  bungalow = MOCK_BUNGALOWS[0],
  onBookNow,
}) => {
  const [activeScene, setActiveScene] = useState<string>("veranda");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showDragPrompt, setShowDragPrompt] = useState<boolean>(true);

  const displayBungalow = bungalow || MOCK_BUNGALOWS[0];

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
          className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center overflow-hidden selection:bg-emerald-500 selection:text-white"
        >
          {/* Layer 1: Base Layer Fullscreen CloudPano iFrame */}
          <div className="relative w-full h-full">
            <iframe
              src={tourUrl}
              title="360° Interaktif Sanal Tur"
              className="w-full h-full border-none bg-slate-950"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
              allowFullScreen
            />
          </div>

          {/* Layer 2: Glassmorphism HUD Overlay (pointer-events-none parent) */}
          <div className="absolute inset-0 z-10 pointer-events-none p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            {/* Top HUD Bar */}
            <div className="flex items-start justify-between gap-4">
              {/* Top-Left: Live Status Badge & Quick Scene Selector */}
              <div className="flex flex-col gap-3 pointer-events-auto">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-xl bg-slate-900/80 border border-white/15 text-white shadow-2xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
                    <span>360° CANLI TUR REHBERİ</span>
                  </span>
                </div>

                {/* Scene Selector Pills */}
                <div className="hidden sm:flex flex-wrap items-center gap-2 p-1.5 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10 shadow-xl">
                  {SCENE_PRESETS.map((scene) => {
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
                            ? "bg-emerald-500 text-slate-950 shadow-md"
                            : "text-slate-300 hover:text-white hover:bg-white/10"
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
                  title="Tam Ekran Modu"
                  className="w-11 h-11 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center shadow-xl cursor-pointer"
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
                  title="Kapat"
                  className="w-11 h-11 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center shadow-xl cursor-pointer"
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
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-2xl bg-slate-900/85 border border-emerald-500/30 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse">
                    <MoveHorizontal className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">
                      Etrafa bakmak için 360° sürükleyin
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom HUD Bar */}
            <div className="flex items-end justify-between w-full">
              {/* Bottom-Left: Location Info */}
              <div className="hidden md:flex flex-col gap-1 pointer-events-auto">
                <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {displayBungalow.location}
                </span>
                <span className="text-lg font-bold text-white">
                  {displayBungalow.title}
                </span>
              </div>

              {/* Bottom-Right Sticky Card: Reservation Widget */}
              <div className="pointer-events-auto ml-auto">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/20 p-4 sm:p-5 rounded-2xl max-w-sm w-full shadow-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={displayBungalow.image}
                      alt={displayBungalow.title}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {displayBungalow.title}
                      </h4>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-base font-extrabold text-emerald-400">
                          ₺{displayBungalow.price.toLocaleString("tr-TR")}
                        </span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          / gece
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_TRANSITION}
                    type="button"
                    onClick={() => {
                      if (onBookNow) onBookNow(displayBungalow);
                      onClose();
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Hemen Rezerve Et</span>
                    <ArrowRight className="w-4 h-4" />
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
