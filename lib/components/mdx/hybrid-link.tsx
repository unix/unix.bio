import React from 'react'
import NextLink from 'next/link'
import { Link, LinkProps } from '@geist-ui/core'

export type HybridLinkProps = LinkProps

const HybridLink: React.FC<HybridLinkProps> = ({ href = '#', children, ...props }) => {
  const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(href)

  if (isRelativeUrl) {
    return (
      <NextLink href={href} passHref>
        <Link color block {...props}>
          {children}
        </Link>
      </NextLink>
    )
  }

  return (
    <Link href={href} target="_blank" color rel="noreferrer nofollow" {...props}>
      {children}
    </Link>
  )
}

export default HybridLink
