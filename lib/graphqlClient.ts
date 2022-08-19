import { InMemoryCache, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  headers: {
    authorization: typeof window === 'undefined' ? `Bearer ${process.env.GRAPHQL_TOKEN}` : '',
  },
  cache: new InMemoryCache(),
})

export { client }
