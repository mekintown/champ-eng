import type { MetadataRoute } from "next";

import { sitePaths, siteUrl } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePaths.map((path): MetadataRoute.Sitemap[number] => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
