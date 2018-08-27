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

const Logo = styled.a`
  text-decoration: none;
  font-size: 25px;
  color: black;
`;

const GithubLogo = styled.img`
  height: 35px;
`;

const Header = () => (
  <Wrapper>
    <Logo href={'https://buildastack.io'}>{'Buildastack'}</Logo>
    <a href="https://github.com/JureSotosek/buildastack">
      <GithubLogo
        src={
          'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
        }
      />
    </a>
  </Wrapper>
);

export default Header;
