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
  price: number; // Price per night in TRY
  basePrice?: number;
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

export interface ExtraService {
  id: string;
  title: string;
  description: string;
  price: number;
  perNight: boolean;
  icon: string;
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
    price: 10500,
    basePrice: 10500,
    capacity: 6,
    sqm: 150,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.99,
    reviewCount: 88,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
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
    price: 7500,
    basePrice: 7500,
    capacity: 4,
    sqm: 110,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.96,
    reviewCount: 62,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
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
    price: 5500,
    basePrice: 5500,
    capacity: 3,
    sqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.93,
    reviewCount: 45,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
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
    price: 4000,
    basePrice: 4000,
    capacity: 2,
    sqm: 65,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.90,
    reviewCount: 34,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🌿 Özel Bahçe", "🔥 Ateş Çukuru & Barbekü", "📶 Fiber Wi-Fi", "🚗 Özel Otopark"],
    features: ["🌿 Özel Bahçe", "🔥 Ateş Çukuru & Barbekü", "📶 Fiber Wi-Fi", "🚗 Özel Otopark"],
    featured: false,
    isFeatured: false,
  },
];
