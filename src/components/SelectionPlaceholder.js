import React from 'react';

import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

const Wrapper = styled.div`
  width: 100%;
  width: 250px;

  padding: 5px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  text-align: center;

  font-size: 15px;
  font-weight: bold;
`;

const SkeletonWrapper = styled.div`
  padding-top: 0;
  font-size: 15px;
`;

const Message = styled.div`
  text-align: center;
  font-weight: bold;
`;

const SelectionPlaceholder = ({ loading, error, msg }) => (
  <Wrapper>
    {loading ? (
      <SkeletonWrapper>
        <Skeleton />
      </SkeletonWrapper>
    ) : error ? (
      <Message>{'❗️An error occured 🤦🏼‍'}</Message>
    ) : (
      <Message>{msg}</Message>
    )}
  </Wrapper>
);

export default SelectionPlaceholder;
