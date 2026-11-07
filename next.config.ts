import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["paperlab", "three", "@react-three/fiber", "@react-three/drei"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
