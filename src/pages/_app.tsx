import Layout from '@components/Layout'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Dorr log</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
