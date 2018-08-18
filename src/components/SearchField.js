import React from 'react';

const SearchField = ({ onChange, value }) => (
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
    onChange={onChange}
    value={value}
  />
);

export default SearchField;
