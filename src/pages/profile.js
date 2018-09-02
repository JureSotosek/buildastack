import React from 'react';

import styled from 'styled-components';

import Title from '../components/Title';

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Source Sans Pro;
`;

const Profile = () => (
  <Wrapper>
    <Title title={'Jure Sotošek'} subtitle={'Saved stacks:'} />
  </Wrapper>
);

export default Profile;
