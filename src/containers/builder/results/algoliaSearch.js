import React from 'react';
import {
  InstantSearch,
  Configure,
  connectHits,
  connectSearchBox,
  connectStateResults
} from 'react-instantsearch-dom';

import ResultCard from '../../../components/ResultCard';
import ResultPlaceholder from '../../../components/ResultPlaceholder';

const VirtualSearchBox = connectSearchBox(() => null);

const ContentWithSelect = onSelect =>
  connectStateResults(({ searching, error, searchState, searchResults }) => {
    if (searchState.query.length === 0) {
      return <ResultPlaceholder msg={'Start typing to get results 📝'} />;
    }

    if (searching) {
      return <ResultPlaceholder loading />;
    }

    if (error) {
      return <ResultPlaceholder error />;
    }

    if (searchResults.hits.length === 0) {
      return <ResultPlaceholder msg={'Sorry, search yielded nothing 😕'} />;
    }

    const hits = searchResults.hits;
    return hits.map(hit => (
      <ResultCard
        key={hit.name + hit.version}
        hit={hit}
        onSelect={() => onSelect(hit, false)}
        onSelectDev={() => onSelect(hit, true)}
      />
    ));
  });

const AlgoliaSearch = ({ query, onSelect }) => {
  const Content = ContentWithSelect(onSelect);

  return (
    <InstantSearch
      searchState={{ query }}
      appId="OFCNCOG2CU"
      apiKey="6fe4476ee5a1832882e326b506d14126"
      indexName="npm-search"
    >
      <Configure hitsPerPage={5} />
      <VirtualSearchBox />
      <Content />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
