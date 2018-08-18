import React from 'react';

import SearchField from '../components/SearchField';

const Search = () => (
  <div
    style={{
      width: '100%',
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20
    }}
  >
    <div style={{ margin: 20, textShadow: '1px 1px lightGrey', fontSize: 23 }}>
      🕵🏼Search to add packages:{' '}
    </div>
    <div
      style={{
        width: '100%',
        maxWidth: 500,
        padding: 7,
        borderRadius: 7,
        boxShadow: '0 5px 15px 0 rgba(37,44,97,0.25)',
        backgroundColor: 'white'
      }}
    >
      <SearchField />
    </div>
  </div>
);

export default Search;
