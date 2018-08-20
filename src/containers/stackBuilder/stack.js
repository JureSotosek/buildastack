import React from 'react';

import styled from 'styled-components';

import SelectionCard from '../../components/SelectionCard';
import SelectionPlaceholder from '../../components/SelectionPlaceholder';

const Wrapper = styled.div`
  margin-top: 60px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1px;
  font-size: 25px;
  font-weight: bold;
`;

const Stack = ({ selectedPackages, onSelect }) => {
  const renderStack = () => {
    if (selectedPackages.length === 0) {
      return <SelectionPlaceholder />;
    } else {
      return selectedPackages.map(pkg => (
        <SelectionCard
          key={pkg.name + pkg.version}
          name={pkg.name}
          version={pkg.version}
          onSelect={() => onSelect(pkg)}
        />
      ));
    }
  };

  return (
    <Wrapper>
      Your stack:
      {renderStack()}
    </Wrapper>
  );
};

export default Stack;
