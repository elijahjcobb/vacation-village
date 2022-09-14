import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Shell } from "../components/shell"

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Vacation Village</title>
      <link href="/favicon.svg" rel="icon" />
      <script async src="https://cdn.splitbee.io/sb.js" />
    </Head>
    <Shell>
      <Component {...pageProps} />
    </Shell>
  </>
}
