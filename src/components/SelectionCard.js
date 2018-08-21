import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  width: 250px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
`;

const DetailsSection = styled.div`
  margin: 5px;
  margin-left: 15px;
  margin-right: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Detail = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const DetailGrey = styled(Detail)`
  color: grey;
`;

const RemoveSection = styled.div`
  min-width: 30px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #ff7faa;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 15px;
`;

const StackCard = ({ name, version, onSelect }) => (
  <Wrapper onClick={onSelect}>
    <DetailsSection>
      <Detail>{name}</Detail>
      <DetailGrey>{version}</DetailGrey>
    </DetailsSection>
    <RemoveSection>{'👎🏼'}</RemoveSection>
  </Wrapper>
);

export default StackCard;
