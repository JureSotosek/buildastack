import React from 'react';

import styled from 'styled-components';

import DependencyCard from './DependencyCard';

const Wrapper = styled.div`
  width: 200px;
  min-height: 70px;

  padding: 20px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: ${props =>
    props.color
      ? `0 3px 15px 5px ` + props.color
      : '0 5px 15px 0 rgba(37, 44, 97, 0.3)'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;

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

const DependencyCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StackCard = ({ id, name, color, dependencies, template, history }) => (
  <Wrapper
    onClick={() => history.push((template ? '/builder/' : '/s/') + id)}
    color={color}
  >
    <Name>{name}</Name>
    <DependencyCardWrapper>
      {dependencies.map(dependency => (
        <DependencyCard
          name={dependency.name}
          version={dependency.version}
          key={dependency.name + dependency.version}
        />
      ))}
    </DependencyCardWrapper>
  </Wrapper>
);

export default StackCard;
