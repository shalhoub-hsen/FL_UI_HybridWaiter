import { LayoutCtx } from '../context/layoutContext'
import { LayoutProviderProps, useLayoutProvider } from './useLayoutProvider'

const LayoutProvider: React.FC<LayoutProviderProps> = (props) => {
  const { contextValue, children } = useLayoutProvider(props)

  return <LayoutCtx.Provider value={contextValue}>{children}</LayoutCtx.Provider>
}

export default LayoutProvider
