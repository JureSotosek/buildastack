import React from 'react';

import { Query } from 'react-apollo';
import { suggestionsQuery } from '../../../lib/graphql/queries';

import ResultCard from '../../../components/ResultCard';
import ResultPlaceholder from '../../../components/ResultPlaceholder';

const SuggestionResults = ({ selectedPackages, onSelect }) => (
  <Query
    query={suggestionsQuery}
    variables={{
      dependencies: selectedPackages
        .filter(pkg => !pkg.dev)
        .map(pkg => pkg.name),
      devDependencies: selectedPackages
        .filter(pkg => pkg.dev)
        .map(pkg => pkg.name)
    }}
  >
    {({ loading, error, data }) => {
      if (selectedPackages.length === 0) {
        return (
          <ResultPlaceholder msg={'Select a package for suggestions 📦'} />
        );
      } else if (error) {
        return <ResultPlaceholder error />;
      } else if (loading) {
        return <ResultPlaceholder loading />;
      } else if (data.suggestions.suggestions.length !== 0) {
        const packages = data.suggestions.suggestions;

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
      } else {
        return <ResultPlaceholder msg={'Sorry, no suggestions found 😔'} />;
      }
    }}
  </Query>
);

export default SuggestionResults;
