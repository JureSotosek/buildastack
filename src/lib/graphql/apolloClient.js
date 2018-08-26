import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.buildastack.io/'
});

export default client;
