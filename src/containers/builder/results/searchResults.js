import React from 'react';

import { Query } from 'react-apollo';
import { searchQuery } from '../../../lib/graphql/queries';

import ResultCard from '../../../components/ResultCard';
import ResultPlaceholder from '../../../components/ResultPlaceholder';

const SearchResults = ({ query, onSelect }) => (
  <Query query={searchQuery} variables={{ query }}>
    {({ loading, error, data }) => {
      if (query.length === 0) {
        return <ResultPlaceholder msg={'Start typing to get results 📝'} />;
      }
      if (loading) {
        return <ResultPlaceholder loading />;
      }
      if (error) {
        return <ResultPlaceholder error />;
      }
      if (data.search.length !== 0) {
        const packages = data.search;

        return packages.map(pkg => (
          <ResultCard
            key={pkg.name + pkg.version}
            name={pkg.name}
            version={pkg.version}
            description={pkg.description}
            author={pkg.owner.name}
            downloads={pkg.humanDownloadsLast30Days}
            popular={pkg.popular}
            onSelect={() => onSelect(pkg, false)}
            onSelectDev={() => onSelect(pkg, true)}
          />
        ));
      }
      return <ResultPlaceholder msg={'Sorry, search yielded nothing 😕'} />;
    }}
  </Query>
);

export default SearchResults;
