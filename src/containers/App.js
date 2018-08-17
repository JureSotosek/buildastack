import React from 'react';

import Header from '../components/Header';
import Suggestions from './Suggestions';

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
      <Suggestions />
    </div>
  );
};

export default App;
