export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Gezi Rehberi" | "Bungalov Yaşamı" | "Gurme & İkram" | "Aktiviteler";
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  content: string;
}

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "sapancada-hafta-sonu-gezilecek-yerler",
    title: "Sapanca'da Hafta Sonu Gezilecek En İyi 7 Doğal Cennet",
    excerpt: "Sapanca Gölü çevresindeki trekking yollarından Maşukiye şelalelerine, Kırkpınar sahilinden doğa yürüyüşü rotalarına kadar unutulmaz bir hafta sonu rehberi.",
    category: "Gezi Rehberi",
    readTime: "4 dk okuma",
    date: "24 Temmuz 2026",
    author: {
      name: "Tetova Sapanca",
      avatar: "/images/blog/sapanca-lake.jpg",
    },
    coverImage: "/images/blog/sapanca-lake.jpg",
    content: `
      <p>Marmara Bölgesi'nin en büyüleyici doğa kaçış noktalarından biri olan <strong>Sapanca</strong>, hem İstanbul'a hem de Kocaeli'ye yakınlığıyla hafta sonu tatillerinin vazgeçilmez rotası haline gelmiştir. Yeşilin her tonunu barındıran ormanları, durgun göl manzarası ve lüks konaklama seçenekleriyle unutulmaz bir deneyim sunmaktadır.</p>
      
      <h2>1. Sapanca Gölü Sahil Yürüyüş Yolu</h2>
      <p>Göl kenarında sabahın erken saatlerinde yapacağınız yürüyüşler veya bisiklet turları, şehrin stresinden uzaklaşmak için harika bir başlangıçtır. Kırkpınar sahil şeridi boyunca sıralanan ahşap iskeleler ve kafe alanları fotoğraf tutkunları için eşsiz kareler sunar.</p>

      <h2>2. Maşukiye Şelaleleri & Dere Kenarı Rotaları</h2>
      <p>Orman içinde akan serin dereleri ve şelaleleriyle Maşukiye, doğa sporu sevenler için idealdir. Burada ATV turlarına katılabilir, zipline heyecanı yaşayabilir veya dere kenarındaki restoranda alabalık ziyafeti çekebilirsiniz.</p>

      <h2>3. Kırkpınar Soğuksu Parkı & Çamlık Alanlar</h2>
      <p>Asırlık çam ağaçlarının gölgesinde piknik yapabileceğiniz Soğuksu Parkı, çim alanları ve sessiz atmosferiyle dinlenmek isteyen misafirlerin ilk tercihidir.</p>

      <h2>Öne Çıkan Doğa İpuçları</h2>
      <ul>
        <li><strong>En İyi Ziyaret Zamanı:</strong> Sonbaharda sararan yapraklar veya kışın kar altındaki bungalov ortamı.</li>
        <li><strong>Fotoğraf Spotu:</strong> Kırkpınar Soğuksu iskelesinde gün batımı saatleri.</li>
        <li><strong>Konaklama Önerisi:</strong> Özel ısıtmalı havuzlu VIP bungalovlar ile doğanın tadını 4 mevsim çıkarın.</li>
      </ul>
    `,
  },
  {
    id: "blog-2",
    slug: "4-mevsim-isitmali-havuzlu-bungalov-tatili",
    title: "4 Mevsim Isıtmalı Havuzlu Bungalov Tatili Koşulları & İpuçları",
    excerpt: "Kışın kar yağarken 34°C sıcaklıktaki ısıtmalı havuzda yüzmenin püf noktaları, mahremiyet standartları ve romantik konsept fikirleri.",
    category: "Bungalov Yaşamı",
    readTime: "5 dk okuma",
    date: "18 Temmuz 2026",
    author: {
      name: "Tetova Sapanca",
      avatar: "/images/blog/heated-pool-lifestyle.jpg",
    },
    coverImage: "/images/blog/heated-pool-lifestyle.jpg",
    content: `
      <p>Bungalov tatili denince akla ilk gelen konfor öğelerinden biri hiç şüphesiz <strong>özel ısıtmalı açık hava havuzlarıdır</strong>. Dört mevsim boyunca kesintisiz kullanılan bu sistemler, özellikle kış aylarında kar yağışını izlerken havuz keyfi yapma imkanı tanır.</p>

      <h2>Isıtmalı Havuzlar Nasıl Çalışır?</h2>
      <p>Özel havuz ısı pompaları ve jeotermal takviyeler sayesinde su sıcaklığı otomatik olarak 32°C - 34°C arasında sabit tutulur. Dışarıdaki hava sıcaklığı sıfırın altına düşse bile suyun sıcaklığı korunur.</p>

      <h2>Tam Mahremiyet & Korumalı Bahçe Alanı</h2>
      <p>Bungalovlarımızın etrafı yüksek ahşap çitler ve sarmaşıklar ile kapatılarak dışarıdan görünmeyecek şekilde izole edilmiştir. Muhafazakar aileler ve gözlerden uzak romantik kaçamaklar için %100 korumalı bir alan sunulmaktadır.</p>

      <h2>Bungalov Tatilinde Yanınıza Almanız Gerekenler</h2>
      <ul>
        <li>Bornoz ve yumuşak plaj havlusu (Havuz çıkışı için)</li>
        <li>Ateş çukuru başında okumak için sevdiğiniz kitaplar</li>
        <li>Açık hava sineması için mısır ve sıcak çikolata malzemeleri</li>
      </ul>
    `,
  },
  {
    id: "blog-3",
    slug: "sapancada-yoresel-kahvalti-ve-lezzet-duraklari",
    title: "Sapanca'nın En İyi Yöresel Kahvaltı ve Gastronomi Rotaları",
    excerpt: "Organik köy yumurtası, Sapanca balı, taze otlar ve otantik kiremitte alabalık lezzetleri sunan en seçkin restoran ve kahvaltı mekanları.",
    category: "Gurme & İkram",
    readTime: "3 dk okuma",
    date: "12 Temmuz 2026",
    author: {
      name: "Tetova Sapanca",
      avatar: "/images/blog/yoresel-kahvalti.jpg",
    },
    coverImage: "/images/blog/yoresel-kahvalti.jpg",
    content: `
      <p>Sapanca sadece doğasıyla değil, zengin mutfak kültürü ve zengin serpme kahvaltı mekanlarıyla da gurmelerin ilgisini çekmektedir.</p>

      <h2>Doğal Serpme Kahvaltı Mantığı</h2>
      <p>Yöredeki çiftliklerden günlük toplanan süt ürünleri, odun fırınından taze çıkan sıcak pişi ve börekler, köy yumurtaları ve ev yapımı reçeller sofranın ana ögeleridir.</p>

      <h2>Kiremitte Alabalık & Mantar Keyfi</h2>
      <p>Maşukiye dere kenarlarındaki ahşap lezzet mekanlarında eritme kiremit peyniri ve taze alabalık menülerini mutlaka deneyimlemelisiniz.</p>
    `,
  },
];
