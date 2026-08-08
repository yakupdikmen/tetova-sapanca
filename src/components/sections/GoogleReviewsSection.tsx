"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, ExternalLink, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { GoogleReview, GOOGLE_REVIEWS } from "@/constants/reviews";

export interface ReviewCardProps {
  review: GoogleReview;
  className?: string;
}

export interface GoogleReviewsSectionProps {
  reviews?: GoogleReview[];
  googleMapsUrl?: string;
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, className = "" }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={SPRING_TRANSITION}
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] ${className}`}
    >
      <div>
        {/* Top Card Bar: Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
              />
            ))}
          </div>

          <Quote className="w-8 h-8 text-emerald-500/20 group-hover:text-emerald-400/40 transition-colors" />
        </div>

        {/* Review Text */}
        <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
          "{review.reviewText}"
        </p>
      </div>

      {/* Author Details Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-amber-900/10 dark:border-white/10 mt-auto">
        <div className="flex items-center gap-3">
          <img
            src={review.authorAvatar}
            alt={review.authorName}
            className="w-10 h-10 rounded-full object-cover border border-amber-900/10 dark:border-white/15 shadow-md"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                {review.authorName}
              </h4>
              {review.verified && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-500/20" />
              )}
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">{review.dateText}</span>
          </div>
        </div>

        <span className="text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-950/60 px-2.5 py-1 rounded-full border border-amber-900/5 dark:border-white/5">
          Google Müşterisi
        </span>
      </div>
    </motion.div>
  );
};

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  reviews = GOOGLE_REVIEWS,
  googleMapsUrl = "https://www.google.com/maps/place/Tetova+Sapanca+Bungalov/@40.6883377,30.1949589,17z/data=!3m1!4b1!4m6!3m5!1s0x14cca742addd099d:0xa2c6bb62c910ee12!8m2!3d40.6883377!4d30.1975338!16s%2Fg%2F11w3mdlzpc?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D",
}) => {
  return (
    <section className="relative bg-[#FDFBF7] dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Radial Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-950/20 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-950/20 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header & Rating Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-amber-900/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>GERÇEK MÜŞTERİ DENEYİMLERİ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Misafirlerimizin <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Google Değerlendirmeleri
              </span>
            </h2>
          </div>

          {/* Rating Badge & External Link CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 p-4 sm:p-5 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900/10 dark:bg-white/10 border border-amber-900/10 dark:border-white/15 flex items-center justify-center text-xl font-black text-slate-900 dark:text-white">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">4.9</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  90+ Doğrulanmış Google Yorumu
                </span>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
            >
              <span>Google Maps'te İncele</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {reviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
