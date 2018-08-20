import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import client from './graphql/apolloClient';

import styled from 'styled-components';

import Header from './containers/header';
import StackBuilder from './pages/stackBuilder';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <Header />
        <StackBuilder />
      </Wrapper>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
