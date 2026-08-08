import React from "react";
import Metadata from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Sparkles, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MOCK_BLOG_POSTS } from "@/constants/blogPosts";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return MOCK_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Rehber Bulunamadı - Sapanca Vista",
    };
  }

  return {
    title: `${post.title} | Sapanca Vista Rehber`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const post = MOCK_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>← Tüm Rehberlere Dön</span>
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author Bar */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-white/15 shadow-md"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
                <span className="text-xs text-slate-400">Sapanca Vista Gezi Editörü</span>
              </div>
            </div>
          </header>

          {/* Hero Cover Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Body Content */}
          <div
            className="prose prose-invert prose-emerald lg:prose-xl max-w-none text-slate-200 leading-relaxed font-normal [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Embedded CTA Reservation Card */}
          <div className="my-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>ÖZEL LÜKS KONAKLAMA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sapanca Vista'da Hayalinizdeki Tatili Yaşayın
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Isıtmalı özel havuzlu VIP bungalov seçkilerini inceleyin, anında fiyat simülasyonu yapın.
              </p>
            </div>

            <Link
              href="/#calculator"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              <span>Hemen Fiyat Hesapla</span>
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
