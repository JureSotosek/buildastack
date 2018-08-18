import React from 'react';

import Title from '../components/Title';
import Search from './Search';
import Results from './Results';
import Stack from './Stack';

const Suggestions = () => (
  <div
    style={{
      width: '100%',
      maxWidth: 1200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Source Sans Pro'
    }}
  >
    <Title />
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse'
      }}
    >
      <div style={{ width: '100%', maxWidth: 900 }}>
        <Search />
        <Results />
      </div>
      <Stack />
    </div>
  </div>
);

export default Suggestions;
