import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

const DetailsSection = styled.div`
  margin: 5px;
  margin-left: 15px;
  margin-right: 15px;
  width: 100%;
`;

const DetailsTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DetailsBottomSection = styled(DetailsTopSection)`
  margin-bottom: 2px;
`;

const Name = styled.div`
  font-size: 20px;
`;

const DetailGrey = styled.div`
  color: grey;
  font-size: 15px;
`;

const DetailBlack = styled.div`
  font-size: 15px;
`;

const AddSection = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #7fffd4;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const PackageCard = ({
  name,
  description,
  author,
  version,
  downloads,
  popular,
  onSelect
}) => (
  <Wrapper onClick={onSelect}>
    <DetailsSection>
      <DetailsTopSection>
        <Name>{name}</Name>
        <DetailGrey>
          {popular && '🔥'}
          📉
          {downloads}
        </DetailGrey>
      </DetailsTopSection>
      <DetailGrey>{description}</DetailGrey>
      <DetailsBottomSection>
        <DetailBlack>{version}</DetailBlack>
        <DetailBlack>{author}</DetailBlack>
      </DetailsBottomSection>
    </DetailsSection>
    <AddSection>👍🏼</AddSection>
  </Wrapper>
);

export default PackageCard;
