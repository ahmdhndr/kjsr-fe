import type { NextConfig } from "next";

import "./src/lib/env/client";
import "./src/lib/env/server";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io"
      }
    ],
  }
};

export default nextConfig;
