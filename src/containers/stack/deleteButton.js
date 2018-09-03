import React from 'react';

import { Redirect } from 'react-router-dom';

import { Mutation } from 'react-apollo';
import { deleteStackMutation } from '../../lib/graphql/mutations';

import Button from '../../components/Button';

const DeleteButton = ({ id }) => (
  <Mutation mutation={deleteStackMutation} variables={{ id }}>
    {(deleteStack, { data, loading, error }) => {
      console.log(error && error.graphQLErrors);
      if (data) {
        return <Redirect to="/profile" />;
      } else {
        return (
          <Button color={'#5856d6'} onClick={deleteStack}>
            {loading ? 'Loading...' : error ? 'Error' : 'Delete'}
          </Button>
        );
      }
    }}
  </Mutation>
);

export default DeleteButton;
