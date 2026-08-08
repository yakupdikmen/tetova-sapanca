import type { MetadataRoute } from "next";
import { MOCK_BLOG_POSTS } from "@/constants/blogPosts";
import { SUPPORTED_LOCALES, localizedPath } from "@/utils/locale";

const BASE_URL = "https://tetovasapanca.com";

function buildLanguageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = `${BASE_URL}${localizedPath(locale, path)}`;
  }
  languages["x-default"] = `${BASE_URL}${localizedPath("tr", path)}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", ...MOCK_BLOG_POSTS.map((post) => `/blog/${post.slug}`)];

  return SUPPORTED_LOCALES.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE_URL}${localizedPath(locale, path)}`,
      lastModified: now,
      changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: buildLanguageAlternates(path),
      },
    }))
  );
}
