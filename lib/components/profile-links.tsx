import React, { useMemo } from 'react'
import NextLink from 'next/link'
import { useTheme, Link } from '@geist-ui/core'
import metadata from '../data/metadata.json'
import { Configs } from '../utils'

const getFixes = (metas: typeof metadata) => {
  const data = metas.find(item => item.name === 'fixed')
  return (data || {}).children || []
}

const fillSpace = (name: string): string => {
  return name.replace(/ /g, '_')
}

export type ProfileLinkItem = {
  url: string
  name: string
}

const makeLink = (data: ProfileLinkItem): React.ReactNode => {
  return (
    <NextLink href={data.url} key={data.url} passHref>
      <Link>{fillSpace(data.name)}</Link>
    </NextLink>
  )
}

const ProfileLinks: React.FC<unknown> = () => {
  const theme = useTheme()
  const links = useMemo(() => getFixes(metadata), [])
  return (
    <div className="link">
      {makeLink({ url: '/blog', name: Configs.labels.default })}
      {links.map(link => makeLink(link))}

      <style jsx>{`
        .link :global(a) {
          color: ${theme.palette.accents_6};
          text-transform: uppercase;
          font-size: 0.8rem;
          padding: ${theme.layout.gapQuarter};
        }

        .link :global(a:hover) {
          color: ${theme.palette.accents_4};
        }

        .link :global(a:last-of-type) {
          margin-right: 0;
        }
      `}</style>
    </div>
  )
}

export default ProfileLinks
