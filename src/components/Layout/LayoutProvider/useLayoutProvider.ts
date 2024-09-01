//import { useWindowSize } from 'hooks/useWindowSize'
import { ReactNode, useReducer } from 'react'
import { LayoutCtxState } from '../context/layoutContext'
import layoutReducer, { initialLayoutState } from '../reducer/layoutSlice'

export interface LayoutProviderProps {
  children?: ReactNode
}

export const useLayoutProvider = (props: LayoutProviderProps) => {
  const contextReducer = useReducer(layoutReducer, initialLayoutState)

  const contextValue: LayoutCtxState = {
    contextReducer,
    providerProps: { ...props },
  }

  return { ...props, contextValue }
}
