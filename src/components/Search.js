import React from 'react';

const Search = () => (
  <div
    style={{
      width: '100%',
      marginTop: 30,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20
    }}
  >
    <div style={{ margin: 20 }}>Search to add packages: </div>
    <div
      style={{
        width: '100%',
        maxWidth: 500,
        padding: 7,
        borderRadius: 7,
        boxShadow: '0 5px 15px 0 rgba(37,44,97,0.15)',
        backgroundColor: 'white'
      }}
    >
      <input
        type="text"
        placeholder="react, react-dom, graphql,..."
        style={{
          width: '100%',
          border: '0px solid',
          outline: 'none',
          backgroundColor: 'transparent',
          fontSize: 20
        }}
      />
    </div>
  </div>
);

export default Search;
