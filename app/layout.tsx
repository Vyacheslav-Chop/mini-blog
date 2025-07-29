import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

import "modern-normalize";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Blog — Welcome to Our Space",
  description:
    "Welcome to Mini Blog — your go-to place for thoughtful reflections, inspiring stories, and fresh perspectives.",
  openGraph: {
    title: "Mini Blog — Dive into Stories That Matter",
    description:
      "Discover inspiring stories, honest reflections, and fresh insights on Mini Blog — your space for meaningful content.",
    siteName: "Mini Blog",
    url: "",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
