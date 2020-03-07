import React, { useState, useEffect, useMemo } from 'react'
import { Avatar, Text, Row, Spacer, useTheme } from '@zeit-ui/react'
import Link from 'next/link'
import ProfileLinks from './profile-links'
import BLOG from '../../blog.config'

const avatarCard = (show) => {
  if (show) return <Avatar text={BLOG.anthor} isSquare size={45} />
  return <Avatar isSquare size={45} alt="avatar" src="/assets/avatar.png" />
}

const Profile = React.memo(({
}) => {
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
      <Row align="bottom" className="user-row">
        <Link href="/">
          <a>{avatarCard(showText)}</a>
        </Link>
        <Spacer x={.3} />
        <Link href="/">
          <a><Text h1 className="name">{BLOG.anthor || ''}</Text></a>
        </Link>
      </Row>
      
      <Text p className="intro">{BLOG.summary || ''}</Text>
      <ProfileLinks />
  
      <style jsx>{`
        .profile {
          padding: ${theme.layout.gap} 0;
        }
        
        .profile :global(.name) {
          font-size: 1.6rem;
          margin: 0;
          text-transform: uppercase;
          color: ${theme.palette.accents_5};
          line-height: 1;
        }
        
        .profile :global(.intro) {
          color: ${theme.palette.accents_5};
          font-size: .875rem;
          margin-top: 5px;
        }
        
        @media only screen and (max-width: 767px) {
          .profile {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
          }
          
          .profile :global(.user-row) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .profile :global(.name) {
            margin-top: -1rem;
          }
          
          .profile :global(.intro) {
            margin: 1.3rem auto 0;
          }
        }
      `}</style>
    </div>
  )
})

export default Profile
