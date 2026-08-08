import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tetova Sapanca | Lüks Isıtmalı Havuzlu VIP Bungalovlar",
  description:
    "Sapanca'da özel ısıtmalı havuzlu, jakuzili ve korumalı bahçeli VIP bungalov konaklama tesisi. Doğa ile baş başa lüks tatil deneyimi.",
  icons: {
    icon: "/tetova.svg",
    shortcut: "/tetova.svg",
    apple: "/tetova.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" hrefLang="tr" href="https://tetovasapanca.com/" />
        <link rel="alternate" hrefLang="en" href="https://tetovasapanca.com/?lang=en" />
        <link rel="alternate" hrefLang="ar" href="https://tetovasapanca.com/?lang=ar" />
        <link rel="alternate" hrefLang="x-default" href="https://tetovasapanca.com/" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
