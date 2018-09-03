import React from 'react';

import styled from 'styled-components';

import Title from '../components/Title';
import Stacks from '../containers/profile/stacks';

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Source Sans Pro;
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
      <Stacks history={history} />
    </StacksWrapper>
  </Wrapper>
);

export default Profile;
