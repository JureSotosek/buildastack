import React from 'react';

import { Query } from 'react-apollo';
import { suggestionsQuery } from '../../../lib/graphql/queries';

import ResultCard from '../../../components/ResultCard';
import ResultPlaceholder from '../../../components/ResultPlaceholder';

const extractNames = (packages, dev = false) =>
  packages.filter(pkg => pkg.dev === dev).map(pkg => pkg.name);

const SuggestionResults = ({ dependencies, onSelect }) => (
  <Query
    query={suggestionsQuery}
    variables={{
      dependencies: extractNames(dependencies),
      devDependencies: extractNames(dependencies, true)
    }}
  >
    {({ loading, error, data }) => {
      if (dependencies.length === 0) {
        return (
          <ResultPlaceholder msg={'Select a package for suggestions 📦'} />
        );
      }
      if (loading) {
        return <ResultPlaceholder loading />;
      }
      if (error) {
        return <ResultPlaceholder error />;
      }
      if (data.suggestions.suggestions.length !== 0) {
        const hits = data.suggestions.suggestions;

        return hits.map(hit => (
          <ResultCard
            key={hit.name + hit.version}
            hit={hit}
            onSelect={() => onSelect(hit, false)}
            onSelectDev={() => onSelect(hit, true)}
          />
        ));
      }
      return <ResultPlaceholder msg={'Sorry, no suggestions found 😔'} />;
    }}
  </Query>
);

export default SuggestionResults;
