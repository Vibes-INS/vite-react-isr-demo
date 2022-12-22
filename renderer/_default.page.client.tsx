import { createRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'
import {FakeAuthContextProvider} from "./useFakeAuthContext";

const root = createRoot(document.getElementById('page-view')!)

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  root.render(
    // <FakeAuthContextProvider>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    // </FakeAuthContextProvider>
  )

}

export const clientRouting = true
