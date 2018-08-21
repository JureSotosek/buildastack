import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Signika Negative;
`;

const Logo = styled.div`
  font-size: 25px;
`;

const GithubLogo = styled.img`
  height: 30px;
`;

const Header = () => (
  <Wrapper>
    <Logo>{'Buildastack'}</Logo>
    <a href="https://github.com/JureSotosek/buildastack">
      <GithubLogo
        src={
          'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
        }
      />
    </a>
  </Wrapper>
);

export default Header;
