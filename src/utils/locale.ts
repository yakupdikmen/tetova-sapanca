export const SUPPORTED_LOCALES = ["tr", "en", "ar"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Removes a leading /tr, /en or /ar segment from a pathname, if present. */
export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (maybeLocale && isLocale(maybeLocale)) {
    const rest = "/" + segments.slice(2).join("/");
    return rest.length > 1 ? rest.replace(/\/$/, "") : "/";
  }

  return pathname;
}

/**
 * Builds a path prefixed for the given locale. The default locale (tr) is
 * served unprefixed at the root, so it stays clean; en/ar get a /en, /ar prefix.
 */
export function localizedPath(locale: Locale, path: string): string {
  const cleanPath = path === "/" ? "" : path;
  if (locale === DEFAULT_LOCALE) return cleanPath || "/";
  return `/${locale}${cleanPath}`;
}
