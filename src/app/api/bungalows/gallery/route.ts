import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FALLBACK_GALLERIES: Record<string, string[]> = {
  "platin-villa": [
    "/images/bungalows/platin-villa/1.jpeg",
    "/images/bungalows/platin-villa/2.jpeg",
    "/images/bungalows/platin-villa/3.jpeg",
    "/images/bungalows/platin-villa/4.jpeg",
    "/images/bungalows/platin-villa/5.jpeg",
    "/images/bungalows/platin-villa/6.jpeg",
    "/images/bungalows/platin-villa/7.jpeg",
    "/images/bungalows/platin-villa/8.jpeg",
  ],
  "gold-bungalov": [
    "/images/bungalows/gold-bungalov/1.jpeg",
    "/images/bungalows/gold-bungalov/2.jpeg",
    "/images/bungalows/gold-bungalov/3.jpeg",
    "/images/bungalows/gold-bungalov/4.jpeg",
  ],
  "silver-bungalov": [
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
  "bronz-bungalov": [
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
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bungalowId = searchParams.get("id");

  if (!bungalowId) {
    return NextResponse.json({ error: "Missing bungalow id" }, { status: 400 });
  }

  try {
    const dirPath = path.join(process.cwd(), "public", "images", "bungalows", bungalowId);

    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      const validImages = files
        .filter((file) => /\.(jpeg|jpg|png|webp|svg)$/i.test(file))
        .sort((a, b) => {
          const numA = parseInt(a, 10);
          const numB = parseInt(b, 10);
          if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
          return a.localeCompare(b);
        })
        .map((file) => `/images/bungalows/${bungalowId}/${file}`);

      if (validImages.length > 0) {
        return NextResponse.json({ images: validImages, isDynamic: true });
      }
    }

    const fallback = FALLBACK_GALLERIES[bungalowId] || [];
    return NextResponse.json({ images: fallback, isDynamic: false });
  } catch (err) {
    console.error("Error reading bungalow gallery directory:", err);
    return NextResponse.json({
      images: FALLBACK_GALLERIES[bungalowId] || [],
      isDynamic: false,
    });
  }
}
