import type { MetadataRoute } from "next";
import { varieties } from "@/lib/varieties";
import { journal } from "@/lib/journal";

const SITE = "https://thaheemfruitfarms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-18");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/about/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/varieties/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/pre-booking/`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE}/farm-visit/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/journal/`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const varietyRoutes: MetadataRoute.Sitemap = varieties.map((v) => ({
    url: `${SITE}/varieties/${v.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const journalRoutes: MetadataRoute.Sitemap = journal.map((p) => ({
    url: `${SITE}/journal/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.55,
  }));

  return [...staticRoutes, ...varietyRoutes, ...journalRoutes];
}
