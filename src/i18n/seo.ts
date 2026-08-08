import type { Locale } from "@/utils/locale";

interface LocaleSeoContent {
  title: string;
  description: string;
  ogLocale: string;
}

export const SEO_CONTENT: Record<Locale, LocaleSeoContent> = {
  tr: {
    title: "Tetova Sapanca | Lüks Isıtmalı Havuzlu VIP Bungalovlar",
    description:
      "Sapanca'da özel ısıtmalı havuzlu, jakuzili ve korumalı bahçeli VIP bungalov konaklama tesisi. Doğa ile baş başa lüks tatil deneyimi.",
    ogLocale: "tr_TR",
  },
  en: {
    title: "Tetova Sapanca | Luxury VIP Bungalows with Heated Pools",
    description:
      "A luxury VIP bungalow resort in Sapanca with private heated pools, jacuzzis and gated gardens. A five-star nature escape near Istanbul.",
    ogLocale: "en_US",
  },
  ar: {
    title: "تيتوفا صبانجة | بنغالوهات VIP فاخرة بمسابح مدفأة",
    description:
      "منتجع بنغالوهات VIP فاخر في سابانجا بمسابح خاصة مدفأة وجاكوزي وحدائق محمية. تجربة عطلة فاخرة في أحضان الطبيعة قرب إسطنبول.",
    ogLocale: "ar_AR",
  },
};
