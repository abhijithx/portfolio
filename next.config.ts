import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — generates plain HTML/CSS/JS in the `out/` directory.
  // Required for Cloudflare Pages (no Node.js server on the edge).
  output: "export",

  // Trailing slash ensures Cloudflare Pages routes /about → /about/index.html correctly.
  trailingSlash: true,

  // Disable the X-Powered-By: Next.js header (also set in _headers for CF Pages).
  poweredByHeader: false,

  // Note: headers(), redirects(), rewrites() are NOT supported with output: 'export'.
  // Security headers are handled by public/_headers (Cloudflare Pages reads this natively).
};

export default nextConfig;
