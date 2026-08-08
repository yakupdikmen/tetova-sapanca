export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "heating-pools",
    question: "Isıtmalı havuzlar 4 mevsim boyunca sıcak kalıyor mu?",
    answer: "Evet, özel ısıtmalı havuzlarımız akıllı ısı pompası sistemleri ile 4 mevsim boyunca 32°C - 34°C sabit sıcaklıkta tutulmaktadır. Kar yağarken dahi sıcak havuz keyfini güvenle yaşayabilirsiniz.",
    category: "Havuz & Jakuzi",
  },
  {
    id: "pet-policy",
    question: "Evcil hayvanımızla konaklayabilir miyiz?",
    answer: "Pati dostu seçili tesislerimizde evcil hayvan kabul etmekten mutluluk duyuyoruz. Rezervasyon aşamasında 'Evcil Hayvan Konaklama' opsiyonunu seçerek pati dostunuz için hazırladığımız bahçe ve yatak kitlerinden yararlanabilirsiniz.",
    category: "Konaklama Kuralları",
  },
  {
    id: "jacuzzi-hygiene",
    question: "Jakuzi ve havuz hijyeni nasıl sağlanıyor?",
    answer: "Her misafirimizin çıkışı sonrası tüm havuz ve jakuzilerimiz özel ozon ve klor filtrasyon sistemleri ile tamamen dezenfekte edilmekte, su değerleri günlük olarak sertifikalı uzmanlarımızca kontrol edilmektedir.",
    category: "Hijyen & Güvenlik",
  },
  {
    id: "cancellation",
    question: "Rezervasyon iptal ve tarih değişikliği koşulları nelerdir?",
    answer: "Giriş tarihine 7 gün kalaya kadar yapılan iptallerde %100 kesintisiz ücret iadesi yapıyoruz. 7 günden az kalan sürelerde ücretsiz tarih değişikliği hakkınız saklı tutulmaktadır.",
    category: "Rezervasyon",
  },
  {
    id: "checkin-checkout",
    question: "Giriş ve çıkış saatleri saat kaçtadır?",
    answer: "Standart giriş saatimiz 14:00, çıkış saatimiz ise 11:00'dir. Müsaitlik durumuna göre erken giriş veya geç çıkış taleplerinizi resepsiyonumuza önceden iletebilirsiniz.",
    category: "Konaklama",
  },
  {
    id: "breakfast-service",
    question: "Kahvaltı servisi saat kaçta veriliyor ve içeriği nedir?",
    answer: "Organik Sapanca lezzetlerinden oluşan serpme kahvaltınız her sabah 08:30 - 10:30 saatleri arasında sıcak ve taze olarak özel bungalov verandanıza servis edilmektedir.",
    category: "Hizmetler",
  },
];
