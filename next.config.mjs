/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
// When deploying to GitHub Pages at https://<user>.github.io/<repo>/, the
// site is served from a sub-path. Set NEXT_PUBLIC_BASE_PATH at build time
// (the GitHub Actions workflow does this) or leave empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
