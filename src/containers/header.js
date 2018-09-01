import React from 'react';

import styled from 'styled-components';

import { ApolloConsumer } from 'react-apollo';
import { Query } from 'react-apollo';
import { userQuery } from '../lib/graphql/queries';
import { loginWithGithub, logout } from '../lib/auth';

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
  padding-bottom: 7px;
  text-decoration: none;
  font-size: 25px;
  color: black;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
`;

const Divider = styled.div`
  height: 30px;
  width: 2px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: black;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
`;

const GithubLogo = styled.img`
  height: 35px;
`;

const Header = () => {
  const handleLogin = async (client, refetch) => {
    await loginWithGithub(client);
    refetch();
  };

  return (
    <Wrapper>
      <RightSide>
        <Logo href={'https://buildastack.io/'}>{'Buildastack'}</Logo>
        <Divider />
        <a href="https://github.com/JureSotosek/buildastack">
          <GithubLogo
            src={
              'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
            }
          />
        </a>
      </RightSide>
      <LeftSide>
        <Query query={userQuery}>
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return 'Loading...';
            } else if (error) {
              return (
                <ApolloConsumer>
                  {client => (
                    <div onClick={() => handleLogin(client, refetch)}>
                      Login with Github!
                    </div>
                  )}
                </ApolloConsumer>
              );
            } else if (data) {
              return (
                <div
                  onClick={() => {
                    logout();
                    refetch();
                  }}
                >
                  {data.user.name}
                </div>
              );
            }
          }}
        </Query>
      </LeftSide>
    </Wrapper>
  );
};

export default Header;
