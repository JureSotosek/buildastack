import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import client from './lib/apolloClient';

import Header from './containers/header';
import StackBuilder from './pages/stackBuilder';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Header />
        <StackBuilder />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
