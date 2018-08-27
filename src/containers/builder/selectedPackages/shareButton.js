import React from 'react';

import { Mutation } from 'react-apollo';
import { CreateStackMutation } from '../../../lib/graphql/mutations';

import copy from 'copy-to-clipboard';

import Button from '../../../components/Button';

const ShareButton = ({ selectedPackages, onShare }) => {
  const getDependencies = packages => {
    return packages.map(pkg => ({
      name: pkg.name,
      version: pkg.version,
      dev: pkg.dev
    }));
  };

  const handleShareOnClick = createStack => {
    createStack({
      variables: { dependencies: getDependencies(selectedPackages) }
    }).then(({ data: { createStack: { id } } }) =>
      copy('buildastack.io/stack/' + id)
    );
  };

  return (
    <Mutation mutation={CreateStackMutation}>
      {(createStack, { loading, error }) => (
        <Button
          color={'#ff954f'}
          onClick={() => handleShareOnClick(createStack)}
        >
          {loading ? 'Loading...' : error ? 'Error!' : 'Share'}
        </Button>
      )}
    </Mutation>
  );
};

export default ShareButton;
