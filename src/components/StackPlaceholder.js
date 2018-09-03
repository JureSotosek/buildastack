import React from 'react';

import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

const Wrapper = styled.div`
  width: 250px;

  padding: 5px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: column;

  background-color: 'white';
`;

const Message = styled.div`
  text-align: center;
  font-weight: bold;
`;

const SkeletonWrapperBig = styled.div`
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;

  font-size: 25px;
`;

const SkeletonWrapperSmall = styled.div`
  padding: 10px;
  padding-top: 0;
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
      <Message>{'❗️An error occured 🤦🏼‍'}</Message>
    ) : (
      <Message>{msg}</Message>
    )}
  </Wrapper>
);

export default StackPlaceholder;
