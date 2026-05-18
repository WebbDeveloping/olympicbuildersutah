import type { Metadata } from "next";
import { site } from "@/content/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://olympicbuildersutah.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | #1 General Contractor in Park City, Utah`,
    template: `%s | ${site.name}`,
  },
  description:
    "Olympic Builders — Park City's trusted general contractor since 2000. Custom homes, luxury kitchens, baths, and remodels. Call Lee Zenger for a free estimate.",
  keywords: [
    "Park City general contractor",
    "Park City home builder",
    "Park City remodeling",
    "Park City kitchen remodel",
    "Park City bathroom remodel",
    "Deer Valley contractor",
    "Summit County contractor",
    "Olympic Builders",
    "Lee Zenger contractor",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Park City's Premier General Contractor`,
    description:
      "Park City's trusted builder since 2000. New construction, kitchens, bathrooms, and home remodeling. Free estimates.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — Park City general contractor`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export { siteUrl };
