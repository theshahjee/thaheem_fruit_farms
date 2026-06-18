import { brand } from "./brand";
import type { Variety } from "./varieties";

export const SITE_URL = "https://thaheemfruitfarms.com";

export const absUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: brand.name,
    legalName: brand.name,
    url: SITE_URL,
    logo: absUrl("/images/logo/logo.jpeg"),
    foundingDate: String(brand.foundedYear),
    sameAs: [brand.instagramUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: brand.phoneIntl,
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: brand.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-PK",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Farm", "FoodEstablishment"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: brand.name,
    image: absUrl("/og.jpg"),
    url: SITE_URL,
    telephone: brand.phoneIntl,
    email: brand.email,
    priceRange: "PKR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ghouspur Thaheem, Tehsil Kabirwala",
      addressLocality: "Khanewal",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.412,
      longitude: 71.864,
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Karachi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Multan" },
      { "@type": "City", name: "Faisalabad" },
      { "@type": "City", name: "Peshawar" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [brand.instagramUrl],
    foundingDate: String(brand.foundedYear),
    slogan: brand.tagline,
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: absUrl(t.path),
    })),
  };
}

export function productSchema(v: Variety) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": absUrl(`/varieties/${v.slug}/#product`),
    name: `${v.name} Mango — Export Quality`,
    image: [absUrl(`/images/varieties/photos/${v.slug}.jpg`)],
    description: v.description,
    brand: { "@type": "Brand", name: brand.name },
    category: "Fresh Mangoes",
    sku: v.slug,
    url: absUrl(`/varieties/${v.slug}/`),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Taste", value: v.taste },
      { "@type": "PropertyValue", name: "Harvest Season", value: v.season },
      {
        "@type": "PropertyValue",
        name: "Packaging",
        value: v.packaging.join(" / "),
      },
      { "@type": "PropertyValue", name: "Origin", value: "Multan, Pakistan" },
      { "@type": "PropertyValue", name: "Grade", value: "Export" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      url: absUrl(`/pre-booking?variety=${v.slug}`),
      priceCurrency: "PKR",
      seller: { "@id": `${SITE_URL}/#localbusiness` },
      areaServed: { "@type": "Country", name: "Pakistan" },
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function articleSchema(p: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    image: p.image ? absUrl(p.image) : absUrl("/og.jpg"),
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: "en-PK",
    author: { "@type": "Organization", name: brand.name },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absUrl(`/journal/${p.slug}/`),
  };
}
