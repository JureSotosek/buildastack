import React from 'react';

import { withRouter } from 'react-router-dom';
import { withApollo } from 'react-apollo';

import styled from 'styled-components';

import { Query } from 'react-apollo';
import { viewerQuery } from '../lib/graphql/queries';
import { loginWithGithub, logout } from '../lib/loginWithGithub';

import GithubLogSrc from '../../media/github.png';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  padding-bottom: 7px;
  text-decoration: none;
  font-size: 25px;
  color: black;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
`;

const DividerLeft = styled.div`
  height: 30px;
  width: 2px;

  margin-right: 10px;
  margin-left: 13px;
  margin-bottom: 5px;

  background-color: black;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 20px;
`;

const DividerRight = styled.div`
  height: 25px;
  width: 1px;

  margin-right: 10px;
  margin-left: 10px;

  background-color: black;
`;

const GithubLogo = styled.img`
  height: 35px;
`;

const DivWithPointer = styled.div`
  cursor: pointer;
`;

const Header = ({ history, client }) => {
  const handleOnLogin = () => {
    loginWithGithub(client);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Logo href={'https://buildastack.io/'}>{'Buildastack'}</Logo>
        <DividerLeft />
        <a href="https://github.com/JureSotosek/buildastack">
          <GithubLogo src={GithubLogSrc} />
        </a>
      </LeftSide>
      <RightSide>
        <Query query={viewerQuery} pollInterval={1000}>
          {({ loading, error, data }) => {
            if (loading) {
              return 'Loading...';
            }

            if (error) {
              return (
                <DivWithPointer onClick={handleOnLogin}>
                  Login with Github!
                </DivWithPointer>
              );
            }

            return (
              <React.Fragment>
                <DivWithPointer
                  onClick={() => {
                    history.push('/profile');
                  }}
                >
                  {data.viewer.name}
                </DivWithPointer>
                <DividerRight />
                <DivWithPointer onClick={logout}>{'Logout'}</DivWithPointer>
              </React.Fragment>
            );
          }}
        </Query>
      </RightSide>
    </Wrapper>
  );
};

export default withApollo(withRouter(Header));
