import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })

const uploadLink = createUploadLink({ uri: 'http://localhost:3000/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  let authorization: string | null
  // vi next chay tren ca client va server nen phai check window co thi se o client
  if (typeof window !== 'undefined') {
    authorization = localStorage.getItem('token')
  }
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization,
      'Apollo-Require-Preflight': 'true', // for upload file
    },
  }))

  return forward(operation)
})

export const client = new ApolloClient({
  link: from([authMiddleware, uploadLink]),
  cache: new InMemoryCache(),
})
