import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
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

const Title = ({ className, title, subtitle }) => (
  <Wrapper className={className}>
    <MainTitle>{title}</MainTitle>
    <SubTitle>{subtitle}</SubTitle>
  </Wrapper>
);

export default Title;
