import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 330px;

  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;

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

const DetailsSection = styled.div`
  width: 100%;

  margin: 5px;
  margin-left: 15px;
  margin-right: 15px;
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
  word-break: break-all;
`;

const DetailGrey = styled.div`
  font-size: 15px;
  color: grey;
`;

const Decription = styled(DetailGrey)`
  word-break: break-all;
`;

const DetailBlack = styled.div`
  font-size: 15px;
`;

const AddSection = styled.div`
  min-width: 80px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  display: flex;
  flex-direction: column;
`;

const ResultCard = ({
  hit: {
    name,
    description,
    owner: { name: author },
    version,
    humanDownloadsLast30Days,
    popular
  },
  onSelect,
  onSelectDev
}) => (
  <Wrapper>
    <DetailsSection onClick={onSelect}>
      <DetailsTopSection>
        <Name>{name}</Name>
        <DetailGrey>
          {popular && '🔥'}
          {'📉'}
          {humanDownloadsLast30Days}
        </DetailGrey>
      </DetailsTopSection>
      <Decription>{description}</Decription>
      <DetailsBottomSection>
        <DetailBlack>{version}</DetailBlack>
        <DetailBlack>{author}</DetailBlack>
      </DetailsBottomSection>
    </DetailsSection>
    <AddSection>
      <div
        onClick={onSelect}
        style={{
          flex: 1.1,
          backgroundColor: '#7fffd4',
          borderTopRightRadius: 5,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        ☁️
      </div>
      <div
        onClick={onSelectDev}
        style={{
          flex: 1,
          backgroundColor: 'lightGrey',
          borderBottomRightRadius: 5,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 15
        }}
      >
        💻
      </div>
    </AddSection>
  </Wrapper>
);

export default ResultCard;
