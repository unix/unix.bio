const isProd = process.env.NODE_ENV === 'production'
const cdnPrefix = process.env.CDN_PREFIX || ''

if (isProd && cdnPrefix) {
  console.log(`> [unix.bio] You have customized the CDN prefix: ${cdnPrefix}.\n`)
}

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-join-line')],
  },
})

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],

  generateEtags: false,

  poweredByHeader: false,

  assetPrefix: isProd ? cdnPrefix : '',

  env: {
    VERSION: require('./package.json').version,
  },

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
}

module.exports = withMDX(nextConfig)
