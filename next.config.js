//*import type { NextConfig } from "next";*/

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    DOMAIN_ORIGIN: process.env.DOMAIN_ORIGIN,
  },
};

export default nextConfig;
