import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // ✅ Turbopack 비활성화
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }; // ✅ 특정 모듈 로드 문제 해결
    return config;
  },
};

export default nextConfig;
