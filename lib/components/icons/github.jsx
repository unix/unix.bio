import React from 'react'

const Github = props => {
  const { width = 16, height = 16, ...others } = props
  return (
    <svg {...others} viewBox="0 0 24 24" width={width} height={height} stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"
      style={{ color: 'currentcolor' }}>
      <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

export default Github
