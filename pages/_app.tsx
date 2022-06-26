import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Vacation Village</title>
      <link href="/favicon.svg" rel="icon" />
    </Head>
    <Component {...pageProps} />
  </>
}
