import React, { useMemo } from 'react'
import Link from 'next/link'
import { useTheme } from '@zeit-ui/react'
import metadata from '../data/metadata'
import BLOG from '../../blog.config'

const getFixes = metas => {
  const data = metas.find(item => item.name === 'fixed')
  return (data || {}).children || []
}

const fillSpace = name => {
  return name.replace(/ /g, '_')
}

const makeLink = data => {
  return (
    <Link href={data.url} key={data.url}>
      <a>{fillSpace(data.name)}</a>
    </Link>
  )
}

const ProfileLinks = () => {
  const theme = useTheme()
  const links = useMemo(() => getFixes(metadata), [])
  return (
    <div className="link">
      {makeLink({ url: '/blog', name: BLOG.labels.default || 'posts' })}
      {links.map(link => makeLink(link))}
  
      <style jsx>{`
        .link :global(a) {
          color: ${theme.palette.accents_5};
          text-transform: uppercase;
          font-size: .8rem;
          margin-right: 10px;
        }
      `}</style>
    </div>
  )
}

export default ProfileLinks
