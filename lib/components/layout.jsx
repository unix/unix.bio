import React from 'react'
import { Spacer, Text, useTheme } from '@zeit-ui/react'
import Profile from './profile'
import Contacts from './contacts'
import { msToString } from '../date-transform'

const getDate = date => {
  const d = new Date(date)
  if (`${d}` === 'Invalid Date') return ''
  const time = Date.now() - new Date(date).getTime()
  return `${d.toLocaleString()} - ${msToString(time)}`
}

const Layout = ({ children, meta }) => {
  const theme = useTheme()
  const inDetailPage = meta && meta.title
  
  return (
    <section>
      <div className="container">
        {inDetailPage && <Spacer />}
        <Profile />
        {inDetailPage && <Spacer y={1} />}
        {inDetailPage && <Text h1>{meta.title}</Text>}
        {inDetailPage && <Text p className="date">{getDate(meta.date)}</Text>}
        {inDetailPage && <Spacer y={1} />}
        {children}
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
