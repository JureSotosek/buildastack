import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://npm-suggestions.now.sh/'
});

export default client;
