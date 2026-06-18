import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://thaheemfruitfarms.com/sitemap.xml",
    host: "https://thaheemfruitfarms.com",
  };
}
