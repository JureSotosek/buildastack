import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://emma-suggestions.herokuapp.com/'
});

export default client;
