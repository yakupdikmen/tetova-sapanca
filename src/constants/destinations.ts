export interface DestinationCategory {
  id: "all" | "nature" | "activity" | "food" | "essentials";
  name: string;
  iconName: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  category: "nature" | "activity" | "food" | "essentials";
  categoryLabel: string;
  distance: string;
  durationMinutes: number;
  description: string;
  image: string;
  rating: number;
  googleMapsUrl: string;
  lat: number;
  lng: number;
  xPercent: number; // Position on interactive map view canvas (%)
  yPercent: number; // Position on interactive map view canvas (%)
}

export const RESORT_BASE_LOCATION = {
  name: "Tetova Sapanca Bungalov (Tesisimiz)",
  address: "Kırkpınar Soğuksu Mah. Bağdat Cd. Sapanca / Sakarya",
  lat: 40.6883377,
  lng: 30.1975338,
  googleMapsUrl: "https://www.google.com/maps/place/Tetova+Sapanca+Bungalov/@40.6883377,30.1949589,17z/data=!3m1!4b1!4m6!3m5!1s0x14cca742addd099d:0xa2c6bb62c910ee12!8m2!3d40.6883377!4d30.1975338!16s%2Fg%2F11w3mdlzpc?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D",
};

export const DESTINATION_CATEGORIES: DestinationCategory[] = [
  { id: "all", name: "Tümü", iconName: "Sparkles" },
  { id: "nature", name: "Doğa & Göl", iconName: "Trees" },
  { id: "activity", name: "Aktivite & Macera", iconName: "Compass" },
  { id: "food", name: "Gurme & Restoran", iconName: "Utensils" },
  { id: "essentials", name: "İhtiyaç & Çarşı", iconName: "ShoppingBag" },
];

export const DESTINATIONS: DestinationItem[] = [
  {
    id: "sapanca-lake",
    name: "Sapanca Gölü Sahil Yolu",
    category: "nature",
    categoryLabel: "Doğa & Göl",
    distance: "Tetova Bungalov'dan 4 dk (1.8 km)",
    durationMinutes: 4,
    description: "Yürüyüş ve bisiklet parkurları, göl kenarı kafeleri ve gün batımı manzarası sunan harika sahili.",
    image: "/images/bungalows/platin-villa/3.jpeg",
    rating: 4.9,
    lat: 40.6925,
    lng: 30.2012,
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&origin=${RESORT_BASE_LOCATION.lat},${RESORT_BASE_LOCATION.lng}&destination=40.6925,30.2012`,
    xPercent: 32,
    yPercent: 42,
  },
  {
    id: "masukiye-waterfall",
    name: "Maşukiye Şelaleleri & Dere İçi",
    category: "nature",
    categoryLabel: "Doğa & Göl",
    distance: "Tetova Bungalov'dan 8 dk (4.2 km)",
    durationMinutes: 8,
    description: "Coşkun akan dere kenarında alabalık tesisleri, çam kokulu yürüyüş yolları ve serinletici şelaleler.",
    image: "/images/bungalows/gold-bungalov/2.jpeg",
    rating: 4.8,
    lat: 40.7011,
    lng: 30.1284,
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&origin=${RESORT_BASE_LOCATION.lat},${RESORT_BASE_LOCATION.lng}&destination=40.7011,30.1284`,
    xPercent: 65,
    yPercent: 28,
  },
  {
    id: "atv-safari",
    name: "Sapanca ATV & Zipline Safari",
    category: "activity",
    categoryLabel: "Aktivite & Macera",
    distance: "Tetova Bungalov'dan 6 dk (3.1 km)",
    durationMinutes: 6,
    description: "Orman içi çamurlu parkurlarda heyecan dolu ATV motor turları ve nehir üzerinde zipline deneyimi.",
    image: "/images/bungalows/silver-bungalov/2.jpeg",
    rating: 4.9,
    lat: 40.6842,
    lng: 30.2210,
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&origin=${RESORT_BASE_LOCATION.lat},${RESORT_BASE_LOCATION.lng}&destination=40.6842,30.2210`,
    xPercent: 55,
    yPercent: 68,
  },
  {
    id: "sopeli-village",
    name: "Sopeli Doğal Yaşam & Gurme Köyü",
    category: "food",
    categoryLabel: "Gurme & Restoran",
    distance: "Tetova Bungalov'dan 10 dk (5.5 km)",
    durationMinutes: 10,
    description: "Akarsu üzerine kurulmuş ahşap çardaklarda nehir sesi eşliğinde meşhur Sapanca serpme kahvaltısı.",
    image: "/images/bungalows/bronz-bungalov/2.jpeg",
    rating: 4.9,
    lat: 40.6720,
    lng: 30.2450,
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&origin=${RESORT_BASE_LOCATION.lat},${RESORT_BASE_LOCATION.lng}&destination=40.6720,30.2450`,
    xPercent: 78,
    yPercent: 50,
  },
  {
    id: "kirkpinar-center",
    name: "Kırkpınar Çarşı & Eczane - Market",
    category: "essentials",
    categoryLabel: "İhtiyaç & Çarşı",
    distance: "Tetova Bungalov'dan 3 dk (1.2 km)",
    durationMinutes: 3,
    description: "7/24 açık süpermarketler, nöbetçi eczaneler, fırınlar ve butik hediyelik eşya dükkanları.",
    image: "/images/bungalows/platin-villa/4.jpeg",
    rating: 4.7,
    lat: 40.6865,
    lng: 30.1912,
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&origin=${RESORT_BASE_LOCATION.lat},${RESORT_BASE_LOCATION.lng}&destination=40.6865,30.1912`,
    xPercent: 22,
    yPercent: 62,
  },
];
