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
};
