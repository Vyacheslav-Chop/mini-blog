import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import "modern-normalize";
import "./globals.css";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Mini Blog — Welcome to Our Space",
  description:
    "Welcome to Mini Blog — your go-to place for thoughtful reflections, inspiring stories, and fresh perspectives.",
  openGraph: {
    title: "Mini Blog — Dive into Stories That Matter",
    description:
      "Discover inspiring stories, honest reflections, and fresh insights on Mini Blog — your space for meaningful content.",
    siteName: "Mini Blog",
    url: "https://mini-blog-ochre-eight.vercel.app/",
    images: [
      {
        url: "/mini-blog-page.avif",
        width: 1200,
        height: 630,
        alt: "Mini Blog — Inspiring Stories & Fresh Perspectives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Blog — Dive into Stories That Matter",
    description:
      "Discover inspiring stories, honest reflections, and fresh insights on Mini Blog — your space for meaningful content.",
    images: ["/mini-blog-page.avif"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <TanStackProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TanStackProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
