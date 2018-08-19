import React from 'react';

import SelectionCard from '../../components/SelectionCard';
import SelectionPlaceholder from '../../components/SelectionPlaceholder';

const Stack = ({ selectedPackages, onSelect }) => {
  const renderStack = () => {
    if (selectedPackages.length === 0) {
      return <SelectionPlaceholder />;
    } else {
      return selectedPackages.map(pkg => (
        <SelectionCard
          key={pkg.name + pkg.version}
          name={pkg.name}
          author={pkg.owner.name}
          onSelect={() => onSelect(pkg)}
        />
      ));
    }
  };

  return (
    <div
      style={{
        marginTop: 60,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold'
      }}
    >
      <div>Your stack:</div>
      {renderStack()}
    </div>
  );
};

export default Stack;
