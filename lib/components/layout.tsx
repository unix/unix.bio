import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Profile from './profile'
import Contacts from './contacts'
import Title from './title'
import { Spacer } from '@geist-ui/core'
import { Configs } from '../utils'

export type PostMetadata = {
  title: string
  date: string
  description?: string
  image?: string
}

export type LayoutHeader = {
  meta: PostMetadata
}

const LayoutHeader: React.FC<LayoutHeader> = ({ meta }) => (
  <Head>
    {meta.title && (
      <title>
        {meta.title} - {Configs.title}
      </title>
    )}
    {meta.description && <meta name="description" content={meta.description} />}
    {meta.description && <meta property="og:description" content={meta.description} />}
    {meta.title && <meta property="og:title" content={meta.title} />}
    {meta.image && <meta property="og:image" content={meta.image} />}
    {meta.image && <meta property="twitter:image" content={meta.image} />}
  </Head>
)

export type Props = {
  meta?: PostMetadata
}
const defaultProps = {
  meta: {
    title: '',
    date: new Date().toISOString(),
  },
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type LayoutProps = Props & NativeAttrs

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  meta,
}: LayoutProps & typeof defaultProps) => {
  const [showAfterRender, setShowAfterRender] = useState(false)
  const inDetailPage = useMemo(() => meta && meta.title, [])
  useEffect(() => setShowAfterRender(true), [])

  if (!showAfterRender)
    return (
      <div className="article-content">
        <LayoutHeader meta={meta} />
        {children}
        <style jsx>{`
          .article-content {
            opacity: 0;
            display: none;
          }
        `}</style>
      </div>
    )
  return (
    <section>
      <LayoutHeader meta={meta} />
      <div className="container">
        <Spacer />
        <Profile />
        {inDetailPage && <Title title={meta.title} date={meta.date} />}
        <div className="dynamic-content">{children}</div>
        <Spacer h={5} />
        <Contacts isDetailPage={!!inDetailPage} />
      </div>

      <style jsx>{`
        section {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dynamic-content {
          width: 100%;
          height: auto;
        }

        .container {
          width: 100%;
          max-width: ${Configs.layouts.pageWidth};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .container :global(h1) {
          font-size: 2rem;
        }

        .container :global(h2) {
          font-size: 1.7rem;
          margin-top: 2.25rem;
        }

        .container :global(h3) {
          font-size: 1.4rem;
          margin-top: 1rem;
        }

        .container :global(h4) {
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        @media only screen and (max-width: 767px) {
          .container {
            max-width: ${Configs.layouts.pageWidthMobile};
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  )
}

Layout.defaultProps = defaultProps

export default Layout
