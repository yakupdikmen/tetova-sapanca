"use client";

import React from "react";
import { Star, ExternalLink, Sparkles } from "lucide-react";
import TestimonialsColumn, { Testimonial } from "@/components/ui/testimonials-columns-1";

import { GOOGLE_REVIEWS } from "@/constants/reviews";
import { useLanguage } from "@/contexts/LanguageContext";

export interface GoogleReviewsMarqueeProps {
  googleMapsUrl?: string;
}

const ALL_FORMATTED_REVIEWS: Testimonial[] = GOOGLE_REVIEWS.map((r) => ({
  name: r.authorName,
  role: "Google Müşterisi",
  dateText: r.dateText,
  text: r.reviewText,
  image: r.authorAvatar,
  rating: r.rating,
  verified: true,
}));

const COLUMN_1_REVIEWS = ALL_FORMATTED_REVIEWS.filter((_, idx) => idx % 3 === 0);
const COLUMN_2_REVIEWS = ALL_FORMATTED_REVIEWS.filter((_, idx) => idx % 3 === 1);
const COLUMN_3_REVIEWS = ALL_FORMATTED_REVIEWS.filter((_, idx) => idx % 3 === 2);

export const GoogleReviewsMarquee: React.FC<GoogleReviewsMarqueeProps> = ({
  googleMapsUrl: initialGoogleMapsUrl = "https://www.google.com/maps/place/Tetova+Sapanca+Bungalov/@40.6883377,30.1949589,17z/data=!3m1!4b1!4m6!3m5!1s0x14cca742addd099d:0xa2c6bb62c910ee12!8m2!3d40.6883377!4d30.1975338!16s%2Fg%2F11w3mdlzpc?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D",
}) => {
  const { t } = useLanguage();
  const [rating, setRating] = React.useState<number>(4.9);
  const [totalReviews, setTotalReviews] = React.useState<number>(90);
  const [mapsUrl, setMapsUrl] = React.useState<string>(initialGoogleMapsUrl);
  const [isLive, setIsLive] = React.useState<boolean>(false);
  const [col1, setCol1] = React.useState<Testimonial[]>(COLUMN_1_REVIEWS);
  const [col2, setCol2] = React.useState<Testimonial[]>(COLUMN_2_REVIEWS);
  const [col3, setCol3] = React.useState<Testimonial[]>(COLUMN_3_REVIEWS);

  const customerRole = t("reviews.googleCustomer");

  React.useEffect(() => {
    async function fetchLiveReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        if (!res.ok) return;
        const data = await res.json();
        if (data.rating) setRating(data.rating);
        if (data.userRatingsTotal) setTotalReviews(data.userRatingsTotal);
        if (data.googleUrl && data.googleUrl !== "https://maps.google.com") setMapsUrl(data.googleUrl);
        if (data.isLive) setIsLive(true);

        if (data.isLive && data.reviews && data.reviews.length > 0) {
          const liveFormatted: Testimonial[] = data.reviews.map((r: any) => ({
            name: r.authorName,
            role: customerRole,
            dateText: r.dateText,
            text: r.reviewText,
            image: r.authorAvatar,
            rating: r.rating,
            verified: true,
          }));

          // Merge live reviews with default reviews to ensure all 3 columns get at least 4 unique cards
          const combined = [...liveFormatted];
          ALL_FORMATTED_REVIEWS.forEach((fallbackItem) => {
            if (!combined.some((item) => item.name === fallbackItem.name)) {
              combined.push(fallbackItem);
            }
          });

          // Distribute into 3 columns
          const c1: Testimonial[] = [];
          const c2: Testimonial[] = [];
          const c3: Testimonial[] = [];
          combined.forEach((item: Testimonial, idx: number) => {
            if (idx % 3 === 0) c1.push(item);
            else if (idx % 3 === 1) c2.push(item);
            else c3.push(item);
          });

          if (c1.length > 0) setCol1(c1);
          if (c2.length > 0) setCol2(c2);
          if (c3.length > 0) setCol3(c3);
        }
      } catch (err) {
        console.warn("Live Google Reviews fetch skipped, using default reviews.", err);
      }
    }
    fetchLiveReviews();
  }, []);

  return (
    <section className="relative bg-[#FAF8F5] dark:bg-stone-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-stone-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Radial Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 dark:bg-amber-950/20 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 dark:bg-orange-950/20 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header & Rating Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-amber-900/10 dark:border-white/10">
          <div className="flex flex-col gap-2 ltr:text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{t("reviews.badge")}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
              {t("reviews.title")} <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 dark:from-amber-400 dark:via-orange-300 dark:to-rose-400">
                {t("reviews.titleGradient")}
              </span>
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-2 flex items-center gap-1.5">
              <span>💡 {t("reviews.subtitle")}</span>
            </p>
          </div>

          {/* Rating Badge & External Link CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/80 dark:bg-stone-900/60 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 p-4 sm:p-5 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-900/10 dark:bg-white/10 border border-amber-900/10 dark:border-white/15 flex items-center justify-center text-xl font-black text-stone-900 dark:text-white">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-stone-900 dark:text-white">{rating}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {totalReviews}+ {t("reviews.ratingBadge")}
                </span>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 border border-amber-400/30 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] cursor-pointer"
            >
              <span>{t("reviews.viewOnGoogle")}</span>
              <ExternalLink className="w-4 h-4 rtl:rotate-180" />
            </a>
          </div>
        </div>

        {/* 3 Parallel Vertical Marquee Columns */}
        <div className="relative max-h-[640px] overflow-hidden">
          {/* Top & Bottom Fade Mask Gradient Overlays */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAF8F5] dark:from-stone-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAF8F5] dark:from-stone-950 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialsColumn testimonials={col1} duration={45} />
            <TestimonialsColumn testimonials={col2} duration={55} className="hidden md:block" />
            <TestimonialsColumn testimonials={col3} duration={48} className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsMarquee;
