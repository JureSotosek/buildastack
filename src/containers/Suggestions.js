import React from 'react';

import Title from '../components/Title';
import Search from '../components/Search';
import Results from './Results';

const Suggestions = () => (
  <div
    style={{
      width: '100%',
      maxWidth: 1000,
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Source Sans Pro'
    }}
  >
    <Title />
    <Search />
    <Results />
  </div>
);

export default Suggestions;
