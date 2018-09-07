import React from 'react';

import styled from 'styled-components';

import DependencyCard from '../../components/DependencyCard';

const PackagesWrapper = styled.div`
  width: 100%;
  max-width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DependenciesList = ({ dependencies }) => (
  <PackagesWrapper>
    {dependencies.map(dependency => (
      <DependencyCard
        key={dependency.name + dependency.version}
        name={dependency.name}
        version={dependency.version}
        dev={dependency.dev}
      />
    ))}
  </PackagesWrapper>
);

export default DependenciesList;
