// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import {ReactNode, createContext, useContext} from 'react'
import type { PageContext } from './types'

const Context = createContext<PageContext>(undefined as any)

export function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export function usePageContext() {
  return useContext(Context)
}

