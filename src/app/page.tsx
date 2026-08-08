"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BungalowGrid from "@/components/sections/BungalowGrid";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import BookingCalculator from "@/components/sections/BookingCalculator";
import GoogleReviewsMarquee from "@/components/sections/GoogleReviewsMarquee";
import DestinationMapSection from "@/components/sections/DestinationMapSection";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";
import BungalowDetailModal from "@/components/ui/BungalowDetailModal";
import InteractiveVirtualTour from "@/components/ui/InteractiveVirtualTour";
import { Bungalow } from "@/constants/bungalows";

export default function Home() {
  const [activeBungalow, setActiveBungalow] = useState<Bungalow | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState<boolean>(false);

  const handleBookNowFromTourOrModal = () => {
    setActiveBungalow(null);
    setIsVirtualTourOpen(false);
    const calculatorElement = document.getElementById("calculator");
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      {/* Sticky Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onSearch={() => {
            const bungalowsElement = document.getElementById("bungalows");
            if (bungalowsElement) {
              bungalowsElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 2. Bungalow Collection Grid */}
        <div id="bungalows">
          <BungalowGrid
            onSelectBungalow={(bungalow) => setActiveBungalow(bungalow)}
            onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          />
        </div>

        {/* 3. Luxury Amenities Section */}
        <AmenitiesSection />

        {/* 4. Booking Price Calculator */}
        <div id="calculator">
          <BookingCalculator />
        </div>

        {/* 5. Animated Google Reviews Vertical Marquee */}
        <GoogleReviewsMarquee />

        {/* 6. Interactive Sapanca Destination Map Section */}
        <DestinationMapSection />

        {/* 7. SEO Blog & Local Guide Section */}
        <BlogSection />

        {/* 8. Sıkça Sorulan Sorular (FAQ) Section - Bottom Position */}
        <div id="faq">
          <FaqSection />
        </div>
      </main>

      {/* 9. Luxury Footer */}
      <Footer />

      {/* Fullscreen Bungalow Detail Modal with Embedded Card Fan Carousel */}
      <BungalowDetailModal
        selectedBungalow={activeBungalow}
        isOpen={Boolean(activeBungalow)}
        onClose={() => setActiveBungalow(null)}
        onBookNow={handleBookNowFromTourOrModal}
      />

      {/* 360° Interactive Virtual Tour with HUD Overlay */}
      <InteractiveVirtualTour
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        bungalow={activeBungalow}
        onBookNow={handleBookNowFromTourOrModal}
      />
    </div>
  );
}
