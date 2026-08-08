"use client";

import React from "react";
import { Camera } from "lucide-react";
import SocialCards, { SocialCardItem } from "@/components/ui/card-fan-carousel";

export interface BungalowFanGalleryProps {
  cards?: SocialCardItem[];
}

const BUNGALOW_FAN_CARDS: SocialCardItem[] = [
  {
    id: "fan-1",
    title: "Platin VIP Villa",
    subtitle: "Kırkpınar doğası içinde 4 mevsim sıcak havuz keyfi",
    image: "/images/bungalows/platin-villa/1.jpeg",
    tag: "VIP Havuz",
    likes: 1240,
  },
  {
    id: "fan-2",
    title: "Gold Bungalov Suite",
    subtitle: "Orman manzaralı açık hava hidro-masaj jakuzisi",
    image: "/images/bungalows/gold-bungalov/1.jpeg",
    tag: "Jakuzi Suite",
    likes: 980,
  },
  {
    id: "fan-3",
    title: "Silver Bungalov",
    subtitle: "Sapanca doğasında huzurlu ve özel konaklama",
    image: "/images/bungalows/silver-bungalov/1.jpeg",
    tag: "Silver Konsept",
    likes: 1450,
  },
  {
    id: "fan-4",
    title: "Bronz Bungalov",
    subtitle: "Ateş çukuru ve özel çim bahçe alanı",
    image: "/images/bungalows/bronz-bungalov/1.jpeg",
    tag: "Doğa Konsept",
    likes: 870,
  },
  {
    id: "fan-5",
    title: "Platin Villa Teras",
    subtitle: "Geniş bahçeli ve özel barbekü alanlı VIP villa",
    image: "/images/bungalows/platin-villa/2.jpeg",
    tag: "VIP Teras",
    likes: 1120,
  },
];

export const BungalowFanGallery: React.FC<BungalowFanGalleryProps> = ({
  cards = BUNGALOW_FAN_CARDS,
}) => {
  return (
    <section className="relative bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>CANLI GALERİ SEÇKİSİ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            360° Doğa İçi <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Bungalov Yaşamı
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Tetova Sapanca'nın en sevilen detaylarını ve misafirlerimizin unutulmaz anlarını interaktif kart destesinde keşfedin.
          </p>
        </div>

        {/* Embedded Card Fan Carousel */}
        <SocialCards cards={cards} />
      </div>
    </section>
  );
};

export default BungalowFanGallery;
