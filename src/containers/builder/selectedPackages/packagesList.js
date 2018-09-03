import React from 'react';

import SelectionCard from '../../../components/SelectionCard';
import SelectionPlaceholder from '../../../components/SelectionPlaceholder';

const PackagesList = ({ selectedPackages, loading, onSelect }) => {
  if (loading) {
    return <SelectionPlaceholder loading />;
  }

  if (selectedPackages.length === 0) {
    return <SelectionPlaceholder msg={'Empty 📭'} />;
  }

  return selectedPackages.map(pkg => (
    <SelectionCard
      key={pkg.name + pkg.version}
      name={pkg.name}
      version={pkg.version}
      dev={pkg.dev}
      onSelect={() => onSelect(pkg)}
    />
  ));
};

export default PackagesList;
