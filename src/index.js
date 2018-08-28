import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import client from './lib/graphql/apolloClient';

import styled from 'styled-components';

import Header from './containers/header';
import IndexPage from './pages/index';
import BuilderPage from './pages/builder';
import StackPage from './pages/stack';
import SavedPage from './pages/saved';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/builder" component={BuilderPage} />
          <Route path="/stack" component={StackPage} />
          <Route path="/saved" component={SavedPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
