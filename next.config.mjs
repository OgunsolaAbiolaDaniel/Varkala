/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d19m59y37dris4.cloudfront.net",
        port: "",
        pathname: "/varkala/2-1/img/**",
      },
    ],
  },
};
  
  export default nextConfig;
  