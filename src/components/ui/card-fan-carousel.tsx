"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export interface SocialCardItem {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  tag?: string;
  likes?: number;
}

export interface SocialCardsProps {
  cards: SocialCardItem[];
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}

export const SocialCards: React.FC<SocialCardsProps> = ({
  cards,
  activeIndex: controlledIndex,
  onIndexChange,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [internalIndex, setInternalIndex] = useState<number>(0);

  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const animateToActiveIndex = (targetIndex: number) => {
    if (!cardsRef.current.length) return;
    const total = cards.length;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const diff = i - targetIndex;

      if (i === targetIndex) {
        // Center focused card pops out
        gsap.to(card, {
          rotate: 0,
          x: 0,
          y: -25,
          scale: 1.1,
          zIndex: 30,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      } else {
        // Surrounding cards fan out relative to the active target index
        const angle = diff * 12; // Spread angle per step
        const xOffset = diff * 55; // Spread horizontal distance
        const yOffset = Math.abs(diff) * 12; // Arc curve downwards

        gsap.to(card, {
          rotate: angle,
          x: xOffset,
          y: yOffset,
          scale: Math.max(0.75, 1 - Math.abs(diff) * 0.08),
          zIndex: 20 - Math.abs(diff),
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  };

  useEffect(() => {
    animateToActiveIndex(activeIndex);
  }, [activeIndex, cards]);

  const handleCardClick = (index: number) => {
    setInternalIndex(index);
    if (onIndexChange) {
      onIndexChange(index);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center py-8 overflow-hidden ${className}`}
    >
      <div className="relative w-full max-w-xl h-[320px] sm:h-[380px] flex items-center justify-center">
        {cards.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              className={`absolute w-[220px] sm:w-[270px] h-[300px] sm:h-[360px] rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${
                isActive
                  ? "border-amber-500 shadow-[0_25px_50px_rgba(245,158,11,0.4)]"
                  : "border-white/15 bg-stone-900/80 backdrop-blur-xl opacity-95 hover:border-white/30"
              }`}
            >
              {/* Card Image */}
              <div className="relative w-full h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter brightness-[0.8] transition-all duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCards;
