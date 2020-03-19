import React, { useMemo } from 'react'
import ms from 'ms'
import { useTheme, Row, Text, Col, Spacer } from '@zeit-ui/react'
import Link from 'next/link'
import BLOG from '../../blog.config'
import { msToString } from '../date-transform'
import metadata from 'lib/data/metadata'

const getLatest = (data) => {
  const postNode = data.find(item => item.name === 'posts')
  const posts = (postNode || {}).children || []
  return posts
}

const time = date => {
  const t = Date.now() - new Date(date).getTime()
  return msToString(t)
}

const makeLink = (post) => {
  return (
    <Row key={post.url} className="item">
      <Col>
        <Link href={post.url}>
          <a className="text">{post.name} <span className="date">({time(post.meta.date)})</span></a>
        </Link>
      </Col>
    </Row>
  )
}

const List = () => {
  const posts = useMemo(() => getLatest(metadata), [])
  const theme = useTheme()
  return (
    <section>
      <h2>{BLOG.labels.list || 'All Posts'}</h2>
      <div className="content">
        {posts.map(p => makeLink(p))}
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
          padding-bottom: 100px;
          width: 80%;
          max-width: 50vw;
        }
        
        .content :global(.item) {
          margin-bottom: .5rem;
          border-bottom: 1px solid ${theme.palette.border};
          width: fit-content;
          padding: ${theme.layout.gapHalf} ${theme.layout.gap} ${theme.layout.gapHalf} 0;
        }
        
        .content :global(.text) {
          font-size: 1.1rem;
          line-height: 1.2;
          display: inline-block;
        }
        
        .content :global(.date) {
          font-size: 12px;
          color: ${theme.palette.accents_3};
        }
        
        @media only screen and (max-width: 767px) {
          .content {
            max-width: 100%;
            width: 100%;
          }
          
          .content :global(.item) {
            width: 90%;
          }
          
          .content :global(.text) {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  )
}

export default List
