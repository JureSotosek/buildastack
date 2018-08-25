import React from 'react';

import SelectionCard from '../../components/SelectionCard';
import SelectionPlaceholder from '../../components/SelectionPlaceholder';

const Stack = ({ selectedPackages, onSelect }) => {
  if (selectedPackages.length === 0) {
    return <SelectionPlaceholder />;
  } else {
    return selectedPackages.map(pkg => (
      <SelectionCard
        key={pkg.name + pkg.version}
        name={pkg.name}
        version={pkg.version}
        dev={pkg.dev}
        onSelect={() => onSelect(pkg)}
      />
    ));
  }
};

export default Stack;
