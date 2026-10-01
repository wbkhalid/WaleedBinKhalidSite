import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${profile.website}${path}`,
  }));
}
