import React from 'react';

import styled from 'styled-components';

import { Redirect } from 'react-router-dom';

import { Mutation } from 'react-apollo';
import { deleteStackMutation } from '../../../lib/graphql/mutations';

import Button from '../../../components/Button';

const StyledButton = styled(Button)`
  margin-right: 5px;
  margin-left: 5px;
`;

const DeleteButton = ({ id }) => (
  <Mutation mutation={deleteStackMutation} variables={{ id }}>
    {(deleteStack, { data, loading, error }) => {
      if (data) {
        return <Redirect to="/profile" />;
      }

      return (
        <StyledButton color={'#5856d6'} onClick={deleteStack}>
          {loading ? 'Loading...' : error ? 'Error' : 'Delete'}
        </StyledButton>
      );
    }}
  </Mutation>
);

export default DeleteButton;
