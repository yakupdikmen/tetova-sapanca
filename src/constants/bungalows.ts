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
  price?: number;
  capacity: number; // Max guest count
  sqm: number; // Square meters size
  bedrooms: number;
  bathrooms: number;
  rating: number; // Star rating e.g. 4.98
  reviewCount: number;
  image: string; // Main card image URL
  gallery: string[]; // Additional gallery image URLs
  location: string;
  amenities: string[];
  features?: string[];
  featured?: boolean;
  isFeatured?: boolean;
}

export interface SearchFilterState {
  checkIn: string;
  checkOut: string;
  category?: string;
  categoryId?: string;
  guests?: number;
}

export const BUNGALOW_CATEGORIES: BungalowCategory[] = [
  {
    id: "all",
    name: "Tüm Bungalovlar",
    description: "Tetova Sapanca'nın tüm lüks konaklama seçenekleri",
    slug: "all",
  },
  {
    id: "platin",
    name: "Platin Villa",
    description: "4 Mevsim Isıtmalı Havuzlu & Panoramik Göl Manzaralı VIP Villa",
    slug: "platin-villa",
  },
  {
    id: "gold",
    name: "Gold Bungalov",
    description: "4 Mevsim Isıtmalı Sonsuzluk Havuzlu & Panoramik Göl Manzaralı",
    slug: "gold-bungalov",
  },
  {
    id: "silver",
    name: "Silver Bungalov",
    description: "4 Mevsim Isıtmalı Sonsuzluk Havuzlu & Panoramik Göl Manzaralı",
    slug: "silver-bungalov",
  },
  {
    id: "bronz",
    name: "Bronz Bungalov",
    description: "Panoramik Göl Manzaralı & Korumalı Bahçeli Doğa Bungalovu",
    slug: "bronz-bungalov",
  },
];

export const MOCK_BUNGALOWS: Bungalow[] = [
  {
    id: "platin-villa",
    title: "Platin Villa",
    tagline: "Tetova Sapanca'nın En Lüks 4 Mevsim Isıtmalı Havuzlu & Panoramik Göl Manzaralı VIP Malikane Villası",
    subtitle: "Özel 4 Mevsim Isıtmalı Havuzlu & Panoramik Göl Manzaralı Platin Villa",
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
      "/images/bungalows/platin-villa/7.jpeg",
      "/images/bungalows/platin-villa/8.jpeg",
      "/images/bungalows/platin-villa/9.jpeg"
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🔥 4 Mevsim Isıtmalı Havuz", "🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe"],
    features: ["🔥 4 Mevsim Isıtmalı Havuz", "🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe"],
    featured: true,
    isFeatured: true,
  },
  {
    id: "gold-bungalov",
    title: "Gold Bungalov",
    tagline: "4 Mevsim Isıtmalı Sonsuzluk Havuzlu & Panoramik Göl Manzaralı Gold Konsept Bungalov",
    subtitle: "Özel 4 Mevsim Isıtmalı Sonsuzluk Havuzlu & Panoramik Göl Manzaralı Gold Bungalov",
    categoryId: "gold",
    capacity: 4,
    sqm: 110,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.96,
    reviewCount: 62,
    image: "/images/bungalows/gold-bungalov/1.jpeg",
    gallery: [
      "/images/bungalows/gold-bungalov/1.jpeg",
      "/images/bungalows/gold-bungalov/2.jpeg",
      "/images/bungalows/gold-bungalov/3.jpeg",
      "/images/bungalows/gold-bungalov/4.jpeg",
      "/images/bungalows/gold-bungalov/5.jpeg",
      "/images/bungalows/gold-bungalov/6.jpeg",
      "/images/bungalows/gold-bungalov/7.jpeg",
      "/images/bungalows/gold-bungalov/8.jpeg",
      "/images/bungalows/gold-bungalov/9.jpeg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🔥 4 Mevsim Isıtmalı Sonsuzluk Havuzu", "🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe"],
    features: ["🔥 4 Mevsim Isıtmalı Sonsuzluk Havuzu", "🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "silver-bungalov",
    title: "Silver Bungalov",
    tagline: "4 Mevsim Isıtmalı Sonsuzluk Havuzlu & Panoramik Göl Manzaralı Silver Konsept Bungalov",
    subtitle: "Özel 4 Mevsim Isıtmalı Sonsuzluk Havuzlu & Panoramik Göl Manzaralı Silver Bungalov",
    categoryId: "silver",
    capacity: 4,
    sqm: 85,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.93,
    reviewCount: 45,
    image: "/images/bungalows/silver-bungalov/1.jpeg",
    gallery: [
      "/images/bungalows/silver-bungalov/1.jpeg",
      "/images/bungalows/silver-bungalov/2.jpeg",
      "/images/bungalows/silver-bungalov/3.jpeg",
      "/images/bungalows/silver-bungalov/4.jpeg",
      "/images/bungalows/silver-bungalov/5.jpeg",
      "/images/bungalows/silver-bungalov/6.jpeg",
      "/images/bungalows/silver-bungalov/7.jpeg",
      "/images/bungalows/silver-bungalov/8.jpeg",
      "/images/bungalows/silver-bungalov/9.jpeg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🔥 4 Mevsim Isıtmalı Sonsuzluk Havuzu", "🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe"],
    features: ["🔥 4 Mevsim Isıtmalı Sonsuzluk Havuzu", "🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "bronz-bungalov",
    title: "Bronz Bungalov",
    tagline: "Panoramik Göl Manzaralı & Samimi Doğa Konseptli Bronz Bungalov",
    subtitle: "Panoramik Göl Manzaralı & Konforlu Bronz Bungalov",
    categoryId: "bronz",
    capacity: 4,
    sqm: 65,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.90,
    reviewCount: 34,
    image: "/images/bungalows/bronz-bungalov/1.jpeg",
    gallery: [
      "/images/bungalows/bronz-bungalov/1.jpeg",
      "/images/bungalows/bronz-bungalov/2.jpeg",
      "/images/bungalows/bronz-bungalov/3.jpeg",
      "/images/bungalows/bronz-bungalov/4.jpeg",
      "/images/bungalows/bronz-bungalov/5.jpeg",
      "/images/bungalows/bronz-bungalov/6.jpeg",
      "/images/bungalows/bronz-bungalov/7.jpeg",
      "/images/bungalows/bronz-bungalov/8.jpeg",
      "/images/bungalows/bronz-bungalov/9.jpeg",
      "/images/bungalows/bronz-bungalov/10.jpeg",
    ],
    location: "Kırkpınar Soğuksu, Sapanca",
    amenities: ["🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe", "📶 Fiber Wi-Fi"],
    features: ["🌅 Panoramik Göl Manzarası", "🔥 Ateş Çukuru & Barbekü", "🌿 %100 Korumalı Özel Bahçe", "📶 Fiber Wi-Fi"],
    featured: false,
    isFeatured: false,
  },
];
