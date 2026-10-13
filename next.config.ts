import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* 75 is the default; 90 for case study screenshots */
    qualities: [75, 90],
  },
};

export default nextConfig;
