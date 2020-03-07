import React from 'react'
import { useTheme } from '@zeit-ui/react'

const Mail = props => {
  const theme = useTheme()
  const { width = 16, height = 16, ...others } = props
  return (
    <svg width={width} height={height} {...others} viewBox="0 0 15 11">
      <g
        transform="translate(-598.000000, -418.000000) translate(560.000000, 404.000000) translate(23.000000, 0.000000) translate(15.000000, 13.000000) translate(0.000000, 1.000000)"
        stroke={theme.palette.accents_3} strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0.5" y="0.5" width="14" height="10" rx="2" />
        <path d="M1.175 1.135L7.5 5.5" strokeLinecap="square" />
        <path d="M14.04.912L7.5 5.5" strokeLinecap="square" />
      </g>
    </svg>
  )
}

export default Mail
