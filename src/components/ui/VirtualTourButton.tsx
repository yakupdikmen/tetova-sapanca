"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export interface VirtualTourButtonProps {
  onClick: () => void;
  variant?: "hero" | "card" | "floating";
  label?: string;
  className?: string;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const VirtualTourButton: React.FC<VirtualTourButtonProps> = ({
  onClick,
  variant = "hero",
  label = "360° Sanal Tur",
  className = "",
}) => {
  if (variant === "card") {
    return (
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={SPRING_TRANSITION}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 shadow-md cursor-pointer ${className}`}
      >
        <Compass className="w-3.5 h-3.5" />
        <span>360° Sanal Tur</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={SPRING_TRANSITION}
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-amber-500/30 text-amber-300 font-semibold text-xs sm:text-sm tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300 cursor-pointer ${className}`}
    >
      <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
      <span>{label}</span>
    </motion.button>
  );
};

export default VirtualTourButton;
