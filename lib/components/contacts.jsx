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
  const email = useMemo(() => {
    if (!BLOG.email) return null
    return `mailto:${BLOG.email}`
  }, [])
  const github = useMemo(() => {
    if (!BLOG.github) return null
    return `https://github.com/${BLOG.github}`
  }, [])
  const twitter = useMemo(() => {
    if (!BLOG.twitter) return null
    return `https://twitter.com/${BLOG.twitter}`
  }, [])
  const switchTheme = () => {
    const isDark = theme.type === 'dark'
    configs.onChange(isDark)
  }
  
  return (
    <>
      <div className="contacts">
        {isDark && <Sun onClick={switchTheme} />}
        {!isDark && <Moon onClick={switchTheme} />}
        {email && <Link aria-label="email" rel="noreferrer" pure target="_blank" href={email}><Mail /></Link> }
        {github && <Link aria-label="github" rel="noreferrer" pure target="_blank" href={github}><Github /></Link>}
        {twitter && <Link aria-label="twitter" rel="noreferrer" pure target="_blank" href={twitter}><Twitter /></Link>}
        <div className="line">
          <Spacer y={.5} />
        </div>
    
        <style jsx>{`
        .contacts {
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          //position: relative;
          padding: 0 ${theme.layout.gapQuarter};
          position: absolute;
          bottom: 2.5rem;
        }

        .contacts :global(svg) {
          cursor: pointer;
          margin: ${theme.layout.gapQuarter} ${theme.layout.gapHalf};
          position: relative;
          z-index: 2;
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
