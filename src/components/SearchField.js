import React from 'react';

const SearchField = ({ value, onChange }) => (
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
    value={value}
    onChange={event => onChange(event.target.value)}
  />
);

export default SearchField;
