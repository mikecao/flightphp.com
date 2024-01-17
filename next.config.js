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
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://docs.flightphp.com/:path*',
        permanent: true,
      },
    ]
  },
};
