/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1' || process.env.NOW_BUILDER === '1';

const nextConfig = {
  reactStrictMode: true,
  ...(isVercel ? {} : { output: 'export' }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
