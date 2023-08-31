module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/stats/:path*',
        destination: 'http://stats.mikecao.com/:path*',
      },
    ];
  },
};
