import React, { useMemo } from 'react'
import { msToString } from '../data-transform'
import { useTheme } from '@zeit-ui/react'
import { useRouter } from 'next/router'
import { Configs } from '../utils'
import useViewsShow from '../use-views-show'

const DateDisplay = ({ date }) => {
  const theme = useTheme()
  const { asPath } = useRouter()
  const [count, countUpdated] = useViewsShow(asPath)
  
  const d = useMemo(() => new Date(date), [])
  if (`${d}` === 'Invalid Date') return null

  const time = Date.now() - d.getTime()
  const locale = Configs.isCN() ? 'zh-cn' : 'en-us'
  const showViews = useMemo(() => Configs.enableViews && countUpdated, [countUpdated])
  const views = useMemo(() => `${count} ${Configs.isCN() ? '阅读' : 'views'}`, [count])

  return (
    <p>
      <span className="dot">﹥</span>
      {d.toLocaleString(locale).replace(/\//g, '-')}
      <span className="split"> / </span>
      {msToString(time)}
      {showViews && (
        <>
          <span className="split"> / </span>
          {views}
        </>
      )}
      <style jsx>{`
      p {
        color: ${theme.palette.accents_4};
        font-size: .8rem;
        display: inline-flex;
        align-items: center;
        font-family: ${theme.font.mono};
      }

      span {
        user-select: none;
        font-weight: bold;
      }
      
      .dot {
        color: ${theme.palette.accents_7};
        padding-right: 2px;
      }
      
      .split {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        color: ${theme.palette.success};
        padding: 0 .5rem;
      }
      
      @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
        p {
          text-align: center;
          font-size: .75rem;
        }
      }
    `}</style>
    </p>
  )
}

const Title = ({
  title, date,
}) => {
  const theme = useTheme()
  
  return (
    <div className="title">
      <h1>{title}</h1>
      <div className="date-box">
        <DateDisplay date={date} />
      </div>
  
      <style jsx>{`
        .title {
          margin: ${theme.layout.gap} 0;
        }

        .date-box {
          display: flex;
          width: fit-content;
          align-items: center;
          height: 30px;
          margin: -.5rem 0 0 0;
          position: relative;
        }
        
        .date-box :global(.image) {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          margin: 0 0 0 10px;
        }
        
        .date-box :global(img) {
          object-fit: unset;
        }
        
        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .title h1 {
            font-size: 1.4rem;
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Title
