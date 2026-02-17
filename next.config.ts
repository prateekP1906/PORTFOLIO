import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <--- Forces Next.js to build static HTML files
  basePath: "/PORTFOLIO", // <--- MUST match your specific Repo name exactly
  images: {
    unoptimized: true, // <--- Required: allows images to show on GitHub Pages
  },
};

export default nextConfig;