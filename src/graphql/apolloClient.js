import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://npm-suggestions.herokuapp.com/'
});

export default client;
