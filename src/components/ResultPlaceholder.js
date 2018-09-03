import React from 'react';

import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  min-height: 70px;

  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.3);

  background-color: 'white';
`;

const Message = styled.div`
  text-align: center;
  margin-top: 20px;
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

const ResultPlaceholder = ({ loading, msg, error }) => {
  const cardBody = () => {
    if (error) {
      return <Message>{'❗️An error occured 🤦🏼‍'}</Message>;
    } else if (msg) {
      return <Message>{msg}</Message>;
    } else if (loading) {
      return (
        <div>
          <SkeletonWrapperBig>
            <Skeleton />
          </SkeletonWrapperBig>

          <SkeletonWrapperSmall>
            <Skeleton count={2} />
          </SkeletonWrapperSmall>
        </div>
      );
    }
  };

  return <Wrapper>{cardBody()}</Wrapper>;
};
export default ResultPlaceholder;
