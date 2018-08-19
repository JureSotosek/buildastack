import React from 'react';

import SearchResults from './searchResults';
import SuggestionsResults from './suggestionsResults';

const Results = ({ query, selectedPackages, onSelect }) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}
  >
    <div
      style={{
        width: '100%',
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        fontSize: 20
      }}
    >
      <div>{'Search results:'}</div>
      <SearchResults query={query} onSelect={onSelect} />
    </div>
    <div
      style={{
        width: '100%',
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        fontSize: 20
      }}
    >
      <div>{'Suggestions:'}</div>
      <SuggestionsResults
        selectedPackages={selectedPackages}
        onSelect={onSelect}
      />
    </div>
  </div>
);

export default Results;
