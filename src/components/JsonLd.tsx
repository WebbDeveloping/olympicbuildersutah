import { site } from "@/content/site";
import { siteUrl } from "@/lib/seo";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    description:
      "Park City's premier licensed general contractor since 2000. Custom homes, remodels, kitchens, and baths.",
    url: siteUrl,
    telephone: `+1-${site.phone}`,
    email: site.email,
    areaServed: site.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Utah",
      },
    })),
    founder: {
      "@type": "Person",
      name: site.owner,
    },
    foundingDate: String(site.since),
    address: {
      "@type": "PostalAddress",
      addressRegion: "UT",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
