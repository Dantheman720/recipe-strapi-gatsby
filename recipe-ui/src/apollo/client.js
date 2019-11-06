import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

// export const client = new ApolloClient({
//   uri: "http://localhost:1337/graphql",
//   fetch,
// })

export const client = new ApolloClient({
  uri: "http://159.203.74.177:1337/graphql",
  request: operation => {
    const token = localStorage.getItem("token")
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    })
  },
})
