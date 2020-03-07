import React, { useMemo } from 'react'
import { useTheme, Row } from '@zeit-ui/react'
import Link from 'next/link'
import BLOG from '../../blog.config'
import metadata from 'lib/data/metadata'
const latestLimit = BLOG.latestLimit || 5

const getLatest = (data) => {
  const postNode = data.find(item => item.name === 'posts')
  const posts = (postNode || {}).children || []
  return posts.slice(0, latestLimit)
}

const makeLink = (post) => {
  return (
    <li key={post.url}>
      <Link href={post.url}>
        <a className="text">{post.name}</a>
      </Link>
    </li>
  )
}

const makeMoreLink = len => {
  if (len < latestLimit) return null
  return (
    <Link href="/blog">
      <a className="text">...</a>
    </Link>
  )
}

const Latest = () => {
  const posts = useMemo(() => getLatest(metadata), [])
  const theme = useTheme()
  return (
    <section>
      <h2>{BLOG.labels.latest || ''}</h2>
      <div className="content">
        <ul>
          {posts.map(p => makeLink(p))}
        </ul>
        <span className="more">{makeMoreLink(posts.length)}</span>
      </div>
  
      <style jsx>{`
        section {
          margin-top: calc(${theme.layout.gap} * 2);
        }
        
        h2 {
          font-size: 1rem;
          color: ${theme.palette.accents_6};
        }
        
        .content {
          padding-left: ${theme.layout.gapHalf};
          padding-bottom: calc(${theme.layout.gap} * 2);
        }
        
        .more {
          padding-left: 25px;
          margin-top: -10px;
          display: block;
        }
        
        .content :global(li) {
          margin-bottom: .3rem;
        }
        
        .content :global(.text) {
          font-size: .85rem;
        }
        
        @media only screen and (max-width: 767px) {
          .content {
            padding-left: 5vw;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          
          .content :global(.text) {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: .5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Latest
