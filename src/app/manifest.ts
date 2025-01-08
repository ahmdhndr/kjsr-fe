import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "KJSR Indonesia",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f2faef",
    theme_color: "#1d3658",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "96x96",
        type: "image/x-icon",
      },
    ],
  };
}
