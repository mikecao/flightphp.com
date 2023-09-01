module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/stats/:path*',
        destination: 'https://stats.mikecao.com/:path*',
      },
    ];
  },
};
