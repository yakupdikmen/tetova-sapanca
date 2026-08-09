"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Açık Temaya Geç" : "Koyu Temaya Geç"}
      className={`w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-md transition-colors cursor-pointer ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -15, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 15, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          ) : (
            <Moon className="w-5 h-5 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
