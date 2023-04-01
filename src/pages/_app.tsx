import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import LayoutDefault from '@/components/layouts/layoutDefault'
import { store } from '@/stores/appStore'

import '@/styles/globals.css'

import 'antd/dist/reset.css'
import { useRouter } from 'next/router'
import LayoutAdmin from '@/components/layouts/layoutAdmin/layoutAdmin'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/configs/apollo'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const router = useRouter()

  let getLayout
  if (router.asPath.includes('/admin')) {
    getLayout =
      Component.getLayout ??
      ((page: ReactNode) => <LayoutAdmin>{page}</LayoutAdmin>)
  } else {
    getLayout =
      Component.getLayout ??
      ((page: ReactNode) => <LayoutDefault>{page}</LayoutDefault>)
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </Provider>
  )
}
