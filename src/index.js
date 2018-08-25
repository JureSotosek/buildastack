import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import client from './lib/graphql/apolloClient';

import styled from 'styled-components';

import Header from './containers/header';
import Builder from './pages/builder';
import Stack from './pages/stack';
import Saved from './pages/saved';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Builder} />
            <Route path="/stack" component={Stack} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
