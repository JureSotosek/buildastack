import React from 'react';

import styled from 'styled-components';

import TemplateStack from '../containers/index/templateStacks';
import Title from '../components/Title';
import Button from '../components/Button';

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;

  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  max-width: 400px;
  height: 50px;

  margin-top: 30px;
  border-radius: 10px;

  text-decoration: none;
  color: black;
  font-size: 22px;
`;

const Index = ({ history }) => (
  <Wrapper>
    <Title
      title={'🥞 Buildastack'}
      subtitle={
        'A tool for building stacks. You can save and share them too 🎉.'
      }
    />
    <StyledButton color={'white'} onClick={() => history.push('/builder')}>
      {'Start building!'}
    </StyledButton>
    <TemplateStack history={history} />
  </Wrapper>
);

export default Index;
