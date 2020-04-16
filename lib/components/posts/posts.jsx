import Head from 'next/head'
import React, { useMemo } from 'react'
import PostItem from './post-item'
import { useTheme, Link } from '@zeit-ui/react'
import BLOG from '../../../blog.config'
import NextLink from 'next/link'
import metadata from 'lib/data/metadata'
const latestLimit = BLOG.latestLimit || 5

const getMoreLink = len => {
  if (len < latestLimit) return null
  return (
    <NextLink href="/blog" passHref>
      <Link pure title="More">...</Link>
    </NextLink>
  )
}

const getLatest = (data, isLatest) => {
  const postNode = data.find(item => item.name === 'posts')
  const posts = (postNode || {}).children || []
  if (!isLatest) return posts
  return posts.slice(0, latestLimit)
}

const getTitle = (isLatest) => {
  if (!isLatest) return BLOG.labels.list || 'all Posts'
  return BLOG.labels.latest || 'latest'
}

const Posts = ({
  isLatest = false,
}) => {
  const theme = useTheme()
  const posts = useMemo(() => getLatest(metadata, isLatest), [])
  const title = useMemo(() => getTitle(isLatest), [])
  
  return (
    <section>
      <Head>
        {!isLatest && <title>{getTitle(false)} - {BLOG.title}</title>}
      </Head>
      <h2>{title}</h2>
      <div className="content">
        {posts.map((post, index) => (
          <PostItem post={post} key={`${post.url}-${index}`} />
        ))}
        {isLatest && <span className="more">{getMoreLink(posts.length)}</span>}
      </div>
      <style jsx>{`
        section {
          margin-top: calc(${theme.layout.gap} * 2);
        }
        
        section h2 {
          font-size: .8rem;
          color: ${theme.palette.accents_6};
          text-transform: uppercase;
          letter-spacing: 2px;
          border-bottom: 2px solid ${theme.palette.accents_6};
          padding: 2px ${theme.layout.gapQuarter} 0 0;
          display: inline-block;
          margin: 0;
        }
        
        .content {
          margin: ${theme.layout.gap} 0;
        }
        
        .more {
          display: block;
        }
        
        @media only screen and (max-width: 767px) {
          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: ${theme.layout.gapQuarter};
          }
          
          section h2 {
            padding: 2px ${theme.layout.gapQuarter};
            text-align: center;
          }
          
          .content {
            padding-top: calc(1.5 * ${theme.layout.gap});
          }
        }
      `}</style>
    </section>
  )
}

export default Posts
