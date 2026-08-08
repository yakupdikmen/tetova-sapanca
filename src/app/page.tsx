"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BungalowGrid from "@/components/sections/BungalowGrid";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GoogleReviewsMarquee from "@/components/sections/GoogleReviewsMarquee";
import DestinationMapSection from "@/components/sections/DestinationMapSection";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";
import BungalowDetailModal from "@/components/ui/BungalowDetailModal";
import InteractiveVirtualTour from "@/components/ui/InteractiveVirtualTour";
import { Bungalow } from "@/constants/bungalows";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Home() {
  const [activeBungalow, setActiveBungalow] = useState<Bungalow | null>(null);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState<boolean>(false);

  const handleBookNowFromTourOrModal = (bungalow?: Bungalow | null) => {
    setActiveBungalow(null);
    setIsVirtualTourOpen(false);
    const bTitle = bungalow ? bungalow.title : "Bungalov";
    openWhatsApp(`Merhaba, Tetova Sapanca web sitenizden ${bTitle} için bilgi ve rezervasyon talebinde bulunmak istiyorum.`);
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

        {/* 4. Animated Google Reviews Vertical Marquee */}
        <GoogleReviewsMarquee />

        {/* 5. Interactive Sapanca Destination Map Section */}
        <DestinationMapSection />

        {/* 6. SEO Blog & Local Guide Section */}
        <div id="blog">
          <BlogSection />
        </div>

        {/* 7. Sıkça Sorulan Sorular (FAQ) Section */}
        <div id="faq">
          <FaqSection />
        </div>
      </main>

      {/* 8. Luxury Footer */}
      <Footer />

      {/* Fullscreen Bungalow Detail Modal */}
      <BungalowDetailModal
        selectedBungalow={activeBungalow}
        isOpen={Boolean(activeBungalow)}
        onClose={() => setActiveBungalow(null)}
        onBookNow={(b) => handleBookNowFromTourOrModal(b)}
      />

      {/* 360° Interactive Virtual Tour */}
      <InteractiveVirtualTour
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        bungalow={activeBungalow}
        onBookNow={() => handleBookNowFromTourOrModal(activeBungalow)}
      />
    </div>
  );
}
