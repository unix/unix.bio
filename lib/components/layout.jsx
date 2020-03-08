import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Spacer, Text, useTheme } from '@zeit-ui/react'
import Profile from './profile'
import { msToString } from '../date-transform'

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
  const inDetailPage = useMemo(() => meta && meta.title, [])
  const date = useMemo(() => getDate((meta || {}).date), [])
  
  return (
    <section>
      <div className="container">
        {inDetailPage && <Spacer />}
        <Profile />
        {inDetailPage && <Spacer y={1} />}
        {inDetailPage && <Text h1>{meta.title}</Text>}
        {inDetailPage && <Text p className="date">{date}</Text>}
        {inDetailPage && <Spacer y={1} />}
        {children}
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
        
        .container>:global(.date) {
          color: ${theme.palette.accents_5};
          font-size: .85rem;
          margin: -.5rem 0 0 0;
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
