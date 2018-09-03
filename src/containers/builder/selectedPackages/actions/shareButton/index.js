import React from 'react';

import { Mutation } from 'react-apollo';
import { createStackMutation } from '../../../../../lib/graphql/mutations';

import { formatPackages } from '../../../../../utils';

import Button from '../../../../../components/Button';
import Modal from './modal';

class ShareButton extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleShareOnClick = this.handleShareOnClick.bind(this);
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  handleShareOnClick(createStack) {
    const { selectedPackages } = this.props;

    createStack({
      variables: { dependencies: formatPackages(selectedPackages) }
    }).then(() =>
      this.setState({
        showModal: true
      })
    );
  }

  render() {
    const { showModal } = this.state;

    return (
      <Mutation mutation={createStackMutation}>
        {(createStack, { data, loading, error }) => {
          return (
            <React.Fragment>
              <Button
                color={'#ff954f'}
                onClick={() => this.handleShareOnClick(createStack)}
              >
                {loading ? 'Loading...' : error ? 'Error!' : 'Share'}
              </Button>
              {showModal && (
                <Modal
                  title={'Stack made'}
                  subTitle={'A shareable link was created: '}
                  link={'buildastack.io/s/' + data.createStack.id}
                  closeModal={this.closeModal}
                />
              )}
            </React.Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default ShareButton;
