import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 840px;
  margin-top: 30px;
  text-align: center;
`;

const MainTitle = styled.div`
  font-size: 70px;
  text-shadow: 2px 2px lightGrey;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
`;

const Title = ({ title, subtitle }) => (
  <Wrapper>
    <MainTitle>{title}</MainTitle>
    <SubTitle>{subtitle}</SubTitle>
  </Wrapper>
);

export default Title;
