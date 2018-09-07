import React from 'react';

import SelectionCard from '../../../components/SelectionCard';
import SelectionPlaceholder from '../../../components/SelectionPlaceholder';

const DependenciesList = ({ dependencies, loading, onSelect }) => {
  if (loading) {
    return <SelectionPlaceholder loading />;
  }

  if (dependencies.length === 0) {
    return <SelectionPlaceholder msg={'Empty 📭'} />;
  }

  return dependencies.map(dependency => (
    <SelectionCard
      key={dependency.name + dependency.version}
      name={dependency.name}
      version={dependency.version}
      dev={dependency.dev}
      onSelect={() => onSelect(dependency)}
    />
  ));
};

export default DependenciesList;
