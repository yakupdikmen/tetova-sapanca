import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Sparkles, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MOCK_BLOG_POSTS } from "@/constants/blogPosts";
import { SUPPORTED_LOCALES, isLocale, localizedPath, type Locale } from "@/utils/locale";

interface BlogDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    MOCK_BLOG_POSTS.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const locale: Locale = isLocale(resolvedParams.locale) ? resolvedParams.locale : "tr";
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Rehber Bulunamadı - Tetova Sapanca",
    };
  }

  const canonicalPath = localizedPath(locale, `/blog/${post.slug}`);

  return {
    title: `${post.title} | Tetova Sapanca Rehber`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalPath,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }
  const locale = resolvedParams.locale;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-stone-950 font-sans antialiased text-stone-900 dark:text-stone-100 selection:bg-amber-500 selection:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href={localizedPath(locale, "/#blog")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Tüm Rehberlere Dön</span>
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-stone-500 dark:text-stone-400 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1 text-stone-500 dark:text-stone-400 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* TS Avatar Badge */}
            <div className="flex items-center gap-3 pt-4 border-t border-amber-900/10 dark:border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-400/40 text-white text-xs font-extrabold flex items-center justify-center shadow-md select-none">
                TS
              </div>
            </div>
          </header>

          {/* Hero Cover Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 border border-amber-900/10 dark:border-white/10 shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Body Content */}
          <div
            className="prose dark:prose-invert prose-amber lg:prose-xl max-w-none text-stone-700 dark:text-stone-200 leading-relaxed font-normal [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-stone-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Embedded CTA Reservation Card */}
          <div className="my-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-amber-50/80 to-orange-100/60 dark:from-stone-900 dark:via-stone-900/90 dark:to-amber-950/40 border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>ÖZEL LÜKS KONAKLAMA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white">
                Tetova Sapanca'da Hayalinizdeki Tatili Yaşayın
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                Isıtmalı özel havuzlu VIP bungalov seçkilerini inceleyin, hemen rezervasyon talebinde bulunun.
              </p>
            </div>

            <Link
              href={localizedPath(locale, "/#bungalows")}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              <span>Bungalovları İncele</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
