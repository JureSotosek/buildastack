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
      <a href="https://www.algolia.com">
        <img
          src="https://www.algolia.com/static_assets/images/pricing/pricing_new/algolia-powered-by-14773f38.svg"
          alt="Powered by Algolia"
          width="260"
          height="36"
          style={{ margin: 30 }}
        />
      </a>
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
      <a
        style={{
          textDecoration: 'none',
          margin: 25,
          fontFamily: 'Signika Negative',
          fontSize: 36,
          color: 'black'
        }}
        href="https://github.com/JureSotosek/emma-suggestions"
      >
        emma-suggestions
      </a>
    </div>
  </div>
);

export default Results;
