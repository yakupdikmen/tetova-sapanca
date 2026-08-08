export interface BungalowCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface Bungalow {
  id: string;
  title: string;
  tagline: string;
  subtitle?: string;
  categoryId: string;
  capacity: number; // Max guest count
  sqm: number; // Square meters size
  bedrooms: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery?: string[];
  location: string;
  amenities: string[];
  features?: string[];
  featured: boolean;
  isFeatured?: boolean;
}

export interface SearchFilterState {
  checkIn: string;
  checkOut: string;
  guests: number;
  categoryId: string;
}

export const BUNGALOW_CATEGORIES: BungalowCategory[] = [
  {
    id: "all",
    name: "Tüm Evlerimiz",
    description: "Tetova Sapanca'nın 4 seçkin konaklama seçeneği",
    slug: "tum-bungalovlar",
  },
  {
    id: "platin",
    name: "Platin Villa",
    description: "En lüks ısıtmalı havuzlu & şömineli VIP villa",
    slug: "platin-villa",
  },
  {
    id: "gold",
    name: "Gold Bungalov",
    description: "Özel ısıtmalı havuzlu & jakuzili konsept",
    slug: "gold-bungalov",
  },
  {
    id: "silver",
    name: "Silver Bungalov",
    description: "Doğa içi verandalı & jakuzili konforlu bungalov",
    slug: "silver-bungalov",
  },
  {
    id: "bronz",
    name: "Bronz Bungalov",
    description: "Sıcak & samimi bahçeli doğa bungalovu",
    slug: "bronz-bungalov",
  },
];

export const MOCK_BUNGALOWS: Bungalow[] = [
  {
    id: "platin-villa",
    title: "Platin Villa",
    tagline: "Tetova Sapanca'nın En Lüks Isıtmalı Havuzlu & Jakuzili VIP Malikane Villası",
    subtitle: "Özel Isıtmalı Sonsuzluk Havuzlu & Şömineli Platin Villa",
    categoryId: "platin",
    capacity: 6,
    sqm: 150,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.99,
    reviewCount: 88,
    image: "/images/bungalows/platin-villa/1.jpeg",
    gallery: [
      "/images/bungalows/platin-villa/1.jpeg",
      "/images/bungalows/platin-villa/2.jpeg",
      "/images/bungalows/platin-villa/3.jpeg",
      "/images/bungalows/platin-villa/4.jpeg",
      "/images/bungalows/platin-villa/5.jpeg",
      "/images/bungalows/platin-villa/6.jpeg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🔥 4 Mevsim Isıtmalı Havuz", "🛁 VIP Açık Hava Jakuzi", "🔥 Odun Şöminesi", "🌿 %100 Korumalı Özel Bahçe", "🍳 Serpme Köy Kahvaltısı"],
    features: ["🔥 4 Mevsim Isıtmalı Havuz", "🛁 VIP Açık Hava Jakuzi", "🔥 Odun Şöminesi", "🌿 %100 Korumalı Özel Bahçe", "🍳 Serpme Köy Kahvaltısı"],
    featured: true,
    isFeatured: true,
  },
  {
    id: "gold-bungalov",
    title: "Gold Bungalov",
    tagline: "Isıtmalı Havuzlu & Panoramik Göl Manzaralı Gold Konsept Bungalov",
    subtitle: "Özel Isıtmalı Havuzlu & Jakuzili Gold Bungalov",
    categoryId: "gold",
    capacity: 4,
    sqm: 110,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.96,
    reviewCount: 62,
    image: "/images/bungalows/gold-bungalov/1.jpg",
    gallery: [
      "/images/bungalows/gold-bungalov/1.jpg",
      "/images/bungalows/gold-bungalov/2.jpg",
      "/images/bungalows/gold-bungalov/3.jpg",
      "/images/bungalows/gold-bungalov/4.jpg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🔥 Isıtmalı Havuz", "🛁 Jakuzi", "🍖 Özel Barbekü", "🌿 Geniş Çim Bahçe", "📶 Fiber Wi-Fi"],
    features: ["🔥 Isıtmalı Havuz", "🛁 Jakuzi", "🍖 Özel Barbekü", "🌿 Geniş Çim Bahçe", "📶 Fiber Wi-Fi"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "silver-bungalov",
    title: "Silver Bungalov",
    tagline: "Özel Jakuzili & Doğa İçi Verandalı Silver Konsept Bungalov",
    subtitle: "Doğa İle Baş Başa Jakuzili Silver Bungalov",
    categoryId: "silver",
    capacity: 3,
    sqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.93,
    reviewCount: 45,
    image: "/images/bungalows/silver-bungalov/1.jpg",
    gallery: [
      "/images/bungalows/silver-bungalov/1.jpg",
      "/images/bungalows/silver-bungalov/2.jpg",
      "/images/bungalows/silver-bungalov/3.jpg",
      "/images/bungalows/silver-bungalov/4.jpg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🛁 Özel Jakuzi", "🔥 Odun Şöminesi", "🌲 Orman Manzarası", "☕ Veranda & Dinlenme Alanı"],
    features: ["🛁 Özel Jakuzi", "🔥 Odun Şöminesi", "🌲 Orman Manzarası", "☕ Veranda & Dinlenme Alanı"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "bronz-bungalov",
    title: "Bronz Bungalov",
    tagline: "Sıcak & Samimi Doğa Konseptli Bronz Bungalov",
    subtitle: "Konforlu & Huzurlu Konaklama Sunan Bronz Bungalov",
    categoryId: "bronz",
    capacity: 2,
    sqm: 65,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.90,
    reviewCount: 34,
    image: "/images/bungalows/bronz-bungalov/1.jpg",
    gallery: [
      "/images/bungalows/bronz-bungalov/1.jpg",
      "/images/bungalows/bronz-bungalov/2.jpg",
      "/images/bungalows/bronz-bungalov/3.jpg",
      "/images/bungalows/bronz-bungalov/4.jpg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🌿 Özel Bahçe", "🔥 Ateş Çukuru & Barbekü", "📶 Fiber Wi-Fi", "🚗 Özel Otopark"],
    features: ["🌿 Özel Bahçe", "🔥 Ateş Çukuru & Barbekü", "📶 Fiber Wi-Fi", "🚗 Özel Otopark"],
    featured: false,
    isFeatured: false,
  },
];
