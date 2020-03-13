import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Spacer, Text, useTheme, Image } from '@zeit-ui/react'
import Profile from './profile'
import { msToString } from '../date-transform'
import BLOG from '../../blog.config'

const ContactsWithNoSSR = dynamic(
  () => import('./contacts'),
  { ssr: false }
)

const getDate = date => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''
  const time = Date.now() - new Date(date).getTime()
  return `${d.toLocaleString()} - ${msToString(time)}`
}

const Layout = ({ children, meta }) => {
  const theme = useTheme()
  const { asPath } = useRouter()
  const inDetailPage = useMemo(() => meta && meta.title, [])
  const date = useMemo(() => getDate((meta || {}).date), [])
  const url = useMemo(() => {
    const suffix = BLOG.cn ? ' 阅读' : ' views'
    return `https://views.show/svg?key=${asPath}&fill=666666&suffix=${encodeURI(suffix)}&size=13`
  }, [asPath])
  const showViews = useMemo(() => BLOG.enableViews, [])
  
  return (
    <section>
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
        <ContactsWithNoSSR />
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
          display: inline-flex;
          align-items: center;
          height: 30px;
          margin: -.5rem 0 0 0;
        }
        
        .date-box>:global(.date) {
          color: ${theme.palette.accents_5};
          font-size: .85rem;
        }
        
        .date-box :global(.image) {
          display: inline-flex;
          align-items: center;
          margin: 0 0 0 10px;
        }
        
        @media only screen and (max-width: 767px) {
          .container {
            max-width: 95vw;
            min-height: 100vh;
          }
          
          .container :global(h1) {
            text-align: center;
          }
          
          .container>:global(.date) {
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Layout
