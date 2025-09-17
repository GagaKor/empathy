import withPWA from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWAConfig(nextConfig);