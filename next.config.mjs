/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'valuable-fruit-5c7a696748.media.strapiapp.com',
        port: '',
        pathname: '**'
      }
    ],
  }
};

export default nextConfig;