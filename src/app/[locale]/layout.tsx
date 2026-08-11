import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { RESORT_BASE_LOCATION } from "@/constants/destinations";
import { FAQ_ITEMS } from "@/constants/faq";
import { SEO_CONTENT } from "@/i18n/seo";
import { SUPPORTED_LOCALES, isLocale, type Locale } from "@/utils/locale";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://tetovasapanca.com";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "tr";
  const seo = SEO_CONTENT[locale];
  const canonicalPath = locale === "tr" ? "/" : `/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: seo.title,
      template: "%s | Tetova Sapanca",
    },
    description: seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        tr: "/",
        en: "/en",
        ar: "/ar",
        "x-default": "/",
      },
    },
    icons: {
      icon: "/tetova.svg",
      shortcut: "/tetova.svg",
      apple: "/tetova.svg",
    },
    openGraph: {
      type: "website",
      locale: seo.ogLocale,
      url: canonicalPath,
      siteName: "Tetova Sapanca",
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

function buildLodgingBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Tetova Sapanca Bungalov",
    description: SEO_CONTENT[locale].description,
    url: locale === "tr" ? BASE_URL : `${BASE_URL}/${locale}`,
    telephone: "+905337182524",
    email: "sapancatetova@gmail.com",
    image: `${BASE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESORT_BASE_LOCATION.address,
      addressLocality: "Sapanca",
      addressRegion: "Sakarya",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESORT_BASE_LOCATION.lat,
      longitude: RESORT_BASE_LOCATION.lng,
    },
    hasMap: RESORT_BASE_LOCATION.googleMapsUrl,
    sameAs: ["https://www.instagram.com/tetovasapanca/"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Isıtmalı Özel Havuz", value: true },
      { "@type": "LocationFeatureSpecification", name: "Özel Bahçe", value: true },
    ],
  };
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  const locale = rawLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="lodging-business-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLodgingBusinessJsonLd(locale)) }}
        />
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-amber-500 selection:text-white transition-colors duration-300">
        <LanguageProvider locale={locale}>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
