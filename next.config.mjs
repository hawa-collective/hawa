/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      // you can add other custom webpack configurations here if needed
      return config;
    },
  };
  
  export default nextConfig;
  