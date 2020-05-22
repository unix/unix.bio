import React, { useState, useEffect } from 'react'
import { Row, useTheme, User, Link } from '@zeit-ui/react'
import NextLink from 'next/link'
import ProfileLinks from './profile-links'
import { Configs } from '../utils'

const Profile = React.memo(({}) => {
  const theme = useTheme()
  const [showText, setShowText] = useState(theme.type === 'dark')
  useEffect(() => {
    const show = theme.type === 'dark'
    if (showText !== show) {
      setShowText(show)
    }
  }, [theme.type])

  return (
    <div className="profile">
      <Row align="bottom" className="user">
        <NextLink href="/" passHref>
          <Link>
            <User src="/assets/avatar.png" name={Configs.author}>
              {Configs.summary}
            </User>
          </Link>
        </NextLink>
      </Row>
      <ProfileLinks />
      <style jsx>{`
        .profile {
          padding: ${theme.layout.gap} 0;
        }

        .profile :global(.user) {
          padding-left: 0;
          margin-bottom: ${theme.layout.gapQuarter};
          max-width: 100%;
          overflow: hidden;
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .profile {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
          }
        }
      `}</style>
    </div>
  )
})

export default Profile
