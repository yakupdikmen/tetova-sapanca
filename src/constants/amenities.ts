export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: "Flame" | "Waves" | "Trees" | "Wifi" | "Coffee" | "Sparkles";
  highlightTag: string;
}

export type LuxuryAmenity = AmenityItem;

export const LUXURY_AMENITIES: AmenityItem[] = [
  {
    id: "heated-pool",
    title: "Isıtmalı Özel Havuzlar",
    description: "4 mevsim 32°C sabit sıcaklıkta çalışan size özel açık hava ısıtmalı yüzme havuzlarında doğanın keyfini çıkarın.",
    iconName: "Waves",
    highlightTag: "4 Mevsim Kiralama",
  },
  {
    id: "fire-pit",
    title: "Özel Ateş Çukuru Keyfi",
    description: "Romantik akşamlar için tasarlanmış sıcacık ateş çukurları tüm bungalovlarımızda sizi bekliyor.",
    iconName: "Flame",
    highlightTag: "Romantik VIP Konsept",
  },
  {
    id: "panoramic-views",
    title: "Göl & Orman Manzaraları",
    description: "Sapanca Gölü'nün panoramik maviliğine ve çam ormanlarının huzur veren yeşiline uyanacağınız muazzam konum.",
    iconName: "Trees",
    highlightTag: "Eşsiz Panoramik Manzara",
  },
  {
    id: "high-speed-wifi",
    title: "Fiber Wi-Fi & Akıllı Sistemler",
    description: "Doğa ile iç içe iken uzaktan çalışmanızı ve kesintisiz eğlenceyi destekleyen yüksek hızlı fiber internet altyapısı.",
    iconName: "Wifi",
    highlightTag: "Kesintisiz Bağlantı",
  },
  {
    id: "vip-concierge",
    title: "Kişiselleştirilmiş VIP Karşılama",
    description: "Tatilinizin her anında size özel asistanlık, tur organizasyonu ve 7/24 kesintisiz müşteri desteği.",
    iconName: "Sparkles",
    highlightTag: "7/24 Özel Asistan",
  },
];
