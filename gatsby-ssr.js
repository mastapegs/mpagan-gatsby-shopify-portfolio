const React = require('react')
const { ApolloClient, ApolloLink, InMemoryCache, HttpLink } = require('apollo-boost');
const { ApolloProvider } = require('@apollo/react-hooks')
const Layout = require('./src/components/Layout').default
const fetch = require('isomorphic-fetch')

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}

exports.wrapRootElement = ({ element }) => {
  const httpLink = new HttpLink({ uri: 'https://graphql.fauna.com/graphql' });
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GATSBY_FAUNA_KEY}`
      }
    });
    return forward(operation);
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    fetch
  });
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}