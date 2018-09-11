import React from 'react';

import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

const Wrapper = styled.div`
  width: 100vh;
  max-width: 380px;
  min-width: 280px;
  min-height: 60px;

  margin-top: 20px;
  padding: 10px;
  padding-top: 5px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: 'white';
`;

const SkeletonWrapperBig = styled.div`
  width: 100%;
  font-size: 25px;
`;

const SkeletonWrapperSmall = styled.div`
  width: 100%;
  margin-top: 5px;
  font-size: 15px;
`;

const ResultPlaceholder = ({ loading, error, msg }) => (
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
      '❗️An error occured 🤦🏼‍'
    ) : (
      msg
    )}
  </Wrapper>
);

export default ResultPlaceholder;
