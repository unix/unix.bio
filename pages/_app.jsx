import Head from 'next/head'
import { useCallback, useState, useEffect, useMemo } from 'react'
import { ThemeProvider, useTheme, CSSBaseline } from '@zeit-ui/react'
import ThemeConfigProvider from 'lib/components/theme-config-provider'
import BLOG from '../blog.config'

const getDNSPrefetchValue = domain => {
  if (!domain) return null
  if (domain.startsWith('http')) return domain.replace(/https?:/, '')
  if (domain.startsWith('//')) return domain
  return `//${domain}`
}

const Application = ({ Component, pageProps }) => {
  const theme = useTheme()
  const [themeType, setThemeType] = useState('light')
  const changeHandle = useCallback(isDark => {
    const next = isDark ? 'light' : 'dark'
    setThemeType(next)
  }, [])
  
  useEffect(() => {
    if (typeof localStorage !== 'object') return null
    const localType = localStorage.getItem('theme')
    if (!['light', 'dark'].includes(localType)) return null
    setThemeType(localType)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', themeType)
  }, [themeType])

  const domain = useMemo(() => getDNSPrefetchValue(BLOG.domain), [])

  return (
    <>
    <Head>
      <title>{BLOG.title}</title>
      {domain && <link rel="dns-prefetch" href={domain} />}
      <meta name="google" value="notranslate" />
      <meta name="referrer" content="strict-origin" />
      <meta name="description" content={BLOG.description} />
      <meta property="og:title" content={BLOG.title} />
      <meta property="og:type" content="website" />
      <meta name="generator" content="unix.bio" />
      <meta name="author" content={BLOG.anthor} />
      <meta property="og:url" content={BLOG.domain} />
      <meta name="viewport" content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover" />
    </Head>
    <ThemeProvider theme={{ type: themeType }}>
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
        
        html, body {
          overflow-x: hidden;
        }
        
        @media only screen and (max-width: 767px) {
          html {
            font-size: 14px;
          }
        }
      `}</style>
    </ThemeProvider>
    </>
  )
}

export default Application
