import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://akhilvij.com/sitemap.xml",
    host: "https://akhilvij.com",
  };
}
