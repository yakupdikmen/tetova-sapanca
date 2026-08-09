"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQ_ITEMS, FaqItem } from "@/constants/faq";
import { useLanguage } from "@/contexts/LanguageContext";

export interface FaqItemProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FaqSectionProps {
  faqs?: FaqItem[];
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const FaqAccordionItem: React.FC<FaqItemProps> = ({
  faq,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      initial={false}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-white dark:bg-stone-900/80 border-amber-500/40 shadow-lg"
          : "bg-white/80 dark:bg-stone-900/40 border-amber-900/10 dark:border-white/10 hover:border-amber-900/20 dark:hover:border-white/20"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left ltr:text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-white tracking-tight">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={SPRING_TRANSITION}
          className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300 flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-6 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal border-t border-amber-900/5 dark:border-white/5 pt-4 ltr:text-left rtl:text-right">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FaqSection: React.FC<FaqSectionProps> = ({
  faqs = FAQ_ITEMS,
}) => {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const getLocalizedFaqs = (): FaqItem[] => {
    if (language === "ar") {
      return [
        {
          id: "faq-1",
          question: "هل المسابح دافئة في فصل الشتاء؟",
          answer: "نعم، جميع بنغلاتنا مزودة بمسابح خاصة دافئة على مدار 4 فصول، وتحافظ على درجة حرارة 38 مئوية حتى في أبرد أيام الشتاء.",
          category: "general",
        },
        {
          id: "faq-2",
          question: "هل الحدائق مستورة ومحاطة بخصو صية تامة؟",
          answer: "نعم، جميع حدائق بنغلاتنا محاطة بأسوار خشبية وخضراء عالية، مما يضمن استقلالية وخصوصية تامة 100% بعيداً عن الأنظار الخارجية.",
          category: "privacy",
        },
        {
          id: "faq-3",
          question: "ما هي أوقات تسجيل الوصول والمغادرة؟",
          answer: "تسجيل الوصول يبدأ من الساعة 14:00 عصراً، والمغادرة حتى الساعة 11:00 صباحاً من أجل التعقيم والتنظيف الفاخر.",
          category: "general",
        },
        {
          id: "faq-4",
          question: "هل الإفطار شائبة مع الإقامة؟",
          answer: "نعم، نقدم وجبة إفطار قروية غنية ومجهزة يومياً طازجة إلى بنغلكم.",
          category: "amenities",
        },
      ];
    }
    if (language === "en") {
      return [
        {
          id: "faq-1",
          question: "Are the swimming pools heated during winter?",
          answer: "Yes! All of our VIP bungalows feature 4-season private heated outdoor pools maintained at a cozy 38°C year-round.",
          category: "general",
        },
        {
          id: "faq-2",
          question: "Are the gardens 100% private and secluded?",
          answer: "Absolutely. Each bungalow's private garden is completely enclosed by high privacy fences ensuring 100% confidentiality.",
          category: "privacy",
        },
        {
          id: "faq-3",
          question: "What are the check-in and check-out times?",
          answer: "Standard check-in starts at 14:00 and check-out is by 11:00 to allow thorough VIP sanitization.",
          category: "general",
        },
        {
          id: "faq-4",
          question: "Is breakfast included in the stay?",
          answer: "Yes, a complimentary organic village breakfast spread is freshly prepared and delivered to your bungalow daily.",
          category: "amenities",
        },
      ];
    }
    return faqs;
  };

  const currentFaqs = getLocalizedFaqs();

  return (
    <section className="relative bg-[#FDFBF7] dark:bg-stone-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-stone-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 dark:bg-amber-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t("faq.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
            {t("faq.title")} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 dark:from-amber-400 dark:via-orange-300 dark:to-rose-400">
              {t("faq.titleGradient")}
            </span>
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="flex flex-col gap-4">
          {currentFaqs.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
