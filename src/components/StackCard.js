import React from 'react';

import styled from 'styled-components';

import PackageCard from '../components/PackageCard';

const Wrapper = styled.div`
  width: 200px;
  min-height: 70px;

  padding: 20px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;

  background-color: 'white';

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover {
    -webkit-transform: rotate(1deg);
    transform: rotate(1deg);
  }

  cursor: pointer;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PackageCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StackCard = ({ id, name, dependencies, history }) => (
  <Wrapper onClick={() => history.push('/s/' + id)}>
    <Name>{name}</Name>
    <PackageCardWrapper>
      {dependencies.map(dependency => (
        <PackageCard
          key={dependency.name + dependency.version}
          name={dependency.name}
          version={dependency.name}
        />
      ))}
    </PackageCardWrapper>
  </Wrapper>
);

export default StackCard;
