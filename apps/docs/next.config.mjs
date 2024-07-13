/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/monorepo",
  assetPrefix: "/monorepo/",
  publicRuntimeConfig: {
    basePath: "/monorepo",
  },
};

export default nextConfig;
