import React from 'react';

import { Mutation } from 'react-apollo';
import { CreateStackMutation } from '../../../lib/graphql/mutations';

import { Redirect } from 'react-router-dom';

import Button from '../../../components/Button';

const ShareButton = ({ selectedPackages }) => {
  const getDependencies = packages => {
    return packages.map(pkg => ({
      name: pkg.name,
      version: pkg.version,
      dev: pkg.dev
    }));
  };

  return (
    <Mutation mutation={CreateStackMutation}>
      {(createStack, { data, loading, error }) => {
        if (data) {
          return <Redirect to={'/stack/' + data.createStack.id} />;
        } else {
          return (
            <Button
              color={'#ff954f'}
              onClick={() =>
                createStack({
                  variables: { dependencies: getDependencies(selectedPackages) }
                })
              }
            >
              {loading ? 'Loading...' : error ? 'Error!' : 'Share'}
            </Button>
          );
        }
      }}
    </Mutation>
  );
};

export default ShareButton;
