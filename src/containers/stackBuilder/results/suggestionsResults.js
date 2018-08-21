import React from 'react';

import { Query } from 'react-apollo';
import { suggestionsQuery } from '../../../lib/graphql/queries';

import PackageCard from '../../../components/PackageCard';
import PackagePlaceholder from '../../../components/PackagePlaceholder';

const SuggestionResults = ({ selectedPackages, onSelect, onSelectDev }) => (
  <Query
    query={suggestionsQuery}
    variables={{ dependencies: selectedPackages.map(pkg => pkg.name) }}
  >
    {({ loading, error, data }) => {
      if (selectedPackages.length === 0) {
        return (
          <PackagePlaceholder msg={'Select a package for suggestions📦'} />
        );
      } else if (error) {
        return <PackagePlaceholder error />;
      } else if (loading) {
        return <PackagePlaceholder loading />;
      } else if (data.suggestions.allDependencies.length !== 0) {
        const packages = data.suggestions.allDependencies;

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
        return <PackagePlaceholder msg={'Sorry, no suggestions found😔'} />;
      }
    }}
  </Query>
);

export default SuggestionResults;
