import React from 'react'

export const ThemeConfigContext = React.createContext({})

const useConfigs = () => React.useContext(ThemeConfigContext)

export default useConfigs
