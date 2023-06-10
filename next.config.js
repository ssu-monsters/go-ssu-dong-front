/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  // menu redirect 관련 설정
  async redirects() {
    return [
      {
        source: '/apply',
        destination: '/apply/profile',
        permanent: false,
      },
      {
        source: '/recruit',
        destination: '/recruit/process',
        permanent: true,
      },
    ];
  },

  // svgr/webpack 관련 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // next/image 관련 설정
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cf-cpi.campuspick.com',
      },
      {
        protocol: 'https',
        hostname: 'search.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
      },
      {
        protocol: 'https',
        hostname: 'flexible.img.hani.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'img.seoul.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cee.snu.ac.kr',
      },
      {
        protocol: 'https',
        hostname: 'contents.kyobobook.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
      },
    ],
  },
};
