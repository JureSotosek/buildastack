import React from 'react';

import styled from 'styled-components';

import Title from '../components/Title';
import StackList from '../containers/profile/stackList';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StacksWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Profile = ({ history }) => (
  <Wrapper>
    <Title title={'Saved stacks'} />
    <StacksWrapper>
      <StackList history={history} />
    </StacksWrapper>
  </Wrapper>
);

export default Profile;
