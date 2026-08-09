"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, CloudRain, Cloud, Snowflake, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface LiveWeatherBannerProps {
  onCtaClick?: () => void;
  className?: string;
}

interface WeatherState {
  temp: number;
  condition: "sunny" | "rainy" | "cloudy" | "snowy";
  weatherCode: number;
  loading: boolean;
}

export const LiveWeatherBanner: React.FC<LiveWeatherBannerProps> = ({
  onCtaClick,
  className = "",
}) => {
  const { t, language } = useLanguage();
  const [weather, setWeather] = useState<WeatherState>({
    temp: 18,
    condition: "sunny",
    weatherCode: 0,
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchSapancaWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=40.69&longitude=30.26&current_weather=true"
        );
        if (!response.ok) throw new Error("Weather fetch failed");

        const data = await response.json();
        const code = data.current_weather?.weathercode ?? 0;
        const temp = Math.round(data.current_weather?.temperature ?? 18);

        let condition: "sunny" | "rainy" | "cloudy" | "snowy" = "sunny";

        if (code >= 51 && code <= 82) {
          condition = "rainy";
        } else if (code >= 71 && code <= 86) {
          condition = "snowy";
        } else if (code >= 1 && code <= 3) {
          condition = "cloudy";
        } else {
          condition = "sunny";
        }

        if (isMounted) {
          setWeather({
            temp,
            condition,
            weatherCode: code,
            loading: false,
          });
        }
      } catch (err) {
        console.warn("Weather API fallback active:", err);
        if (isMounted) {
          setWeather((prev) => ({ ...prev, loading: false }));
        }
      }
    }

    fetchSapancaWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  const isCoolOrRainy = weather.condition === "rainy" || weather.condition === "snowy" || weather.temp < 15;

  const handleAction = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const bungalowsSection = document.getElementById("bungalows");
      if (bungalowsSection) {
        bungalowsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "rainy":
        return <CloudRain className="w-5 h-5 text-rose-400" />;
      case "snowy":
        return <Snowflake className="w-5 h-5 text-rose-200" />;
      case "cloudy":
        return <Cloud className="w-5 h-5 text-amber-200" />;
      default:
        return <Sun className="w-5 h-5 text-amber-400" />;
    }
  };

  const getHeadlineText = () => {
    if (language === "ar") {
      return isCoolOrRainy ? "الطقس ممطر ومنعش في صبانجة 🌧️" : "الشمس مشرقة والطبيعة ساحرة في صبانجة ☀️";
    }
    if (language === "en") {
      return isCoolOrRainy ? "Rainy & Refreshing Weather in Sapanca 🌧️" : "Beautiful Sunny Nature in Sapanca ☀️";
    }
    return isCoolOrRainy ? "Sapanca'da Yağmurlu & Serin Bir Hava Var 🌧️" : "Sapanca'da Harika Bir Doğa Güneşi ☀️";
  };

  const getSubtext = () => {
    if (language === "ar") {
      return isCoolOrRainy ? "استمتع بيوم لا يُنسى بجوار المسبح الدافئ والمدفأة المشتعلة." : "اكتشف خياراتنا المزودة بجاكوزي خارجي وحديقة واسعة.";
    }
    if (language === "en") {
      return isCoolOrRainy ? "Enjoy an unforgettable day by the warm heated pool and crackling fireplace." : "Explore options featuring outdoor hot tubs, private gardens, and BBQ.";
    }
    return isCoolOrRainy ? "Sıcak kapalı havuz ve çıtırdayan şömine eşliğinde unutulmaz bir gün geçirin." : "Açık hava jakuzisi, geniş bahçe ve barbekü konseptli seçeneklerimizi keşfedin.";
  };

  const getCtaText = () => {
    if (language === "ar") {
      return isCoolOrRainy ? "عرض المنازل بمسابح دافئة" : "استكشف أجنحة الحديقة";
    }
    if (language === "en") {
      return isCoolOrRainy ? "View Heated Pool Homes" : "Explore Garden Suites";
    }
    return isCoolOrRainy ? "Isıtmalı Havuzlu Evleri Gör" : "Bahçeli Suite'leri İncele";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-4xl mx-auto bg-stone-900/80 dark:bg-stone-900/90 border border-amber-500/30 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl text-white ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Live Indicator & Weather Info */}
        <div className="flex items-center gap-3.5">
          {/* Live Pulsing Dot */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            <span className="w-3 h-3 bg-amber-400 rounded-full animate-ping" />
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
          </div>

          <div className="flex flex-col ltr:text-left rtl:text-right">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                {t("hero.weatherTitle")}
              </span>
              <div className="flex items-center gap-1 bg-stone-800/80 px-2 py-0.5 rounded-full border border-white/10 text-xs font-bold text-stone-200">
                {getWeatherIcon()}
                <span>{weather.temp}°C</span>
              </div>
            </div>

            {/* Experience Message */}
            <h4 className="text-sm sm:text-base font-bold text-white mt-1">
              {getHeadlineText()}
            </h4>

            {/* Experience Subtext */}
            <p className="text-xs text-stone-300 font-normal mt-0.5 hidden sm:block">
              {getSubtext()}
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <button
          type="button"
          onClick={handleAction}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{getCtaText()}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>
    </motion.div>
  );
};

export default LiveWeatherBanner;
