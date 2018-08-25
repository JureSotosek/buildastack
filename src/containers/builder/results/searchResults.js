import React from 'react';

import { Query } from 'react-apollo';
import { searchQuery } from '../../../lib/graphql/queries';

import PackageCard from '../../../components/PackageCard';
import PackagePlaceholder from '../../../components/PackagePlaceholder';

const SearchResults = ({ query, onSelect }) => {
  return (
    <Query query={searchQuery} variables={{ query }}>
      {({ loading, error, data }) => {
        if (query.length === 0) {
          return <PackagePlaceholder msg={'Start typing to get results 📝'} />;
        } else if (error) {
          return <PackagePlaceholder error />;
        } else if (loading) {
          return <PackagePlaceholder loading />;
        } else if (data.search.length !== 0) {
          const packages = data.search;

          return packages.map(pkg => (
            <PackageCard
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
        } else {
          return (
            <PackagePlaceholder msg={'Sorry, search yielded nothing 😕'} />
          );
        }
      }}
    </Query>
  );
};

export default SearchResults;
