import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tipmse-qr-1",
        destination: "/3-tipmse-qr-1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
