import React from 'react'
import { BlogConfigs, BlogConfigsContext } from 'lib/config-context'

export interface BlogConfigsProviderProps {
  onChange: BlogConfigs['onChange']
}

const BlogConfigsProvider: React.FC<
  React.PropsWithChildren<BlogConfigsProviderProps>
> = React.memo(({ onChange, children }) => {
  return (
    <BlogConfigsContext.Provider value={{ onChange }}>
      {children}
    </BlogConfigsContext.Provider>
  )
})

export default BlogConfigsProvider
