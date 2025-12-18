import type { NextConfig } from "next";


const isProd = process.env.NODE_ENV === "production";
const repoName = "candtsolution";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
