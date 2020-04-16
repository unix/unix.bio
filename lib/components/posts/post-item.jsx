import React from 'react'
import { Link, useTheme } from '@zeit-ui/react'
import NextLink from 'next/link'
import { msToString } from '../../data-transform'

const getTime = date => {
  const t = Date.now() - new Date(date).getTime()
  return msToString(t)
}

const PostItem = ({ post }) => {
  const theme = useTheme()
  
  return (
    <div className="item">
      <NextLink href={post.url} as={post.url} passHref>
        <Link pure>{post.name} <span className="date">_{getTime(post.meta.date)}</span></Link>
      </NextLink>
      <style jsx>{`
        .item {
          margin-bottom: calc(1.35 * ${theme.layout.gapHalf});
          overflow: hidden;
          max-width: 60vw;
        }
        
        .item :global(.link) {
          color: ${theme.palette.accents_7};
          transition: color 120ms ease;
          font-size: .85rem;
          max-width: 95%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }
        
        .item :global(.date) {
          color: ${theme.palette.accents_5};
          font-size: .75em;
          padding-left: ${theme.layout.gapQuarter};
        }
        
        .item :global(.link:hover) {
          color: ${theme.palette.accents_3};
        }
        
        .item :global(.link:hover .date) {
          color: ${theme.palette.accents_3};
        }
        
        @media only screen and (max-width: 767px) {
          .item {
            max-width: 90vw;
          }
        }
      `}</style>
    </div>
  )
}

export default PostItem
