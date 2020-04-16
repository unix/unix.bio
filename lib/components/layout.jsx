import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Profile from './profile'
import Contacts from './contacts'
import { useRouter } from 'next/router'
import { msToString } from '../data-transform'
import { Spacer, Text, useTheme, Image } from '@zeit-ui/react'
import BLOG from '../../blog.config'

const getDate = date => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''
  const time = Date.now() - new Date(date).getTime()
  return `${d.toLocaleString()} - ${msToString(time)}`
}

const Layout = ({ children, meta = {} }) => {
  const theme = useTheme()
  const { asPath } = useRouter()
  const [showAfterRender, setShowAfterRender] = useState(false)
  
  const inDetailPage = useMemo(() => meta && meta.title, [])
  const date = useMemo(() => getDate((meta || {}).date), [])
  const url = useMemo(() => {
    const suffix = BLOG.cn ? ' 阅读' : ' views'
    return `https://views.show/svg?key=${asPath}&fill=666666&suffix=${encodeURI(suffix)}&size=13`
  }, [asPath])
  const showViews = useMemo(() => BLOG.enableViews, [])
  
  useEffect(() => setShowAfterRender(true), [])
  
  if (!showAfterRender) return null
  return (
    <section>
      <Head>
        {meta.title && <title>{meta.title} - {BLOG.title}</title>}
        {meta.description && <meta name="description" content={meta.description} />}
        {meta.description && <meta property="og:description" content={meta.description} />}
        {meta.title && <meta property="og:title" content={meta.title} />}
        {meta.image && <meta property="og:image" content={meta.image} />}
        {meta.image && <meta property="twitter:image" content={meta.image} />}
      </Head>
      <div className="container">
        {inDetailPage && <Spacer />}
        <Profile />
        {inDetailPage && <Spacer y={1} />}
        {inDetailPage && <Text h1>{meta.title}</Text>}
        {inDetailPage && (
          <div className="date-box">
            <Text p className="date">{date}</Text>
            {showViews && <Image width={100} height={24} src={url} />}
          </div>
        )}
        {inDetailPage && <Spacer y={1} />}
        {children}
        <Spacer y={5} />
        <Contacts />
      </div>
      

      <style jsx>{`
        section {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .container {
          width: 100%;
          max-width: 750px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-spacing: none;
        }
        
        .container :global(h1) {
          font-size: 2rem;
        }
        
        .container :global(h2) {
          font-size: 1.7rem;
        }
        
        .container :global(h3) {
          font-size: 1.4rem;
        }
        
        .container :global(h4) {
          font-size: 1.2rem;
        }
        
        .date-box {
          display: flex;
          width: fit-content;
          align-items: center;
          height: 30px;
          margin: -.5rem 0 0 0;
          position: relative;
        }
        
        .date-box>:global(.date) {
          color: ${theme.palette.accents_5};
          font-size: .85rem;
        }
        
        .date-box :global(.image) {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          margin: 0 0 0 10px;
        }
        
        .date-box :global(img) {
          object-fit: unset;
        }
        
        @media only screen and (max-width: 767px) {
          .container {
            max-width: 91vw;
            min-height: 100vh;
          }
          
          .container :global(h1) {
            text-align: center;
          }
          
          .container>:global(.date) {
            text-align: center;
          }
          
          .date-box {
            justify-content: center;
            margin: 0 auto;
          }
          
          .date-box :global(.image) {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Layout
