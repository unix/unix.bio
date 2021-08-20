import React from 'react'

export type BlogConfigs = {
  onChange: (isDark: boolean) => void
}

export const defaultBlogConfigsContext = {
  onChange: () => {},
}

export const BlogConfigsContext = React.createContext<BlogConfigs>(
  defaultBlogConfigsContext,
)

const useBlogConfigs = () => React.useContext(BlogConfigsContext)

export default useBlogConfigs
