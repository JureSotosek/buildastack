import React from 'react';

import Header from '../components/Header';
import StackBuilder from './StackBuilder';

const App = () => {
  return (
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
  );
};

export default App;
