const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-join-line')],
  },
})

const nextConfig = {
  target: 'serverless',

  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],

  cssModules: true,

  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  env: {
    VERSION: require('./package.json').version,
  },

  experimental: {
    redirects() {
      return [
        {
          source: '/blog/others/:path*',
          permanent: true,
          destination: '/posts/:path*',
        },
        {
          source: '/blog/others/:path*/',
          permanent: true,
          destination: '/posts/:path*',
        },
        {
          source: '/blog/js/:path*',
          permanent: true,
          destination: '/posts/:path*',
        },
        {
          source: '/blog/js/:path*/',
          permanent: true,
          destination: '/posts/:path*',
        },
        {
          source: '/blog/proxy/:path*',
          permanent: true,
          destination: '/posts/:path*',
        },
        {
          source: '/blog/proxy/:path*/',
          permanent: true,
          destination: '/posts/:path*',
        },
      ]
    },
  },
}

module.exports = withMDX(nextConfig)
