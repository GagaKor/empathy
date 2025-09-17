import withPWA from "next-pwa";
import type { NextConfig } from "next";

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWAConfig(nextConfig);
