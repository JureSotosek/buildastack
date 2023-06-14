import React from 'react';

import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

const Wrapper = styled.div`
  width: 250px;

  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;
`;

const SkeletonWrapper = styled.div`
  width: 100%;
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
      <Message>{'Discontinued 😔‍'}</Message>
    ) : (
      <Message>{msg}</Message>
    )}
  </Wrapper>
);

export default SelectionPlaceholder;
