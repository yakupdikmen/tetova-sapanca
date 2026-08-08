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
  perNight: boolean; // true if multiplied by nights count, false if flat fee
  icon: string;
}

export interface SearchFilterState {
  checkIn: string;
  checkOut: string;
  guests: number;
  categoryId: string;
}

export const BOOKING_EXTRAS: ExtraService[] = [
  {
    id: "breakfast",
    title: "Organik Serpme Kahvaltı",
    description: "Yöresel lezzetlerle zenginleştirilmiş günlük serpme kahvaltı servisi",
    price: 750,
    perNight: true,
    icon: "Coffee",
  },
  {
    id: "bbq",
    title: "Barbekü & Şömine Yakma",
    description: "Tüm meşe odunları ve barbekü kömürü dahil hazırlık hizmeti",
    price: 450,
    perNight: false,
    icon: "Flame",
  },
  {
    id: "pet",
    title: "Evcil Hayvan Konaklama",
    description: "Pati dostunuz için özel yatak, mama kabı ve bahçe temizlik seti",
    price: 600,
    perNight: false,
    icon: "Dog",
  },
  {
    id: "jacuzzi_kit",
    title: "VIP Aromaterapi & Jakuzi Kiti",
    description: "Özel doğal banyo tuzları, organik yağlar ve tütsü seti",
    price: 500,
    perNight: false,
    icon: "Sparkles",
  },
];

export const BUNGALOW_CATEGORIES: BungalowCategory[] = [
  {
    id: "all",
    name: "Tüm Kategori Türleri",
    description: "Sapanca'nın en prestijli tüm konaklama seçenekleri",
    slug: "tum-bungalovlar",
  },
  {
    id: "jakuzili",
    name: "Jakuzili Lüks Bungalov",
    description: "Özel jakuzili, şömineli ve romantik konseptler",
    slug: "jakuzili-bungalovlar",
  },
  {
    id: "havuzlu-vip",
    name: "Isıtmalı Havuzlu VIP",
    description: "Dört mevsim özel ısıtmalı havuz keyfi",
    slug: "isitmali-havuzlu-vip",
  },
  {
    id: "gol-manzarali",
    name: "Panoramik Göl Manzaralı",
    description: "Sapanca Gölü'nün eşsiz manzarasına karşı lüks yaşam",
    slug: "panoramik-gol-manzarali",
  },
  {
    id: "tiny-loft",
    name: "Lüks Tiny House & Loft",
    description: "Modern minimalist mimari ve premium konfor",
    slug: "tiny-house-loft",
  },
];

export const MOCK_BUNGALOWS: Bungalow[] = [
  {
    id: "vista-1",
    title: "Vista Royal Heated Pool Villa",
    tagline: "4 Mevsim Özel Isıtmalı Sonsuzluk Havuzlu VIP Bungalov",
    subtitle: "Doğa İçinde Özel Isıtmalı Havuzlu Lüks Villa",
    categoryId: "havuzlu-vip",
    price: 8500,
    basePrice: 8500,
    capacity: 4,
    sqm: 125,
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.98,
    reviewCount: 64,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Dibektaş, Sapanca",
    amenities: ["🔥 Isıtmalı Havuz", "🛁 Jakuzi", "🌲 Orman Manzaralı", "🔥 Şömine", "🍳 Serpme Kahvaltı"],
    features: ["🔥 Isıtmalı Havuz", "🛁 Jakuzi", "🌲 Orman Manzaralı", "🔥 Şömine", "🍳 Serpme Kahvaltı"],
    featured: true,
    isFeatured: true,
  },
  {
    id: "vista-2",
    title: "Vista Jacuzzi & Garden Suite",
    tagline: "Özel Açık Hava Jakuzili & Barbekülü Romantik Suite",
    subtitle: "Doğa İçinde Özel Jakuzili Lüks Suite",
    categoryId: "jakuzili",
    price: 4800,
    basePrice: 4800,
    capacity: 2,
    sqm: 75,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.95,
    reviewCount: 48,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Kırkpınar, Sapanca",
    amenities: ["🛁 Özel Jakuzi", "🔥 Odun Şöminesi", "🌿 Özel Bahçe", "🍖 Barbekü", "📶 Fiber Wi-Fi"],
    features: ["🛁 Özel Jakuzi", "🔥 Odun Şöminesi", "🌿 Özel Bahçe", "🍖 Barbekü", "📶 Fiber Wi-Fi"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "vista-3",
    title: "Panorama Lake Dome Villa",
    tagline: "Sapanca Gölü Manzaralı Cam Kubbe & Yıldız İzleme Terası",
    subtitle: "Panoramik Sapanca Gölü Manzaralı Cam Kubbe & Loft",
    categoryId: "gol-manzarali",
    price: 6400,
    basePrice: 6400,
    capacity: 3,
    sqm: 90,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.92,
    reviewCount: 39,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Maşukiye Yolu, Sapanca",
    amenities: ["🌊 Göl Manzarası", "⭐ Cam Tavan Yıldız İzleme", "🔥 Şömine", "☕ Espresso Bar", "🏡 Teras"],
    features: ["🌊 Göl Manzarası", "⭐ Cam Tavan Yıldız İzleme", "🔥 Şömine", "☕ Espresso Bar", "🏡 Teras"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "vista-4",
    title: "Forest Loft Tiny Sanctuary",
    tagline: "Çam Ormanları Arasında Tasarım Tiny House & Sinema Bahçe",
    subtitle: "Çam Ormanları İle Çevrili Tasarım Tiny House",
    categoryId: "tiny-loft",
    price: 3900,
    basePrice: 3900,
    capacity: 2,
    sqm: 55,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.89,
    reviewCount: 27,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Yanık Köyü, Sapanca",
    amenities: ["🌲 Orman İçi", "🎬 Açık Hava Sinema", "🔥 Ateş Çukuru", " Hamak", "🚗 Özel Otopark"],
    features: ["🌲 Orman İçi", "🎬 Açık Hava Sinema", "🔥 Ateş Çukuru", " Hamak", "🚗 Özel Otopark"],
    featured: false,
    isFeatured: false,
  },
  {
    id: "vista-5",
    title: "Grand Vista Family Haven",
    tagline: "Geniş Aileler İçin Isıtmalı Havuzlu, Bahçeli & Jakuzili Malikane",
    subtitle: "Geniş Aileler İçin Isıtmalı Havuzlu & Bahçeli VIP Bungalov",
    categoryId: "havuzlu-vip",
    price: 11900,
    basePrice: 11900,
    capacity: 6,
    sqm: 160,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.97,
    reviewCount: 52,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Mahmudiye, Sapanca",
    amenities: ["🔥 Büyük Isıtmalı Havuz", "🛁 Jakuzi", "👨‍👩‍👧‍👦 6 Kişilik Aile", "🍳 Serpme Kahvaltı", "🌿 Geniş Çim Bahçe"],
    features: ["🔥 Büyük Isıtmalı Havuz", "🛁 Jakuzi", "👨‍👩‍👧‍👦 6 Kişilik Aile", "🍳 Serpme Kahvaltı", "🌿 Geniş Çim Bahçe"],
    featured: false,
    isFeatured: false,
  },
];
