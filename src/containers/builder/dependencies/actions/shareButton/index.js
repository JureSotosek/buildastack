import React from 'react';

import { Mutation } from 'react-apollo';
import { createStackMutation } from '../../../../../lib/graphql/mutations';

import { formatDependencies } from '../../../../../utils';

import Button from '../../../../../components/Button';
import ShareModal from './shareModal';

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
    const { dependencies } = this.props;

    createStack({
      variables: { dependencies: formatDependencies(dependencies) }
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
        {(createStack, { data, loading, error }) => (
          <React.Fragment>
            <Button
              color={'#ff954f'}
              onClick={() => !loading && this.handleShareOnClick(createStack)}
            >
              {loading ? 'Loading...' : error ? 'Error' : 'Share'}
            </Button>
            {showModal && (
              <ShareModal
                title={'Stack made'}
                subTitle={'A shareable link was created: '}
                link={'buildastack.io/s/' + (data && data.createStack.id)}
                closeModal={this.closeModal}
              />
            )}
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default ShareButton;
