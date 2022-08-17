import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Layout from 'components/Layout/Layout'
import { client } from 'lib/graphqlClient'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

export default MyApp
