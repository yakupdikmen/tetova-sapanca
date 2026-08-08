"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

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

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  duration = 15,
  className = "",
}) => {
  return (
    <div className={`overflow-hidden relative max-h-[680px] ${className}`}>
      <motion.div
        animate={{
          translateY: [0, "-50%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6"
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]"
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

                <Quote className="w-6 h-6 text-emerald-500/20 group-hover:text-emerald-400/40 transition-colors" />
              </div>

              {/* Review Content */}
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
                "{item.text}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-amber-900/10 dark:border-white/10 mt-auto">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-900/10 dark:border-white/15 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </h4>
                    {item.verified !== false && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-emerald-500/20" />
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.dateText || item.role}
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase bg-slate-100 dark:bg-slate-950/60 px-2.5 py-1 rounded-full border border-amber-900/5 dark:border-white/5">
                Google
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
