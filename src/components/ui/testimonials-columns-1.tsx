"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

import { maskName } from "@/utils/format";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
  dateText?: string;
  verified?: boolean;
}

export interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}

const AuthorAvatar: React.FC<{ name: string }> = ({ name }) => {
  const cleanName = name ? name.trim().replace(/^[^a-zA-ZçğıöşüÇĞİÖŞÜ]+/, "") : "";
  const initial = cleanName.length > 0 ? cleanName.charAt(0).toUpperCase() : "G";

  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-orange-500 text-white font-extrabold text-sm flex items-center justify-center border border-amber-900/10 dark:border-white/20 shadow-md flex-shrink-0 select-none">
      {initial}
    </div>
  );
};

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  duration = 15,
  className = "",
}) => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className={`overflow-hidden relative max-h-[680px] select-none cursor-pointer ${className}`}
    >
      <div
        style={{
          animation: `marqueeVertical ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          willChange: "transform",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className="flex flex-col gap-6"
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white/80 dark:bg-stone-900/50 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)]"
          >
            <div>
              {/* Rating Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-amber-500/20 group-hover:text-amber-400/40 transition-colors" />
              </div>

              {/* Review Content */}
              <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed font-normal mb-6">
                "{item.text}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-amber-900/10 dark:border-white/10 mt-auto">
              <div className="flex items-center gap-3">
                <AuthorAvatar name={item.name} />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      {maskName(item.name)}
                    </h4>
                    {item.verified !== false && (
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-500/20" />
                    )}
                  </div>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400">
                    {item.dateText || item.role}
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-semibold tracking-wider text-stone-500 dark:text-stone-400 uppercase bg-stone-100 dark:bg-stone-950/60 px-2.5 py-1 rounded-full border border-amber-900/5 dark:border-white/5">
                Google
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsColumn;
