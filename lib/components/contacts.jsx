import React, { useMemo } from 'react'
import { useTheme, Spacer, Link } from '@zeit-ui/react'
import BLOG from '../../blog.config'
import useConfigs from '../states/config-context'
import Github from './icons/github'
import Twitter from './icons/twitter'
import Mail from './icons/mail'
import Sun from './icons/sun'
import Moon from './icons/moon'

const Contacts = () => {
  const theme = useTheme()
  const configs = useConfigs()
  const isDark = useMemo(() => theme.type === 'dark', [theme.type])
  const email = BLOG.email ? `mailto:${BLOG.email}` : null
  const github = BLOG.github ? `https://github.com/${BLOG.github}` : null
  const twitter = BLOG.twitter ? `https://twitter.com/${BLOG.twitter}` : null
  const switchTheme = () => configs.onChange(theme.type === 'dark')
  
  const themeTitle = BLOG.cn ? '切换主题' : 'Switch themes'
  const emailTitle = BLOG.cn ? '邮件' : 'Email me'
  const githubTitle = `GitHub: ${BLOG.github}`
  const twitterTitle = BLOG.cn ? `推特: ${BLOG.twitter}` : `Twitter: ${BLOG.twitter}`
  const linkProps = {
    rel: 'noreferrer',
    pure: true,
    target: '_blank',
  }
  
  return (
    <>
      <div className="contacts">
        {isDark && <span title={themeTitle}><Sun onClick={switchTheme} /></span>}
        {!isDark && <span title={themeTitle}><Moon onClick={switchTheme} /></span>}
        {email && <Link aria-label="email" title={emailTitle} href={email} {...linkProps}><Mail /></Link> }
        {github && <Link aria-label="github" title={githubTitle} href={github} {...linkProps}><Github /></Link>}
        {twitter && <Link aria-label="twitter" title={twitterTitle} href={twitter} {...linkProps}><Twitter /></Link>}
        <div className="line">
          <Spacer y={.5} />
        </div>
    
        <style jsx>{`
        .contacts {
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 ${theme.layout.gapQuarter};
          position: absolute;
          bottom: 2.5rem;
          color: ${theme.palette.accents_4};
        }
        
        .contacts :global(svg) {
          cursor: pointer;
          margin: ${theme.layout.gapQuarter} ${theme.layout.gapHalf};
          position: relative;
          color: inherit;
          z-index: 2;
        }
        
        .contacts :global(a) {
          color: inherit;
        }
        
       .contacts span {
          color: inherit;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        
        .contacts span:hover {
          color: ${theme.palette.accents_6};
        }
        
        .contacts :global(a:hover) {
          color: ${theme.palette.accents_6};
        }
        
        .line {
          background-color: ${theme.palette.accents_1};
          position: absolute;
          bottom: 4px;
          top: 4px;
          left: -8px;
          width: 8px;
          z-index: 1;
        }
        
        @media only screen and (max-width: 767px) {
          .contacts {
            position: absolute;
            bottom: 2.5rem;
            left: 1rem;
          }
        }
      `}</style>
      </div>
      <Spacer y={2.5} />
    </>
  )
}

export default Contacts
