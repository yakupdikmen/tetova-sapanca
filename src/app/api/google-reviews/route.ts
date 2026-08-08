import { NextResponse } from "next/server";
import { GOOGLE_REVIEWS, GoogleReview } from "@/constants/reviews";

export const revalidate = 3600; // Önbellek: 1 saat

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({
      isLive: false,
      rating: 4.9,
      userRatingsTotal: 90,
      googleUrl: "https://maps.google.com",
      reviews: GOOGLE_REVIEWS,
      message: ".env.local içinde GOOGLE_PLACES_API_KEY veya GOOGLE_PLACE_ID bulunamadı.",
    });
  }

  // 1. DENE: Google Places API (New)
  try {
    const newApiUrl = `https://places.googleapis.com/v1/places/${placeId}`;
    const newRes = await fetch(newApiUrl, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews,googleMapsUri",
        "Accept-Language": "tr",
      },
      next: { revalidate: 3600 },
    });

    if (newRes.ok) {
      const data = await newRes.json();
      if (data && !data.error && (data.rating || data.reviews)) {
        const mappedReviews: GoogleReview[] = (data.reviews || []).map((rev: any, idx: number) => ({
          id: `new-rev-${idx}`,
          authorName: rev.authorAttribution?.displayName || "Google Kullanıcısı",
          authorAvatar: rev.authorAttribution?.photoUri || "",
          rating: rev.rating || 5,
          dateText: rev.relativePublishTimeDescription || "Yakın zamanda",
          reviewText: rev.text?.text || rev.originalText?.text || "",
          verified: true,
          googleReviewUrl: data.googleMapsUri || rev.authorAttribution?.uri || "https://maps.google.com",
        }));

        return NextResponse.json({
          isLive: true,
          source: "places_api_new",
          rating: data.rating || 4.9,
          userRatingsTotal: data.userRatingCount || mappedReviews.length,
          googleUrl: data.googleMapsUri || "https://maps.google.com",
          reviews: mappedReviews.length > 0 ? mappedReviews : GOOGLE_REVIEWS,
        });
      }
    }
  } catch (e) {
    console.warn("Places API (New) isteği başarısız oldu, Legacy API deneniyor...");
  }

  // 2. DENE: Google Places API (Legacy)
  try {
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total,url&key=${apiKey}&language=tr`;
    const legacyRes = await fetch(legacyUrl, { next: { revalidate: 3600 } });

    if (legacyRes.ok) {
      const data = await legacyRes.json();
      if (data.status === "OK" && data.result) {
        const result = data.result;
        const mappedReviews: GoogleReview[] = (result.reviews || []).map((rev: any, idx: number) => ({
          id: `legacy-rev-${idx}`,
          authorName: rev.author_name,
          authorAvatar: rev.profile_photo_url || "",
          rating: rev.rating || 5,
          dateText: rev.relative_time_description || "Yakın zamanda",
          reviewText: rev.text,
          verified: true,
          googleReviewUrl: result.url || "https://maps.google.com",
        }));

        return NextResponse.json({
          isLive: true,
          source: "places_api_legacy",
          rating: result.rating || 4.9,
          userRatingsTotal: result.user_ratings_total || mappedReviews.length,
          googleUrl: result.url || "https://maps.google.com",
          reviews: mappedReviews.length > 0 ? mappedReviews : GOOGLE_REVIEWS,
        });
      }
    }
  } catch (e) {
    console.warn("Places API (Legacy) isteği de başarısız oldu.");
  }

  // 3. FALLBACK: Gösterim verisi
  return NextResponse.json({
    isLive: false,
    rating: 4.9,
    userRatingsTotal: 90,
    googleUrl: "https://maps.google.com",
    reviews: GOOGLE_REVIEWS,
    error: "Google Cloud Konsolunda 'Places API (New)' veya 'Places API' hizmetini etkinleştirmeniz gerekmektedir.",
  });
}
