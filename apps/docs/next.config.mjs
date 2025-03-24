/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: [
      "media2.dev.to",
      "tckh.daihoctantrao.edu.vn",
      "ijeecs.iaescore.com",
      "etasr.com",
      "pub.mdpi-res.com",
    ],
  },
};

export default nextConfig;
