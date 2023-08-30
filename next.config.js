module.exports = {
  async rewrites() {
    return [
      {
        source: '/stats/:path*',
        destination: 'http://umami.mikecao.com/:path*',
      },
    ];
  },
};
