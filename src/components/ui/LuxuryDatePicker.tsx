"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface LuxuryDatePickerProps {
  label: string;
  value: string; // YYYY-MM-DD
  onChange: (dateStr: string) => void;
  minDate?: string; // YYYY-MM-DD
  className?: string;
}

export const LuxuryDatePicker: React.FC<LuxuryDatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  className = "",
}) => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Parsed initial date or today
  const initialDateObj = value ? new Date(value) : new Date();
  const [currentMonth, setCurrentMonth] = useState(initialDateObj.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDateObj.getFullYear());

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync internal calendar view when value changes
  useEffect(() => {
    if (value) {
      const parts = value.split("-").map(Number);
      if (parts.length === 3) {
        setCurrentYear(parts[0]);
        setCurrentMonth(parts[1] - 1);
      }
    }
  }, [value]);

  const monthNames: string[] = (t("datePicker.months") as any) || [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const weekdayNames: string[] = (t("datePicker.weekdays") as any) || [
    "Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"
  ];

  const formatDateDisplay = (dateStr: string): string => {
    if (!dateStr) return t("datePicker.selectDate");
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return dateStr;
    const d = new Date(year, month - 1, day);
    const dayName = weekdayNames[d.getDay()] || "";
    const monthName = monthNames[month - 1] || "";
    if (language === "ar") {
      return `${day} ${monthName} ${year}، ${dayName}`;
    }
    if (language === "en") {
      return `${monthName} ${day}, ${year} (${dayName})`;
    }
    return `${day} ${monthName} ${year}, ${dayName}`;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  // Days in month calculation
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const handleSelectDay = (dayNum: number) => {
    const monthStr = String(currentMonth + 1).padStart(2, "0");
    const dayStr = String(dayNum).padStart(2, "0");
    const formatted = `${currentYear}-${monthStr}-${dayStr}`;
    onChange(formatted);
    setIsOpen(false);
  };

  // Check if date is disabled (before minDate)
  const isDayDisabled = (dayNum: number) => {
    if (!minDate) return false;
    const target = new Date(currentYear, currentMonth, dayNum);
    const min = new Date(minDate);
    min.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return target < min;
  };

  // Check if date is selected
  const isDaySelected = (dayNum: number) => {
    if (!value) return false;
    const [y, m, d] = value.split("-").map(Number);
    return y === currentYear && m === currentMonth + 1 && d === dayNum;
  };

  // Quick preset selection helper
  const handleQuickSelect = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    onChange(`${y}-${m}-${day}`);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${isOpen ? "z-50" : "z-10"} flex flex-col gap-2 ${className}`}>
      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
        <CalendarIcon className="w-4 h-4 text-emerald-400" />
        <span>{label}</span>
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-slate-800/90 hover:bg-slate-800 border border-white/15 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all flex items-center justify-between shadow-lg cursor-pointer group"
      >
        <span className="truncate">{formatDateDisplay(value)}</span>
        <ChevronRight
          className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 ${
            isOpen ? "rotate-90 text-emerald-400" : ""
          }`}
        />
      </button>

      {/* Luxury Calendar Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 top-full mt-2.5 z-[100] bg-slate-900/98 dark:bg-slate-950/98 backdrop-blur-3xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] w-[310px] sm:w-[330px] text-white"
          >
            {/* Quick Presets Ribbon */}
            <div className="flex items-center gap-1.5 pb-3.5 mb-3 border-b border-white/10 overflow-x-auto text-[11px] font-medium [scrollbar-width:none]">
              <button
                type="button"
                onClick={() => handleQuickSelect(0)}
                className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/10 transition-colors whitespace-nowrap"
              >
                {t("datePicker.today")}
              </button>
              <button
                type="button"
                onClick={() => handleQuickSelect(1)}
                className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/10 transition-colors whitespace-nowrap"
              >
                {t("datePicker.tomorrow")}
              </button>
              <button
                type="button"
                onClick={() => handleQuickSelect(3)}
                className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/10 transition-colors whitespace-nowrap"
              >
                {t("datePicker.threeDays")}
              </button>
              <button
                type="button"
                onClick={() => handleQuickSelect(7)}
                className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/10 transition-colors whitespace-nowrap"
              >
                {t("datePicker.nextWeek")}
              </button>
            </div>

            {/* Month & Year Controls Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
              </button>

              <span className="text-sm font-extrabold tracking-wide">
                {monthNames[currentMonth]} {currentYear}
              </span>

              <button
                type="button"
                onClick={handleNextMonth}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

            {/* Weekday Names Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-400 mb-2">
              {weekdayNames.map((name) => (
                <div key={name}>{name}</div>
              ))}
            </div>

            {/* Day Cells Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty leading padding cells */}
              {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                <div key={`empty-${idx}`} className="h-9" />
              ))}

              {/* Month Days */}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const dayNum = idx + 1;
                const disabled = isDayDisabled(dayNum);
                const selected = isDaySelected(dayNum);

                return (
                  <button
                    key={dayNum}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleSelectDay(dayNum)}
                    className={`h-9 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                      selected
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105"
                        : disabled
                        ? "opacity-25 cursor-not-allowed text-slate-500"
                        : "hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-200"
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LuxuryDatePicker;
