"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Clock, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { BlogPost, MOCK_BLOG_POSTS } from "@/constants/blogPosts";
import { useLanguage } from "@/contexts/LanguageContext";
import { localizedPath } from "@/utils/locale";

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export interface BlogSectionProps {
  posts?: BlogPost[];
}

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export const BlogCard: React.FC<BlogCardProps> = ({ post, className = "" }) => {
  const { t, language } = useLanguage();
  const postHref = localizedPath(language, `/blog/${post.slug}`);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={SPRING_TRANSITION}
      className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-white/80 dark:bg-stone-900/50 backdrop-blur-xl border border-amber-900/10 dark:border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] ltr:text-left rtl:text-right ${className}`}
    >
      <div>
        {/* Cover Image Container with Hover Zoom */}
        <Link href={postHref} className="block relative aspect-[16/10] overflow-hidden bg-stone-950">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-500"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

          {/* Category Badge Top-Left */}
          <div className="absolute top-4 ltr:left-4 rtl:right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold shadow-md">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{post.category}</span>
            </span>
          </div>
        </Link>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-3">
          {/* Date & Read Time */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-medium">
            <span>{post.date}</span>
            <span className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              {post.readTime}
            </span>
          </div>

          {/* Title (H3 for SEO) */}
          <Link href={postHref}>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white tracking-tight leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt (2 Lines Clamp) */}
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer: Author Details + Read Button */}
      <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-amber-900/10 dark:border-white/10 mt-auto">
        <div className="flex items-center gap-2.5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover border border-amber-900/10 dark:border-white/15 shadow-sm"
          />
          <span className="text-xs font-medium text-stone-700 dark:text-stone-300">
            {post.author.name}
          </span>
        </div>

        <Link
          href={postHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors cursor-pointer"
        >
          <span>{t("blog.readArticle")}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </motion.article>
  );
};

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts = MOCK_BLOG_POSTS,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#FAF8F5] dark:bg-stone-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-stone-900 dark:text-white border-t border-amber-900/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Decor Radial Orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 dark:bg-amber-950/20 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t("blog.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
            {t("blog.title")} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-rose-600 dark:from-amber-400 dark:via-orange-300 dark:to-rose-400">
              {t("blog.titleGradient")}
            </span>
          </h2>
          <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {t("blog.subtitle")}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
