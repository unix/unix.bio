import Head from 'next/head'
import BLOG from '../blog.config'
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { getDNSPrefetchValue } from 'lib/data-transform'
import ThemeConfigProvider from 'lib/components/theme-config-provider'
import { ZEITUIProvider, useTheme, CSSBaseline } from '@zeit-ui/react'
import useDomClean from 'lib/use-dom-clean'

const Application = ({ Component, pageProps }) => {
  const theme = useTheme()
  const [themeType, setThemeType] = useState('light')
  const domain = useMemo(() => getDNSPrefetchValue(BLOG.domain), [])
  const changeHandle = useCallback(isDark => {
    const next = isDark ? 'light' : 'dark'
    setThemeType(next)
  }, [])
  
  useEffect(() => {
    if (typeof localStorage !== 'object') return null
    const themeType = localStorage.getItem('theme')
    setThemeType(themeType === 'dark' ? 'dark' : 'light')
  }, [])
  useEffect(() => localStorage.setItem('theme', themeType), [themeType])
  useDomClean()

  return (
    <>
    <Head>
      <title>{BLOG.title}</title>
      {domain && <link rel="dns-prefetch" href={domain} />}
      <meta name="google" value="notranslate" />
      <meta name="referrer" content="strict-origin" />
      <meta name="description" content={BLOG.description} />
      <meta property="og:site_name" content={BLOG.title} />
      <meta property="og:description" content={BLOG.description} />
      <meta property="og:type" content="website" />
      <meta name="generator" content="unix.bio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="author" content={BLOG.author} />
      <meta name="twitter:creator" content={`@${BLOG.twitter}`} />
      <meta property="og:title" content={BLOG.title} />
      <meta property="og:url" content={BLOG.domain} />
      <meta property="og:image" content={`https:${domain}/assets/og-main.png`} />
      <meta property="twitter:image" content={`https:${domain}/assets/og-main.png`} />
      <meta itemProp="image" property="og:image" content={`https:${domain}/assets/og-main.png`} />
      <meta name="viewport" content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover" />
    </Head>
    <ZEITUIProvider theme={{ type: themeType }}>
      <CSSBaseline>
      <ThemeConfigProvider onChange={changeHandle}>
        <Component {...pageProps} />
      </ThemeConfigProvider>
      </CSSBaseline>
      <style global jsx>{`
        .tag {
          color: ${theme.palette.accents_5};
        }
        
        .punctuation {
          color: ${theme.palette.accents_5};
        }
        
        .attr-name {
          color: ${theme.palette.accents_6};
        }
        
        .attr-value {
          color: ${theme.palette.accents_4};
        }
        
        .language-javascript {
          color: ${theme.palette.accents_4};
        }
        
        span[class*="class-name"] {
          color: ${theme.palette.purple};
        }
        
        span.token.string {
          color: ${theme.palette.accents_5};
        }
        
        span.keyword {
          color: ${theme.palette.success}
        }
        
        span.plain-text {
          color: ${theme.palette.accents_3};
        }
        
        body {
          overflow-x: hidden;
        }
        
        @media only screen and (max-width: 767px) {
          html {
            font-size: 15px;
          }
        }
      `}</style>
    </ZEITUIProvider>
    </>
  )
}

export default Application
