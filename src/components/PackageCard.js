import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 17px;
  font-weight: bold;
`;

const Name = styled.div`
  word-break: break-all;
`;

const Dev = styled.div`
  margin-left: 5px;
  margin-right: 5px;

  font-size: 15px;
  color: grey;
`;

const Version = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: grey;
`;

const PackageCard = ({ name, version, dev }) => (
  <Wrapper>
    <Detail>
      <Name>{name}</Name>
      {dev && <Dev>{' dev'}</Dev>}
    </Detail>
    <Version>{version}</Version>
  </Wrapper>
);

export default PackageCard;
