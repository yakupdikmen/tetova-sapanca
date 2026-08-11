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
    id: "Ci9DQUlRQUNvZENodHljRjlvT25WNFdUQmtWVkZLVVVGdVUwVlNibUZPUkhobVRIYxAB",
    authorName: "kübra gül",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKvM6sM1yCDujN5PWcXsGLjMj03ZI0wNrWGevKesMk9RUgtNQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir ay önce",
    reviewText: "Gitmeye karar verdiğimiz andan itibaren çok ilgililerdi. Manzarası çok güzel…ayrıca pırıl pırıl, çok temiz Bu bizim için önemliydi. Bir diğer konu bungalovlar konakladığımız bungalov‘u görmüyor gayet muhafazakardı. Düşünenlere şüphesiz tavsiye ederiz. İyiki Tetova’yı tercih ettik 🙌🏻🌸",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2pRNVRFZFljVFpYWkVKV1NsaEtWV3R2VjJkT1lrRRAB",
    authorName: "Pinar Altintas",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKgXPlsdWr_hKcvQmrLNUc9-EaMlLA9FJitEuLx5jxQIcdK5A=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir ay önce",
    reviewText: "Almanya'dan tatil için geldik ve Sapanca Tetova Bungalov'u tercih ettik. İlk kez geleceğimiz için bizi evde ve çevrede neyin beklediğini bilememenin küçük bir endişesi vardı. Ancak daha ilk andan itibaren tüm endişelerimiz tamamen ortadan kalktı.\nBungalov hem oldukça korunaklıydı hem de göl manzarası gerçekten muhteşemdi. Tesettürlü olduğumuz için rahat edebilmek bizim için çok önemliydi ve bu konuda hiçbir sıkıntı yaşamadık. Gönül rahatlığıyla tatilimizi geçirdik.\nEvin temizliği kusursuzdu, her şey özenle hazırlanmıştı. Sunulan hizmet, ilgi ve misafirperverlik de harikaydı. Doğayla iç içe, huzurlu ve keyifli bir tatil geçirdik. Her şeyiyle beklentimizin çok üzerindeydi. Gönül rahatlığıyla herkese tavsiye ediyoruz. Tekrar gelmeyi şimdiden sabırsızlıkla bekliyoruz. Her şey için çok teşekkür ederiz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2t4TmEza3RTMUZ0VHpkaU1VRnVSM2RqUjJKbE5IYxAB",
    authorName: "a b",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLpz7xaMyVhsG-W-Xf-TiJ5Y07kf7wJWGAMH8b7zRApjDOemw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "5 ay önce",
    reviewText: "Anlık kararla rezervasyon yaptırdım, sonuna kadar değdi. Bu güzel coğrafyaya yakışır özenle projelendirdikleri güzel evlerinde ailem ile huzurlu ve güzel 3gün geçirdik. Sıcak havuzun hijyeni,ısısı, bahçe manzara herşey harikaydı. Misafirleri için her türlü detay düşünülmüş odalar eşyalar tekstil mutfak herşey tertemizdi.\nAyrıca candan samimi ve nazik yaklaşımları için Cenap beye teşekkür ediyorum 🌺",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21Gc09HUnRjbFl5ZGpBNFRUTjVkMVEwVm1GTmRtYxAB",
    authorName: "Şeyda Gül Kızılay",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocI3rXCMPeaUINhRH51lId0RkmWHMPFD64OwnxVJ5m7qlBDusw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "4 ay önce",
    reviewText: "2 gece konakladık. Gayet memnun kaldık. Manzarası, sakinliğiyle evin içi de dışıda çok güzel dizayn edilmiş ve dış dünyayla bağlantınızı kesiyor. Her mevsim ayrı güzellikler sunacağını düşünüyorum. Biz eşimle yağmurlu günlerde kafa dinledik. Arkadaşlarımızla ve ailemizle de gelmek istiyoruz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2taNWRGTlRRM1ZXVGs1Uk1UQlBTRmx4ZVZWV2JuYxAB",
    authorName: "Kübra Güçlü",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIyPmwFL7N-NFdm2Vn9rSayJ5vfSjSf3AQ_fpfhdYjyclOsQg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "3 ay önce",
    reviewText: "Şuan halalarım, kuzenlerim, çocuklar platin villada tatil yapıyoruz. Evin genişliği, konforu, temizliği, evin büyük olması vs. beklentilerimizi tamamen karşıladı. Çok keyifli bir tatil yapıyoruz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xGek9YcDJSVXB4TWpobWQzWkJiamRUWTIxR1IwRRAB",
    authorName: "S. YILMAZTÜRK",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjX0YC4WlIJoMz9cyFfiBdgbDYhpm86sLwHqYrowzmIajLQZ-00K=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "3 ay önce",
    reviewText: "Anneler günü hediyesi olarak konakladığım tesiste tahsis edilen evler için iç donanım kadar mahremiyet düşünülmüş oldukça profesyonel hizmet vermekte balkan göçmeni olarak adını ekstra sevdim kendimi balkanlarda tatil yapıyor gibi hissettim tavsiye ederim .",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21WSlYwMDNUREZCVDNsd09GVkVTekp0UkZCbWVuYxAB",
    authorName: "Gulsah Zor",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLiSEAMhxmXGB9XdyPn4Ley5jFbXek_eaO2FurKtjqjFyDdjw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "3 ay önce",
    reviewText: "Şuanda tetova villadayiz çok keyifli bir tatil geçiriyoruz. Evin temizliği, Emin Beyin ilgisi, bahçenin düzeni dizaynı herseyden çok memnun kaldık.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21jd1oxTlRUM1JxTUhKU2NIbEhhVGhMUlhKaGRrRRAB",
    authorName: "Zehra Ersoy",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjVUSUJoEZwQbVDI2dWOURp3f3y5-5NGywf1fYG7eQb5N9RgeDuk=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "6 ay önce",
    reviewText: "Eskişehir'den ara tatilde 2 günlüğüne gittik.Çok temiz,göl manzarali ve sicacikti. Havuz sıcaklığı da süperdi.Sahipleri 3 kardeş olan Cenap Bey ,Cem Bey ve ablaları Melek Hanım çok ilgilendiler.Çok keyifli 2 gün geçirdik.Tesekkür ediyor,kendilerine bereketli kazançlar diliyoruz🙏",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2psR09YJnJWRkF3WHkxaFVFdGxUSE5rWkRGa1ZtYxAB",
    authorName: "Incilay Biçen",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocINmNQK_4NIZTEl1TuurtiUR5sVP1L2qUIZ-FAd8JPSNHx44A=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "5 ay önce",
    reviewText: "24-26 Ocak tarihlerinde ailece çok güzel vakit geçirdik. Konum olarak merkeze yakın. İstediğiniz her şeye çok kolay ulaşabiliyorsunuz. Konforunuz için her şey en ince ayrıntısına kadar düşünülmüş. Mutfakta bütün ekipmanlar var ve çok temiz. İçiniz rahat bir şekilde kullanabiliyorsunuz. Bahçesi ve izole oluşu harika. Sıcak su havuzu güzel, asla üşümüyorsunuz. Bizim ilk deneyimimizdi ve çocuklar inanılmaz eğlendi. Yine geleceğiz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2t3NWRubFRZUzFJT0doNmFYWlVhV2RKTm1kT2VWRRAB",
    authorName: "Sena Demen",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIF-aJRVDN01nephr7jKQQ_tDYy4__vb-Vjsbk9iF6Q9SEUFw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "3 ay önce",
    reviewText: "Gerçekten çok güzel 5 yıldız değil 10 yıldızı hakediyor doyamadık bir daha geleceğiz\nİnşaAllah kalabalık olmamıza rağmen çok rahat ettik çok konforlu her şey düşünülmüş çok teşekkür ederiz🙏🏻❤️",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT204NE9XUnBWR05MTkZKNVZsUTJPRGh5WTNWeVZYYxAB",
    authorName: "Ramis Sipahiler",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLvX9yuWtrP8PnAjeBhSAVqHBNReFNBzcAIScgXSnH3Sv3rBg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "3 ay önce",
    reviewText: "Şuan platin villadayız çok güzel ve keyifli bir tatil geçiriyoruz. Çok memnun kaldık her konuda kesinlikle tavsiye ederiz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2tsMVVGOVVkMk5vYlhWTlF6aE5iVnBoWDB4T2IzYxAB",
    authorName: "Emre Tuncer",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjxyOOeLdxSx7HANa7Otvh1m7cM5YjpCSY4f7nXSrWQKCKCw=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "5 ay önce",
    reviewText: "Güvenilir, temiz harika bir işletme. Kendinizi evinizde hissedeceğiniz korunaklı havuzu temiz sıcak şehir merkezine arabayla 3 dakika mesafede",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21pUlYwZFFTRE5qT0UwMGVGUXhPSFY1VVhkTk9WRRAB",
    authorName: "Emin Olcay",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKUy1Ak6dt1BfvkKL5cL6v5hWVpJrAJuRc76ddWp0QakXV5Lg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "6 ay önce",
    reviewText: "Ailemle birlikte konaklama yaptık işletme sahipleri çok ilgili kendi evinizde gibi hissettiriyorlar bronz bungolovda kaldık herşey çok güzeldi tertemiz tam aile yeri konum olarak çok merkezi bir yerde göl manzaralı vede ihtiyac duyduğunuz herşeye ulaşabiliyorsunuz ilginiz için çok teşekkür ederiz ailem olarak en kısa zamanda tekrar görüşmek üzere",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xoeWFVWjNZV1JWVmpZd1psRmhaWFJmWlVOVk5HYxAB",
    authorName: "Sait Gh",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKIKO35K3nS8smZETLVcic_veUKwF8UDL4tYE-C19-ncukBsA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "5 ay önce",
    reviewText: "İran'dan Geldik ve mükemmel bir tesiste kaldık . Tertemiz manzara muhteşem tavsiye ederim herşey için teşekkürler 🙏",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21sb1RISndUM2hKTTFKblgySmZkbmxhTW1wMFJtYxAB",
    authorName: "Memo Sari",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJR3oIRnX3oyeIeadV5ORGCLIFjg8VH46Eaf1w9ukSHxwcGKA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "5 ay önce",
    reviewText: "Eşimle bir gittigim en güzel bungalov olabilir sahipleri cok iyi ve yardımseverler normal evde bulabiliceğiniz tüm aracgereçler bulunmakta şehir merkezine cok yakın tavsiye ederim🙂",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xKRU9XeEdRM0ZoZWsxU1pWaHZRVm81ZUhaU2IyYxAB",
    authorName: "SAMET Kaplan",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjW4jAx4qNmdDLTzn0a6w9zt7d_NGb32zEbpRswIxZLo5kO4o7KI=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "9 ay önce",
    reviewText: "Temiz bakımlı bir yer kesinlikle tavsiye ederim kafa dinlemek için çok güzel bir tesis yağmurlu havalarda veranda da oturmak için büyük şemsiyeler de olursa kusursuz diyebilirim bir de havuz suyu derecesi yükseltiliyorsa tadından yenmez denebilir kahvaltı için Göl evi önerisi için ayrıca teşekkür ederim.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT25jeFptOUhOSEYyV0c5VlRuWTNVek5mY2pKRWJtYxAB",
    authorName: "Melis Özalp",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUVERrFtlYKSHrJ7yS_ztKIKT9ul8xwy1fqu6UNSDPCSCGUOL7xuw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "10 ay önce",
    reviewText: "Her şey harikaydı. Tam bir aile yeri. Gerçekten çok memnun kaldık. Bungalov tertemizdi, ihtiyacınız olabilecek her şey vardı. Manzarası çok güzeldi, sıcak havuz sayesinde akşam bile keyifle girdik. Ailece gönül rahatlığıyla gelebileceğiniz huzurlu bir ortam.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21ONk5rcERhR3hKYlhjMlIwZGhkV1JwVjNkNWFsRRAB",
    authorName: "Tanju ÇİLİNGİR",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIVSICwA4E_jAh2afDLtB5QNQa3HZfVarVCzyhKBIwdYEI7wA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "8 ay önce",
    reviewText: "Mükemmel bir işletme . Bronz bungalowda kalmama rağmen diğer bungalovlarıda gezme fırsatım oldu. Hepsi aynı titizlikte tertemiz . Hepsinin manzarası farklı güzel. Bize hiç bir eksiklik çektirmediler personeller güler yüzlü samimi buradan İşletme sahibi cenap beye teşekkürlerimi iletiyorum.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2tKdmVWaG5OR0ZJTlRabmRGaGhaMkpMTjBGaVlrRRAB",
    authorName: "Sümeyye Yurtbaşı",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLagxoMxFaE8f8De-X0QPVKki45SOBJngrKGT1t3atpPdfxNA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Bronz Bungalov’da harika bir konaklama deneyimi yaşadık. İçerisi tertemizdi, hijyen konusunda gönül rahatlığıyla tercih edebilirsiniz. İşletme sahipleri son derece ilgili ve misafirperverdi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2s5eFNIbGhlbFpGVjNRMmMzZHdhVE5UV1hCWlVFRRAB",
    authorName: "Cansu çınar",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjVBqAPFisQkF0CDuoLVuiDRhiMyu6KJ7UpwYNYRSyoJ8QkGYVSl=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "8 ay önce",
    reviewText: "Haftasonu için gitmiştik, ilginiz alakanız için çok teşekkürler. Ev temizdi her şey düşünülmüş. Biz villa platinde kaldık, bahçesi zaten aşırı büyüktü. Muhafazakar aileler özellikle tercih edebilir.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2pkSmRIUXhSVzQ1YmpGRWFsbHROVXRwTVZkWlowRRAB",
    authorName: "Elif Ödüm",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocK5MyEFBI4VPXZtsYbQe2roLQcuAD5e4IFnfquWInPnvOcnJvc=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "9 ay önce",
    reviewText: "Her şey çok güzeldi eksik yoktu her yer tertemizdi ateş vs yardımcı oldular çok iyi ilgilendiler bir daha kesinlikle geliriz",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VKYmNxcFhXMGVueHR3RRAB",
    authorName: "berat ünal",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjXVNhNIf_wBVlfwU2VQsc3V2Uhv0WlIL8xWVHBAm7WTAsmdcB-qQg=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Öncelikle Cenap beye teşekkür ediyorum ilk günden son güne kadar ilgisi işletmeçiliği gerçekten çok iyi biliyor. Ankara’dan tatil için gittiğimiz Sapanca’da çok keyifli ve güvenli bir tatil yaptık.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2taelFrVkRPRXBmWWxkdWJVZE1TRTlKVEV4YVFsRRAB",
    authorName: "Elif Sevinç",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJg6fXNCn2oyQfY8pW4jtkDpEBoWvO49NGIJ0vMvZPw2-a8Xg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "Silver bungalovda 4 günlük bi konaklama deneyimimiz oldu arkadaşımın tavsiyesi ile geldim ve iyi ki gelmişiz dediğimiz çok güzel bi tatil oldu ben ve ailem için, her şeyi ile çok memnun kaldık sonsuz tavsiyedir 🙏",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2s5TGJHY3dSV1ZOUlhSeFgzRjJhVGRhV25GYU1VRRAB",
    authorName: "Ayhan ÇELİK",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjWM22MHTjwAh3xZgFaVB17IljwXZNIPAkl8KWluJbsoAd3-9zwi=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "9 ay önce",
    reviewText: "2 günlük hafta sonu tatilimizde tetova Yı seçtik. Evler oldukça ferah ve temiz. Cenap beyin ilgi ve alakasından dolayı çok teşekkür ederiz. Ve manzarası inanılmaz huzur verici.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT25aR2FEaGlWMWwwY0ZjNVVFNVdkVU5ZYlhGNGVYYxAB",
    authorName: "Burçak Özaydın",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjV28KfpjNdwiQNBQVNRH4L890eaJdCTX5hNBVg-rXU7DpyYUDM=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "9 ay önce",
    reviewText: "Bronz bungalovda konakladık. Her şey harikaydı içerisi tertemizdi ve sıcacıktı… ihtlyacınız olan bütün mutfak malzemeleri kahve mak çay mak hepsi mevcut çok keyifliydi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21WRVVDMTBRVFJZTUZCWU56Z3pja05vVTFsbVFsRRAB",
    authorName: "Hasan Hüseyin Pınar",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKNURB3WlZisgGPrpzxQadbULcfpIaLPAHsvasCeYfFNnN_nc8=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "3 gün Silver Bungalovda konakladık. Sağ olsunlar her konuda yardımcı oldular herhangi bir eksik yoktu. Temizliği ve kahvaltısı gayet yeterliydi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2pka1VETnJlVFJFY2kxWFVsbG9ORll4ZGtwSmEwRRAB",
    authorName: "Ömer Derin",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjVN2FEeZN_caRqQKjoJDPXmBcGI2muXZrGnnlMjTYLRtCEN3kL1lw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Merhabalar bende ailemle tetova sapanca. Bungalov tercih ettim gerçekten cok memnun kaldık gerek tesisiin temizliğe vermis olduklari obem inanin benim gozumde 5 yıldızdan fazla ve manzarası hersey cok muazzamdi",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21KR1EzVmtOR0p1Y21OMWExWXpNMWxuWTI5dVRWRRAB",
    authorName: "Zahide Yilmaz",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjU6OjgNkzi1snZXrrkMD4KtxC_SrnqESov3Ku61zc4ed8epetmf=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Temizliği tertip düzen harikaydı sahibi Cem bey çok ilgili ve misafir perverdi çalışan Yahya bey çok yardımcı oldu eksiklerimiz ile ilgili çok güzel bir tatil oldu",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT201aVRGaDZUa2gzVVZGNlptcDFYM0p4TXpOM00wRRAB",
    authorName: "Filiz Sinek",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIbYGl10YebueBP8r6sjEMvQtg99d3G3QT-iGUOJMEpcahUvw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Herşey harikaydı temizlık düzen samimiyet güler yüz çok eğlenceli günler geçirdik bizi getiren canım arkadaşım zahide sanada çok Teşekkür ederiz cem bey tekrar görüşmek dileğiyle.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VPR09pUHVQbW9IeFNBEAE",
    authorName: "Sevilay Sari",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKUiSPtPiyheO3XCu04XN1Yxm0lYrJF7sXAl6XTpIsU0_n3vA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Harika bir yer iyi ki sizi tercih etmişiz. Şu zamanda güvenilir bir Bungalov tatili yapmak çok zor. Arkadaşlarımla konakladım çok güzel muhafazakar . Manzarası muhteşem, konumu harika ve kapınıza market siparişi geliyor olması mükemmel bir şey.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xkR2FtMWlOM1ZETms1R1UzQkhlbWxhYlRNMU1FRRAB",
    authorName: "Muharrem Albayrak",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjWuJd0EdNlWLcPuRSn7R2U8h-yD91caHnyxUs2DdUTRvVQe050=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Herkese tavsiye edebileceğim cok güzel tertemiz muhteşem manzarali cok ilgili bir yer..Aracimiz olmadığı icin bizi Sapanca merkezden Cenap bey alip getirdi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURmMnVEVl93RRAB",
    authorName: "Büşra Önder",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUWsx-qOTLDbkmfu6xZDAiQR9JCamy6jpCNh9hzSmbARr21QX0a=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "3 aile olarak gittik ve çok memnun kaldık her sorumuza anında cevap verdiler. Evin içi tertemiz yerden ısıtma sayesinde sıcacıktı. Havuzun sıcaklığı çok iyiydi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21VNVpWa3dXVkYzTjIxMU0xTnlOa0o1U0VoSldIYxAB",
    authorName: "Tuğba ALPAY",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUi7fXjRBCgBVjkcLb9D2DmR6gIyElG4grn77jEw4QNWAnSmn3V=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "Tetova Sapanca Bungalovda ailemle birlikte harika bir tatil geçirdik. Tertemizdi gönül rahatlığıyla gelebilirsiniz biz çok memnun kaldık herkese tavsiye ederim.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSURIaHBiNGVBEAE",
    authorName: "tuba öner çakmak",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjW4seh7U-qDUDC6clgRuUviuUtBQZhMIGqp5oIrRK1oeGQWZbqFeQ=w72-h72-p-rp-mo-ba12-br100",
    rating: 4,
    dateText: "bir yıl önce",
    reviewText: "Tam bir aile yeri. Temiz demek haksızlık olur tertemiz, nezih,çok ferah gezdiğimiz bungalo evlerde özellikle yatak odalarının basık ve evlerin nem kokmasından dolayı çok rahatsızlık duymuştuk aksine mis gibi kokuyor korunaklılığı çok iyi tesettürlü olduğumdan dolayı benim için rahat etmem çok önemliydi hiç sıkıntı yaşamıyorum.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT205R2FVRjFUVUZZYUVOVFJtZFVkMjQ1TkZSSldVRRAB",
    authorName: "İchigo Jaamu",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJaqPG2-kwtMR6Q3it3MFKUXJBusNevYjv1TxoZ6K_raWfrZg=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "8 ay önce",
    reviewText: "Tertemizdi. İki günlük kaçamağımızın bu kadar güzel geçmesini beklemiyorduk. Harika bir tesis. Kedileri de çok tatlı. Çok teşekkür ederiz",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2pCbmVGSkVkMUZxVGs5emFTMDFObXBvVTJaUWFFRRAB",
    authorName: "Fatma Tarakci",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocL_ku8GH5o66Bl-bVrvODfQblg5eEd965jZga_Wre-EZZfzeg=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Villada 2 gun kaldık ve tek kelimeyle hersey harikaydı bi kere tertemiz ve bu benim için en önemli kriter göl manzaralı cok hoş bir yer ....sahipleri guleryuzlu ve ilgili hepsine teşekkür ediyoruz cok memnun kaldik",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURYbElfT25BRRAB",
    authorName: "osman şen",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJAyWHRMmX7IOkCuKtAKowkVdRdINuHaMy8adrYOBLWE6ZELw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Geçen hafta 3 gece 4 gündüz ailem ile konakladık . Gerçekten çok güzel keyifli bir tatil geçirdik . Güvenilir , muhafazakar , çok güzeldi . Cem beye çok teşekkür ediyorum . Gönlünüz rahat aileniz ile gidebileceğiniz , tertemiz , korunaklı bir tesisi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSURmMm9EUEJ3EAE",
    authorName: "Hamdi önder",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjWYDdr6Kxq5haYkcrToxcsNhaNW7OujOGJ7eEGTq7pN58uz9gcvaQ=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "6 kişi 3 aile platin isimli evde konakladık. Emin bey ilgilisi, alakası, desteği ve misafirperverliği çok iyiydi, memnun kaldık. Isıtmalı havuzu, mangal ve bahçe alanları çok güzel/yeterliydi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSUQzNXVEa2dnRRAB",
    authorName: "Alper AVANAS",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUK1V4tx-4pyV5pwFNl4Zy_JpdG1COgBllIsVoyVZ00UHfOx2Oi=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Kesinlikle yine gideceğim bir tatildi. Odalar özenle döşenmiş ve herşey düşünülmüş, sıcak havuzu efsane gece dahil tüm gün çıkmadık, manzarası ise olay herkese tavsiye ediyorum.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2w5SmExVndaMjlWUTI5SmQzWm1hR280U1ZOb1RWRRAB",
    authorName: "Nizam sel",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjWXs9PphfdCfTZX0RlzQGD0Qm1VQr0Yax4H4ZkI2tQZ0jgAOm2-BA=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "Aileniz ile keyifli rahat bir tatil geçirmek istiyorsanız tam yeri bungalov içerisinde ihtiyacınız olabilecek Her şey düşünülmüş cenap bey ve cem beye çok teşekkürler ediyorum",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2tkWGJtOURVRk4zTUdsdGEwOVBhM0J1WnpkVFJrRRAB",
    authorName: "Ş. C.",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIoPNggsAZG7TJ4hrjjyRrXRNm_Fi6TlaSxJW6q_1XqR1rzq_k=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "Platin villada 2 gece konakladık.. geniş bahçe,sıcak havuz,rahat ve temiz ..büyük ailelerin çok rahat konaklayabileceği bir yer... Huzurlu, sakin ,, manzara ve tatil..",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURmMnFhUXdnRRAB",
    authorName: "Ferdi Öz",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjVZkWfLyJD92Yl3C8oEHy1avgc1zA1eYq5R7viJtKL5Vw13fZGA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Ailece çok güzel vakit geçirdiğimiz nezih yerlerden bir tanesi. Kesinlikle ailece gidilmesi gereken yerlerden birisi. Sunulan hizmetlerin tatmin edici ve çalışanların güler yüzlü olması ayrıca mutlu edici.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2pkS1MxQjZiRnB5U25kdmNuY3hNRUp2T1RGVFRsRRAB",
    authorName: "emel bozkus",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKjrhzoLZj_M1jkbGNa-xuMgE5Zs4_HXLAFmQ8zrSeYOOkIOw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "10 ay önce",
    reviewText: "Çok ilgili ve anlayışlı bir işletme güzel temiz bir ortam. çocuklar için bronz daha uygun biz çok rahat ettik fiyatda uygun herşey için teşekkürler 🤍",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2t3elpYQjRlbFpNWlcwM2NFWTNkV3BUU2paVVVWRRAB",
    authorName: "İsmail Canbaz",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocK6F0rhCNvbYY-z3QtgTC40g-hq4SEBu_jpd_KVS5Ubtg6ivQ=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "cem ve canab beye çok teşekkür ediyoruz fiyata göre temizlik ve hijyen konusunda kendi evimizde gibi hissettirdiler dilerim hep böyle çalışkan temiz misafirperverlikleri devam ederHerkese tavsiye ederim",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURQMU1yTXdnRRAB",
    authorName: "uguratilgan88",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjWwCNGtWNO5QPvJZe5RGHEGzSlvjOHiJWhm8esH02n-AwNdhEl4=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Harika bir bungalov deneyimi oldu bizim için dışarısı buz gibi olmasına rağmen havuz sıcaklığı mükemmeldi. Ailece problem yaşamdan güvenle kalabilecegibiz bir aile işletmesi hersey icin tesekkur ederiz bir dahaki seferde gorusmek uzere",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnTURvNXVIajdnRRAB",
    authorName: "FATİH DOĞAN",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocI_yXBwsB5A9k3RWUWuXDI0mW0s3Gj5PLNTDpA8Hmo4-8nX6A=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Harikaydı çok güzel bir dinlenme yeri temizliğiyle ilgili arkadaşlarıyla her şeyi başlı başına düşünülmüş bir bungalov deneyimi yaşadık Cem beye Aryıca Çok Teşekkür ederim kesinlikle tekrarı olacaktır.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSURmNnJxaEdREAE",
    authorName: "furkan yüksel",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKDtOJhBLymWmWV3E__6f7xdxvESlpFtt1hzHicCPhrhkb9Ew=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Arkadaşlarımızla birlikte haftasonu kaldık çok güzel çok beğendik ailenizle birlikte rahatlıkla gidebileceğiniz biryer ev çok temizdi havuz çok güzel ve sıcaktı ihtiyaçlarımızla alakalı çok hızlı cevaplar aldık çalışanlar güleryüzlü ve ilgiliydi.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2t4NE4zVmxlSEZHZEc1Zk5XcFVha0p2ZUZOVWIzYxAB",
    authorName: "Ergül Karagöz",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKjDjDzSmfs1FbEDJ1MiIVWsgoqr0fOCU9mW7eB6OBz4JSy4Q=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Tetova daha önce de ziyaret ettiğimiz ve memmun kalıp tekrar geldiğimiz bir yer temizliği konforu ve sahiplerinin misafirperligi için özellikle cem bey ve yahya beye çok teşekkürler.Gitmeyi düşünenlere tavsiye ederim.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VOU1pqWnFXZ2Y3ZzRnRRAB",
    authorName: "Selma Oruçoğlu",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUAFjGSys4vbrGtvoAxpnUtOd7lwP_csAd3FD-gYV2PnrAWrNHQvw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Gittiğim en güzel bungalov evi en güvenilir en kaliteli,arkadaşlarımla güzel eğlendik 😁adamlar işinin ehlinde oldukları için muazzam yapmışlar ve çok ilgileliler 🥰 çok teşekkürler @tetovasapanca 🤍🤍 yine gelicez 😍",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUNMNjRfT0xnEAE",
    authorName: "Berk Can",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUUbdsFkrX115Wum2uROEMN1N3IWtGuA8n6LIhJHGjJxBhnsRc=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "2 yıl önce",
    reviewText: "Gitmeden önce tereddütlerim vardı fakat her şeyiyle mükemmel. Ailemle birlikte konakladık. Harika bir deneyimdi. Özellikle ilgi alaka ve hizmete bayıldık. Çok nezih, aileleri ağırlayan bir yer. Mutlaka gitmelisiniz.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT214Q09XaFFMVTFwTUZBdFIyOVJRVE5pVkV0NFFtYxAB",
    authorName: "zühre lus",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjXtW1oVHuUlYaZ4HgoikNzoV9ienNhhl3Jjp2C5Y8W24w2OoPQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "9 ay önce",
    reviewText: "İstanbul’dan az biraz uzaklıkta,çok güzel çok temiz ve çok hijyen bir ortam.çok keyif aldık tavsiye ederim,Teşekkürler.Sapancatetova👏🏼👏🏼👏🏼🌺",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VKS2ItNzc5cnF1bmN3EAE",
    authorName: "Rabia Önal",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKF3hKyMOCYqSE7nVIw-ufyGNhMuq6fkGwvwDQUWOqaGxdfGA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "her şeyi çok keyifliydi gold evde kaldık genişliği çok yeterli. her konuda yardımcı oldular ulaşım için destek oldular güvenilir bir yer tavsiye ederiz kesinlikle.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSURQMHJQalNREAE",
    authorName: "Güven Alüste",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjU8PiayuadCUWXpeen3hvJen-rSBHo8gNFW5rzmb5jCrYAAEjI=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Eşimle ve bebeğimle birlikte muhteşem bir tatil geçirdik , inanılmaz temiz bir tesis, bebeklere özel park yatak olması da aşırı cezbediciydi..\nbebekle gidilebilecek nadir yerlerden diyebilirim. teşekkürler tetova Sapanca…",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnTUNnOElXMEd3EAE",
    authorName: "Hüseyin Sağlam",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjU7Y5Vu5y93wqVyxKWzLe0OUbwTZUgJdLZo8EZULa0e21U8-NZD9Q=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Eşim ve çocuklarım ile temiz bir yer arıyordum tavsiye üzerine geldim Firma sahipleri güler yüzlü Bungalov içi temizdi Çocuklarım olduğu için temizlik konusunda çok titiz baktım etrafa gayet iyi temizlenmişti Havuz sıcak ve temizdi Genel olarak durumu beğendim.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUNfOVBUT2F3EAE",
    authorName: "Yunus Emre DEDE",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLZ4HoagF11GMhn-N2TqBkCASvZbv9lTlNr4uz2nveHqRJpKg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Verdiğiniz parayı sonuna kadar hak eden sorunsuz bir işletme havuzun sıcaklığı mekanın temizliği her şey mükemmeldi",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSUQzdS1IQ3h3RRAB",
    authorName: "Zeliha Bayramoğlu",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIdeLvrYWNU8d2Tpr6e4qCfw8FHKB_PWd1U2B0_8kr13rMo1w=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Hayatımda gördüğüm en güzel manzarası olan bir mekan tereddüt etmeden muhakkak tercih edebilirsiniz o kadar güzel ilgilendiler ki iç mekanı olsun dışarısı olsun çok temiz havuz sıcacık içerisi sımsıcak adeta huzur veren bir ortama sahip Sapanca da tek tercih edebileceğimiz yer olarak kaldı tekrar görüşmek üzere her şey için teşekkür 🙏",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT21Ga1JUWmxTbEpXVjBaM2FsVkJaVVp6Y20xWVIwRRAB",
    authorName: "Ali Altun",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJL66K7_Nz5xtEelY3-5YMjEsYuuHjcqSd6wE_uu-tQe0efAm4=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "11 ay önce",
    reviewText: "Aılemizle birlikte gittik çocuklar çok eylendi temiz ve saygı ile karşıladılar memnun kaldık emin ve cenap bey e teşekkür ederiz🙏",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnTURBdGFtamFBEAE",
    authorName: "Erdeniz Yildirim",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUZxMyHmtZciDR21pmnpqZeJ-TvHfNGt1OXx88xvfSsYDQr25Rz=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Kullanılan malzemeler gayet kaliteli. İşletmeciler zaten bir piyasa var ne yapsan gider kafasında değiller. Gayet ilgililer. Ortam gayet güzel.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VINnJwYmoxaWZMUWpnRRAB",
    authorName: "elif Bilici",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJ-2zw3G5zTBy2XZHBYNU8Wobl1muhDqbKekvWk1uiYaQVIUA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "İlginiz alakanız ihtiyaç halinde desteğinizden ötürü çok teşekkür ederim. Gönül rahatlığıyla tavsiye edebileceğimiz çok kıymetli insanlar her şey için teşekkürler",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUNrX3BYckJnEAE",
    authorName: "Mustafa hızır",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJMzinEE9q-Go8EOs2BvQJsWJyS4Lf5dfryXnZDULAskVf0Og=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "2 yıl önce",
    reviewText: "Ailemle yapmış olduğum ziyarette temizliğine ve müşterilere yaklaşımlarına hayran kaldım. Artık sapancadaki evim olarak orayı görebilirim. İlginiz dürüstlüğünüz ve titizliğiniz için çok teşekkür ederim.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2twTlJGRlNhaTFXYW5KWU5UQkpiRTFMVVY5b1JHYxAB",
    authorName: "Hakan Koca",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjWqMv_FGnzPvg4BGNc6WsnTMbf0cFRVg_NO2L42soYRUZ74wHw1=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "10 ay önce",
    reviewText: "Temiz güzel hoş bir ortam, işletme sahibi ellerinden gelen özveriyi gösteriyor.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2s5MmEzQkdZbFp5TVhFd1FqRXhZbUZuWnpRNFJWRRAB",
    authorName: "Merve Özkan",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUjMo64qgd3srS9nnBMILdTj3QKyrTvxb2cCTmXGlA9XhixpOG5bg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "8 ay önce",
    reviewText: "Tertemiz, A'dan Z'ye her şey düşünülmüş aşırı keyifli iki gün geçirdik her şey için teşekkür ederiz",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2tvMFVGcEVZMUZFV21GMldIRmpWbWd3VUVReVYzYxAB",
    authorName: "Vural Akgül",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIxhKgQT8OGhYr5PXcR-_1HSTJHkXvUasSuHRX3M-yc5ZhRRw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Gittiğimiz en güzel en büyük en kaliteli yerdi. İlgi alaka temizlik vs tam puan aldı bizden",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSUQzd2JYTWl3RRAB",
    authorName: "hayal avanaş",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJrBMC6WzIB6D7bVGdyeWavD3mg_eH07UOvCAVpR9MAc-f9=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "İlgili,misafirperver,temiz bir bungalov sahipleri. Şık,güzel,sıcacık odalar hoş manzara… sayenizde sapanca tatilimiz güzel geçti çooooook teşekkürler",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xaWlNtbDJaVWhoYldwdFQycGZaRmxNUm5vNE5IYxAB",
    authorName: "Helin Karataş",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIuXIROXazq9fYM6d47iiYeMeLeuYe4Ie3ain93RMfXv0CMUw=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "9 ay önce",
    reviewText: "Çok beğendik eksik hiçbir şey yoktu her şey yeni ve tertemizdi kesinlikle yine geleceğiz",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUNMMjl5M0dnEAE",
    authorName: "melike Korkudur",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIfCkcR6kMewRHcl3cCnEU0EKbP-IUSuZJ0wnXE1owpphjJUQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "2 yıl önce",
    reviewText: "Güvenilir, gayet temizdi. Her şeyden memnun kaldık tam bir aile bungalovu. Çok güzeldi memnun kaldık ☺️",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VKbWQ1LWVOOF82aENnEAE",
    authorName: "Özlem Öztürk",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocIk00sukM11su6KwF36V81Oo0eXnYDBJULzs51byjcrFio-DA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Çok güzel keyifli sessiz ve güzel bi ortam ailemle çok güzel vakit geçirdik kesinlikle tavsiye ederim",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJNngtWkdWcnZpYTBRRRAB",
    authorName: "Azime Tepe",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUsxZcD9f3sYBAtX3y_BwtUBq8NSMhF_F3NBymYsq8GOHQ6XCk=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Mükemmel bir yerdi, ilgi alakalı çok iyiydi. Her yer tertemiz düzgündü. Tavsiye ederim.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VNVEk4dE8zLXBUWE93EAE",
    authorName: "Emine Sağlam",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKEkRMDeeHBrC0rA_nVnqKpP247U1JL8xNbA50a1oibvC-iZA=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "ailemizle geldik çok güzel ve eğlenceli geçti kesinlikle bu güzel yere gelmenizi tavsiye ediyorum",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VOdkFqdWJ3enRULXJ3RRAB",
    authorName: "Rukiye Öztürk",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocImofbVy1xltzwJmCiRkBrBkQXFwpK6n3dmynrWBCwsuisUMg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Ailemizle haftasonu dinlenmeye geldik çok güzel ve temiz bir yer kesinlikle tavsiye ederim",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURQMHNuaXpBRRAB",
    authorName: "Seray er",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLWRZHpFnurjxGh007iDHMsVrP0YOovvskIda9PBO4YNK7NdQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Gerçekten mükemmel bir yer gittim ve harika vakit geçirdik 1 yaşında bebegımle gittim gayet korunakli bir yer herkes gitmeli ilgi akala mükemmeldi her istediğimiz anında yerine geldi cok tesekkürler",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2xCUWRrUmFTVVJLVGxaVVlqQkxOM1J3Y0ZwR2NtYxAB",
    authorName: "Levent Özüdoğru",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjVhIT3Xef60G3ATvpD0HJivv6ZgrA5h02L08h5E5lZ_TrmZVN4=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Bungalov deneyimine farklılık getirmişler. Başarılı güler yüzlü esnaf",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChZDSUhNMG9nS0VJQ0FnSUQzdTVHU2RnEAE",
    authorName: "cansu Koçak",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJ2zSMXuwO-aKHkcVD8bwzIBBtSOx-TXUqxtg2-MNHkmGBWQg=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Çok güzel ferah huzur veren bir yer ailecek ve arkadaşlarınızla güzel vakit geçirebileceğiniz güvenilir bir yer tavsiye ederim",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VJQ0FnSURQMHUzOF9BRRAB",
    authorName: "Volkan Demirbaş",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjUtIA7LvooukIqQIxjowzFR86wQKIq9RU7kOm-Zx0KQ37UUHESE=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "2 GECE AİLEMLE KONAKLADIM ÇOK TEREDDÜHT ETMİŞTİM SOĞUK OLURMU DİYE FAKAT HİÇ UMDUĞUM GİBİ OLMADI BEKLEDİĞİMİN DAHA ÜSTÜNDE SICACIK BİR ORTAMDI VE TERTEMİZDİ.ŞİDDETLE TAVSİYE EDİYORUM İLGİ VE ALAKADAN DOLAYI TETOVA AİLESİNE SONSUZ TEŞEKKÜRLER",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VNWEZ0b0t4MXRidWtBRRAB",
    authorName: "Alperen Makul",
    authorAvatar: "https://lh3.googleusercontent.com/a-/ALV-UjVGkpQ8IuvaAwgzmO90HLoS138ejdG8FWNJJTHKs2VYiBJ8Bcxt=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "İşletmeci değil abi resmen, herşey için teşekkür ederim",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "Ci9DQUlRQUNvZENodHljRjlvT2kxaldETTVUMGhZTkVnMGVrVndaWGQzZFRndGQyYxAB",
    authorName: "Semih Kalkan",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLvIu1uSypK0gHtgJZpQNcxRWBReGfrGRAZEkUeR2nA1kBPb5c=w72-h72-p-rp-mo-ba12-br100",
    rating: 5,
    dateText: "7 ay önce",
    reviewText: "Güzel, temiz, başarılı.",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  },
  {
    id: "ChdDSUhNMG9nS0VNNkJqT2JDdTc3dXdnRRAB",
    authorName: "dilek çırtlık",
    authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocJxknuplbwBw6KR-18NXnpwbm0KwqfsWA5N-nww2f7NfoIWQQ=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateText: "bir yıl önce",
    reviewText: "Gayet memnun kaldık çok güzeldi 🌸",
    verified: true,
    googleReviewUrl: "https://maps.google.com/?cid=11729268312487554578"
  }
];
