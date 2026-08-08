"use client";

import React from "react";
import { Star, ExternalLink, Sparkles } from "lucide-react";
import TestimonialsColumn, { Testimonial } from "@/components/ui/testimonials-columns-1";

export interface GoogleReviewsMarqueeProps {
  googleMapsUrl?: string;
}

const COLUMN_1_REVIEWS: Testimonial[] = [
  {
    name: "Ahmet Hakan Yılmaz",
    role: "Google Müşterisi",
    dateText: "2 hafta önce",
    text: "Sapanca'da konakladığımız en lüks ve en temiz bungalov deneyimiydi. Isıtmalı havuzun sıcaklığı harikaydı, kış gününde havuz keyfi bambaşka. Güler yüzlü hizmet için teşekkürler.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "Zeynep Arslan",
    role: "Google Müşterisi",
    dateText: "1 ay önce",
    text: "Ailecek 6 kişi Grand Vista VIP evinde kaldık. Bahçesi çok geniş, çocuklar için güvenli ve havuzu pırıl pırıldı. Sapanca'ya her geldiğimizde tek adresimiz artık burası.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "Kaan & Deniz Demir",
    role: "Google Müşterisi",
    dateText: "3 hafta önce",
    text: "Açık hava jakuzisi ve şömine atmosferi muazzamdı. Akşam terasta yıldızları izleyerek geçirdiğimiz vakti unutamıyoruz. Kesinlikle tavsiye ederim.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
];

const COLUMN_2_REVIEWS: Testimonial[] = [
  {
    name: "Selin & Emre Kaya",
    role: "Google Müşterisi",
    dateText: "1 ay önce",
    text: "Evlilik yıldönümümüz için Jakuzili VIP Suite tercih ettik. Şömine başında geçirdiğimiz vakit ve sabah verandamıza gelen zengin serpme kahvaltı unutulmazdı.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "Mert Deniz",
    role: "Google Müşterisi",
    dateText: "2 ay önce",
    text: "Panoramik göl manzaralı dome evde konakladık. Gece yatakta yıldızları izlemek muazzam bir duygu. İlgili ev sahibine ve 7/24 asistan hizmetine çok teşekkürler.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "Gizem & Serkan Aktaş",
    role: "Google Müşterisi",
    dateText: "1 ay önce",
    text: "Evcil hayvanımızla birlikte kabul edildiğimiz için çok mutlu olduk. Pati dostumuz bahçede özgürce koştu. Hem lüks hem hayvan dostu bir tesis.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
];

const COLUMN_3_REVIEWS: Testimonial[] = [
  {
    name: "Burak Özkan",
    role: "Google Müşterisi",
    dateText: "3 hafta önce",
    text: "Görsellerde ne görüyorsanız birebir aynısı hatta daha fazlası. Fiber internet hızı harikaydı, doğa içinde uzaktan çalışmak için harika bir ortam.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "Elif & Kaan Çelik",
    role: "Google Müşterisi",
    dateText: "2 ay önce",
    text: "Her detay düşünülmüş. Temizlik, havuz sıcaklığı, oda kokusu ve ikramlar tek kelimeyle kusursuzdu. Tekrar geleceğiz.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
  {
    name: "Caner Yurtsever",
    role: "Google Müşterisi",
    dateText: "1 ay önce",
    text: "360 sanal tura bakarak rezervasyon yapmıştık. Gittiğimizde tam da turda gördüğümüz kalitede bir tesisle karşılaştık. Mükemmel bir işletme.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    verified: true,
  },
];

export const GoogleReviewsMarquee: React.FC<GoogleReviewsMarqueeProps> = ({
  googleMapsUrl = "https://www.google.com/maps/place/Tetova+Sapanca+Bungalov/@40.6883377,30.1949589,17z/data=!3m1!4b1!4m6!3m5!1s0x14cca742addd099d:0xa2c6bb62c910ee12!8m2!3d40.6883377!4d30.1975338!16s%2Fg%2F11w3mdlzpc?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D",
}) => {
  return (
    <section className="relative bg-[#FAF8F5] dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Radial Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-950/20 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 dark:bg-teal-950/20 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header & Rating Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-amber-900/10 dark:border-white/10">
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

        {/* 3 Parallel Vertical Marquee Columns */}
        <div className="relative max-h-[640px] overflow-hidden">
          {/* Top & Bottom Fade Mask Gradient Overlays */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#FAF8F5] dark:from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAF8F5] dark:from-slate-950 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialsColumn testimonials={COLUMN_1_REVIEWS} duration={16} />
            <TestimonialsColumn testimonials={COLUMN_2_REVIEWS} duration={20} className="hidden md:block" />
            <TestimonialsColumn testimonials={COLUMN_3_REVIEWS} duration={17} className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsMarquee;
