import React from 'react';

import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

const Wrapper = styled.div`
  width: 250px;

  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: 'white';
`;

const Message = styled.div`
  font-weight: bold;
`;

const SkeletonWrapperBig = styled.div`
  width: 100%;

  padding-right: 10px;
  padding-left: 10px;

  font-size: 25px;
`;

const SkeletonWrapperSmall = styled.div`
  width: 100%;
  margin-top: 5px;
  font-size: 15px;
`;

const StackPlaceholder = ({ loading, error, msg }) => (
  <Wrapper>
    {loading ? (
      <React.Fragment>
        <SkeletonWrapperBig>
          <Skeleton />
        </SkeletonWrapperBig>

        <SkeletonWrapperSmall>
          <Skeleton count={2} />
        </SkeletonWrapperSmall>
      </React.Fragment>
    ) : error ? (
      <Message>{'Discontinued 😔'}</Message>
    ) : (
      <Message>{msg}</Message>
    )}
  </Wrapper>
);

export default StackPlaceholder;
