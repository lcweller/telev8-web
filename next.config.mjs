/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export — produces ./out/ that nginx serves directly.
  output: "export",
  images: {
    // Required for static export — Next image optimization needs a server.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
