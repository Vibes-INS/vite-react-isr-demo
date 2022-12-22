import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { Link } from './Link'
import {ReactNode, StrictMode} from "react";

export function PageShell({ children, pageContext }: { children: ReactNode; pageContext: PageContext }) {
  return (
    <StrictMode>
      <Layout>
        <PageContextProvider pageContext={pageContext}>
          <Sidebar>
            <Link className="navitem" href="/">
              CSR
            </Link>
            <Link className="navitem" href="/about">
              ISR
            </Link>
            <Link className="navitem" href="/isr">
              ISR2
            </Link>
          </Sidebar>
          <Content>{children}</Content>
        </PageContextProvider>
      </Layout>
    </StrictMode>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}
