import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { RootLayout } from '@/layouts'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  )
}

export default appWithTranslation(App)
