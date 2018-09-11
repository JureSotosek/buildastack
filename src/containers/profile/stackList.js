import React from 'react';

import styled from 'styled-components';

import { Query, withApollo } from 'react-apollo';
import { savedStacksQuery } from '../../lib/graphql/queries';

import StackCard from '../../components/StackCard';
import StackPlaceholder from '../../components/StackPlaceholder';
import Button from '../../components/Button';

import { isErrorForbidden } from '../../utils';
import { loginWithGithub } from '../../lib/loginWithGithub';

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 400px;
  height: 50px;

  margin-top: 25px;
  border-radius: 10px;

  text-decoration: none;
  color: black;
  font-size: 22px;
`;

const StackList = ({ history, client }) => (
  <Query query={savedStacksQuery} pollInterval={2000}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <React.Fragment>
            <StackPlaceholder loading />
            <StackPlaceholder loading />
            <StackPlaceholder loading />
          </React.Fragment>
        );
      }

      if (isErrorForbidden(error)) {
        return (
          <StyledButton color={'white'} onClick={() => loginWithGithub(client)}>
            {'Login with github!'}
          </StyledButton>
        );
      }

      if (error) {
        return <StackPlaceholder error />;
      }

      if (data.viewer.stacks.length === 0) {
        return <StackPlaceholder msg={'No stacks saved 🙉'} />;
      }

      const stacks = data.viewer.stacks;
      return stacks.map(stack => (
        <StackCard
          key={stack.id}
          id={stack.id}
          name={stack.name}
          dependencies={stack.dependencies}
          history={history}
        />
      ));
    }}
  </Query>
);

export default withApollo(StackList);
