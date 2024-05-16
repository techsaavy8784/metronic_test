import type { AppProps } from 'next/app'
import Layout from '../src/layouts/layout'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Metronic">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
