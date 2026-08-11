export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export type Language = "tr" | "en" | "ar";

export const FAQ_ITEMS_BY_LOCALE: Record<Language, FaqItem[]> = {
  tr: [
    {
      id: "faq-1",
      question: "Isıtmalı havuzlar 4 mevsim boyunca sıcak kalıyor mu?",
      answer: "Evet, özel ısıtmalı havuzlarımız akıllı ısı pompası sistemleri ile 4 mevsim boyunca 28°C - 32°C sabit sıcaklıkta tutulmaktadır. Kar yağarken dahi sıcak havuz keyfini güvenle yaşayabilirsiniz.",
      category: "Havuz",
    },
    {
      id: "faq-2",
      question: "Giriş ve çıkış saatleri saat kaçtadır?",
      answer: "Standart giriş saatimiz 14:00, çıkış saatimiz ise 11:00'dir. Müsaitlik durumuna göre erken giriş veya geç çıkış taleplerinizi resepsiyonumuza önceden iletebilirsiniz.",
      category: "Konaklama",
    },
    {
      id: "faq-3",
      question: "Merkeze uzak mı?",
      answer: "Hayır, Sapanca merkeze sadece 5 dakikalık uzaklıkta, sahile 10 dakikalık uzaklıkta yer alıyoruz.",
      category: "Konum",
    },
  ],
  en: [
    {
      id: "faq-1",
      question: "Are the heated pools warm in all 4 seasons?",
      answer: "Yes, our private heated pools are maintained at a constant 28°C - 32°C year-round with smart heat pump systems. You can safely enjoy the warm pool even while it snows.",
      category: "Pool",
    },
    {
      id: "faq-2",
      question: "What are the check-in and check-out times?",
      answer: "Our standard check-in time is 14:00, and check-out time is 11:00. Subject to availability, you may submit requests for early check-in or late check-out to our reception in advance.",
      category: "Accommodation",
    },
    {
      id: "faq-3",
      question: "Is it far from the city center?",
      answer: "No, we are located just 5 minutes away from Sapanca center and 10 minutes away from the lakefront.",
      category: "Location",
    },
  ],
  ar: [
    {
      id: "faq-1",
      question: "هل المسابح دافئة على مدار 4 فصول؟",
      answer: "نعم، يتم الحفاظ على مسابحنا الخاصة المدفأة عند درجة حرارة ثابتة بين 28 و32 درجة مئوية طوال العام عبر أنظمة مضخات الحرارة الذكية. يمكنك الاستمتاع بالسباحة الدافئة حتى أثناء تساقط الثلوج.",
      category: "المسبح",
    },
    {
      id: "faq-2",
      question: "ما هي أوقات تسجيل الوصول والمغادرة؟",
      answer: "وقت تسجيل الوصول القياسي لدينا هو 14:00، ووقت المغادرة هو 11:00. بناءً على التوفر، يمكنك تقديم طلبات الوصول المبكر أو المغادرة المتأخرة إلى مكتب الاستقبال مسبقاً.",
      category: "الإقامة",
    },
    {
      id: "faq-3",
      question: "هل المكان بعيد عن المركز؟",
      answer: "لا، نحن نقع على بعد 5 دقائق فقط من وسط سبانجا و10 دقائق من الشاطئ.",
      category: "الموقع",
    },
  ],
};

export const FAQ_ITEMS: FaqItem[] = FAQ_ITEMS_BY_LOCALE.tr;

export function getFaqItems(locale?: string): FaqItem[] {
  if (locale === "ar") return FAQ_ITEMS_BY_LOCALE.ar;
  if (locale === "en") return FAQ_ITEMS_BY_LOCALE.en;
  return FAQ_ITEMS_BY_LOCALE.tr;
}
