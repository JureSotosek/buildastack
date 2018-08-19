import React from 'react';

import SearchResults from './searchResults';
import SuggestionsResults from './suggestionsResults';

const Results = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}
  >
    <SearchResults
      title={'Search results:'}
      msg={'Start typing to get results📝'}
    />
    <SuggestionsResults
      title={'Suggestions:'}
      msg={'Select a package to get suggestions📦'}
    />
  </div>
);

export default Results;
