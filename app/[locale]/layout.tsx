import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import "modern-normalize";
import "./globals.css";
import { getTranslations, setRequestLocale } from "next-intl/server";

type MetaProps = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: MetaProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LayoutMeta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("OG.title"),
      description: t("OG.description"),
      siteName: t("OG.siteName"),
      url: "https://mini-blog-ochre-eight.vercel.app/",
      images: [
        {
          url: "/mini-blog-page.avif",
          width: 1200,
          height: 630,
          alt: t("OG.image.alt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("OG.title"),
      description: t("OG.description"),
      images: ["/mini-blog-page.avif"],
    },
  };
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
