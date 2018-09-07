import React from 'react';
import {
  InstantSearch,
  Configure,
  connectHits,
  connectSearchBox
} from 'react-instantsearch-dom';

import ResultCard from '../../../components/ResultCard';

const customHitsWithSelect = onSelect =>
  connectHits(({ hits }) => (
    <React.Fragment>
      {hits.map(hit => (
        <ResultCard
          key={hit.name + hit.version}
          hit={hit}
          onSelect={() => onSelect(hit, false)}
          onSelectDev={() => onSelect(hit, true)}
        />
      ))}
    </React.Fragment>
  ));

const virtualSearchBoxWithQuery = query =>
  connectSearchBox(({ currentRefinement, refine }) => {
    console.log('current: ', currentRefinement);
    console.log('future: ', query);
    if (currentRefinement !== query) {
      refine(query);
    }
    return null;
  });

const AlgoliaSearch = ({ query, onSelect }) => {
  const CustomHits = customHitsWithSelect(onSelect);

  const VirtualSearchBox = virtualSearchBoxWithQuery(query);

  return (
    <InstantSearch
      appId="OFCNCOG2CU"
      apiKey="6fe4476ee5a1832882e326b506d14126"
      indexName="npm-search"
    >
      <Configure hitsPerPage={5} />
      <CustomHits />
      <VirtualSearchBox />
    </InstantSearch>
  );
};

export default AlgoliaSearch;
