import AboutClient from "./About.client";
import { getTranslations } from "next-intl/server";

type MetaProps = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: MetaProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutMeta" });
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

const About = () => {
  return <AboutClient />;
};

export default About;
