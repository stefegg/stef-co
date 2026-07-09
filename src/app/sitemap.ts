import type { MetadataRoute } from "next";

const siteUrl = "https://www.stef-co.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/projects", "/contact"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
