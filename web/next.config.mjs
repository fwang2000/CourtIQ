/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Proxy API calls to the FastAPI backend during local dev so the browser
  // talks to the same origin (mirrors CRA's old "proxy" field).
  async rewrites() {
    const api = process.env.API_PROXY_TARGET || "http://127.0.0.1:5000";
    return [{ source: "/api/:path*", destination: `${api}/:path*` }];
  },
};

export default nextConfig;
