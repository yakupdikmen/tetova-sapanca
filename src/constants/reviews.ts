export interface GoogleReview {
  id: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  dateText: string;
  reviewText: string;
  verified: boolean;
  googleReviewUrl?: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    authorName: "Ahmet Hakan Yılmaz",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    dateText: "2 hafta önce",
    reviewText: "Sapanca'da konakladığımız en lüks ve en temiz bungalov deneyimiydi. Isıtmalı havuzun sıcaklığı harikaydı, kış gününde havuz keyfi bambaşka. Güler yüzlü hizmet için tüm ekibe teşekkür ederiz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com",
  },
  {
    id: "rev-2",
    authorName: "Selin & Emre Kaya",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    dateText: "1 ay önce",
    reviewText: "Evlilik yıldönümümüz için Jakuzili VIP Suite tercih ettik. Şömine başında geçirdiğimiz vakit ve sabah verandamıza gelen zengin serpme kahvaltı unutulmazdı. Mahremiyet %100 sağlanmış.",
    verified: true,
    googleReviewUrl: "https://maps.google.com",
  },
  {
    id: "rev-3",
    authorName: "Burak Özkan",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    dateText: "3 hafta önce",
    reviewText: "Görsellerde ne görüyorsanız birebir aynısı hatta daha fazlası. Fiber internet hızı harikaydı, doğa içinde uzaktan çalışmak için harika bir ortam. 360 sanal tura bakarak tutmuştuk, tam beklediğimiz gibi çıktı.",
    verified: true,
    googleReviewUrl: "https://maps.google.com",
  },
  {
    id: "rev-4",
    authorName: "Zeynep Arslan",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    dateText: "1 ay önce",
    reviewText: "Ailecek 6 kişi Grand Vista VIP evinde kaldık. Bahçesi çok geniş, çocuklar için güvenli ve havuzu pırıl pırıldı. Sapanca'ya her geldiğimizde tek adresimiz artık burası.",
    verified: true,
    googleReviewUrl: "https://maps.google.com",
  },
  {
    id: "rev-5",
    authorName: "Mert Deniz",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    dateText: "2 ay önce",
    reviewText: "Panoramik göl manzaralı dome evde konakladık. Gece yatakta yıldızları izlemek muazzam bir duygu. İlgili ev sahibine ve 7/24 asistan hizmetine çok teşekkürler.",
    verified: true,
    googleReviewUrl: "https://maps.google.com",
  },
  {
    id: "rev-6",
    authorName: "Elif & Kaan Çelik",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    dateText: "2 ay önce",
    reviewText: "Evcil hayvanımızla birlikte kabul edildiğimiz için çok mutlu olduk. Pati dostumuz bahçede özgürce koştu. Hem lüks hem hayvan dostu bir tesis bulmak harika.",
    verified: true,
    googleReviewUrl: "https://maps.google.com",
  },
];
