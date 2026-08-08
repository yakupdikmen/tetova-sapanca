"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Calendar,
  Users,
  Moon,
  Sparkles,
  Plus,
  Minus,
  Check,
  ArrowRight,
  ShieldCheck,
  Flame,
  Utensils,
  PawPrint,
} from "lucide-react";
import { MOCK_BUNGALOWS, Bungalow } from "@/constants/bungalows";

export interface LuxuryExtra {
  id: string;
  name: string;
  pricePerNight: number;
  isOneTime?: boolean;
  description: string;
  icon: string;
}

const LUXURY_EXTRAS: LuxuryExtra[] = [
  {
    id: "extra-breakfast",
    name: "Zengin Serpme Köy Kahvaltısı",
    pricePerNight: 400,
    isOneTime: false,
    description: "Günlük taze organik ürünlerle hazırlanan 2 kişilik kahvaltı ikramı",
    icon: "Utensils",
  },
  {
    id: "extra-bbq",
    name: "Özel Şömine & Barbekü Paketi",
    pricePerNight: 500,
    isOneTime: true,
    description: "Meşe odunu, tutuşturucu ve barbekü ızgara ekipmanları dahil seti",
    icon: "Flame",
  },
  {
    id: "extra-pet",
    name: "Pati Dostu Konaklama Paketi",
    pricePerNight: 350,
    isOneTime: true,
    description: "Evcil hayvan havluları, mama kabı ve bahçe temizlik paketi",
    icon: "PawPrint",
  },
];

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const BookingCalculator: React.FC = () => {
  const bungalowSelectId = useId();
  const [selectedBungalowId, setSelectedBungalowId] = useState<string>(
    MOCK_BUNGALOWS[0].id
  );
  const [nightsCount, setNightsCount] = useState<number>(2);
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);

  const selectedBungalow: Bungalow =
    MOCK_BUNGALOWS.find((b) => b.id === selectedBungalowId) ||
    MOCK_BUNGALOWS[0];

  // Price calculations
  const basePriceTotal = selectedBungalow.price * nightsCount;

  const extrasTotal = selectedExtras.reduce((acc, extraId) => {
    const extra = LUXURY_EXTRAS.find((e) => e.id === extraId);
    if (!extra) return acc;
    return (
      acc + (extra.isOneTime ? extra.pricePerNight : extra.pricePerNight * nightsCount)
    );
  }, 0);

  const totalPrice = basePriceTotal + extrasTotal;

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessMessage(true);
    setTimeout(() => {
      setIsSuccessMessage(false);
    }, 4000);
  };

  return (
    <section className="relative bg-[#FDFBF7] dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Radial Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 dark:bg-emerald-950/20 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-600/10 dark:bg-teal-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>ŞEFFAF & ANINDA FİYAT HESAPLAMA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Tatil Bütçenizi <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
              Canlı Simüle Edin
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Konaklamak istediğiniz bungalovu, gece ve misafir sayısını seçin; ekstra luxury ikramları ekleyerek toplam tutarınızı anında görüntüleyin.
          </p>
        </div>

        {/* Interactive Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Options */}
          <div className="lg:col-span-7 flex flex-col gap-6 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
            {/* Bungalow Selection Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor={bungalowSelectId} className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Bungalov Tipi Seçin
              </label>
              <div className="relative">
                <select
                  id={bungalowSelectId}
                  value={selectedBungalowId}
                  onChange={(e) => setSelectedBungalowId(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-950/80 border border-amber-900/10 dark:border-white/15 rounded-2xl px-4 py-3.5 text-slate-900 dark:text-white font-semibold text-sm sm:text-base focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
                >
                  {MOCK_BUNGALOWS.map((bungalow) => (
                    <option
                      key={bungalow.id}
                      value={bungalow.id}
                      className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-2"
                    >
                      {bungalow.title} — ₺{bungalow.price.toLocaleString("tr-TR")}/gece ({bungalow.capacity} Misafir)
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Counters Row: Nights & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Nights Counter */}
              <div className="flex flex-col gap-2 bg-slate-100/70 dark:bg-slate-950/50 border border-amber-900/10 dark:border-white/10 p-4 rounded-2xl">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Gece Sayısı
                </span>
                <div className="flex items-center justify-between mt-1">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setNightsCount((prev) => Math.max(1, prev - 1))}
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-amber-900/10 dark:border-white/15 text-slate-800 dark:text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{nightsCount} Gece</span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setNightsCount((prev) => prev + 1)}
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-amber-900/10 dark:border-white/15 text-slate-800 dark:text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Guests Counter */}
              <div className="flex flex-col gap-2 bg-slate-100/70 dark:bg-slate-950/50 border border-amber-900/10 dark:border-white/10 p-4 rounded-2xl">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Kişi Sayısı
                </span>
                <div className="flex items-center justify-between mt-1">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setGuestsCount((prev) => Math.max(1, prev - 1))}
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-amber-900/10 dark:border-white/15 text-slate-800 dark:text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">{guestsCount} Misafir</span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() =>
                      setGuestsCount((prev) =>
                        Math.min(selectedBungalow.capacity + 2, prev + 1)
                      )
                    }
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-amber-900/10 dark:border-white/15 text-slate-800 dark:text-white flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Luxury Extras Section */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Ekstra Luxury Hizmetler & İkramlar
              </span>

              <div className="flex flex-col gap-3">
                {LUXURY_EXTRAS.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);
                  const IconComp =
                    extra.icon === "Utensils"
                      ? Utensils
                      : extra.icon === "Flame"
                      ? Flame
                      : PawPrint;

                  return (
                    <motion.div
                      key={extra.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-emerald-500/10 border-emerald-500 text-slate-900 dark:text-white shadow-md"
                          : "bg-slate-100/70 dark:bg-slate-950/40 border border-amber-900/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-900/20 dark:hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-emerald-500 text-slate-950"
                              : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {extra.name}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                            {extra.description}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                          +₺{extra.pricePerNight.toLocaleString("tr-TR")}
                          {extra.isOneTime ? " (tek sefer)" : "/gece"}
                        </span>

                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                            isSelected
                              ? "bg-emerald-500 border-emerald-500 text-slate-950"
                              : "border-slate-300 dark:border-white/20"
                          }`}
                        >
                          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Glassmorphism Price Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl overflow-hidden flex flex-col gap-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-amber-900/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedBungalow.image}
                    alt={selectedBungalow.title}
                    className="w-14 h-14 rounded-2xl object-cover border border-amber-900/10 dark:border-white/15 shadow-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {selectedBungalow.title}
                    </h3>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      ₺{selectedBungalow.price.toLocaleString("tr-TR")} / gece
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  Canlı Özet
                </span>
              </div>

              {/* Line Items Breakdown */}
              <div className="flex flex-col gap-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>
                    Bungalov Konaklama ({nightsCount} Gece)
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    ₺{basePriceTotal.toLocaleString("tr-TR")}
                  </span>
                </div>

                {selectedExtras.map((extraId) => {
                  const extra = LUXURY_EXTRAS.find((e) => e.id === extraId);
                  if (!extra) return null;
                  const itemCost = extra.isOneTime
                    ? extra.pricePerNight
                    : extra.pricePerNight * nightsCount;

                  return (
                    <div
                      key={extra.id}
                      className="flex items-center justify-between text-slate-600 dark:text-slate-300"
                    >
                      <span className="truncate max-w-[200px]">{extra.name}</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        +₺{itemCost.toLocaleString("tr-TR")}
                      </span>
                    </div>
                  );
                })}

                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs pt-2 border-t border-amber-900/5 dark:border-white/5">
                  <span>Temizlik & Servis Bedeli</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ÜCRETSİZ</span>
                </div>
              </div>

              {/* Animated Total Price Display */}
              <div className="pt-4 border-t border-amber-900/10 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Toplam Tahmini Tutar
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    (Vergiler ve Harçlar Dahil)
                  </span>
                </div>

                <div className="text-right">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={totalPrice}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={SPRING_TRANSITION}
                      className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400"
                    >
                      ₺{totalPrice.toLocaleString("tr-TR")}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Submit / WhatsApp CTA Button */}
              <form onSubmit={handleReservationSubmit}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRING_TRANSITION}
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Anında Ön Rezerve Talebi Gönder</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccessMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      Talebiniz başarıyla alındı! Müşteri temsilcimiz WhatsApp üzerinden 5 dk içinde dönüş yapacaktır.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalculator;
