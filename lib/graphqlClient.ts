import { InMemoryCache, ApolloClient } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.hygraph.com/v2/cl6ruz4td0liq01um3pykecjh/master',
  cache: new InMemoryCache(),
})

export { client }
