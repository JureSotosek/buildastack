import React from 'react';

import styled from 'styled-components';

import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '../../components/Button';

import { npmInstallCommand, yarnAddCommand } from '../../lib/installCommands';

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;

  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  flex-direction: row;
`;

const ShareSaveButtonsWrapper = styled(ButtonsWrapper)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class StackActions extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: null
    };

    this.setMsg = this.setMsg.bind(this);
    this.setCommandToCopy = this.setCommandToCopy.bind(this);
  }

  setMsg(msg) {
    this.setState({
      msg
    });
  }

  setCoppiedNot() {
    this.setState({
      msg: false
    });
  }

  setCommandToCopy(installer) {
    const { selectedPackages } = this.props;

    switch (installer) {
      case 'yarn':
        return yarnAddCommand(selectedPackages);

      case 'npm':
        return npmInstallCommand(selectedPackages);
    }

    return null;
  }

  render() {
    const { msg } = this.state;
    const { id } = this.props;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <CopyToClipboard text={this.setCommandToCopy('yarn')}>
            <Button
              color={'#5ac8fa'}
              onClick={() => this.setMsg('Yarn command coppied')}
            >
              {'Yarn'}
            </Button>
          </CopyToClipboard>
          <CopyToClipboard text={this.setCommandToCopy('npm')}>
            <Button
              color={'#ff2d55'}
              onClick={() => this.setMsg('npm command coppied')}
            >
              {'npm'}
            </Button>
          </CopyToClipboard>
        </ButtonsWrapper>
        <ShareSaveButtonsWrapper>
          <CopyToClipboard text={'buildastack.io/stack/' + id}>
            <Button
              color={'#ff954f'}
              onClick={() => this.setMsg('Link coppied')}
            >
              {'Link'}
            </Button>
          </CopyToClipboard>
          <Button
            style={{ color: 'lightGrey' }}
            color={'grey'}
            onClick={() => this.setMsg('Edit coming Soon!')}
          >
            Edit
          </Button>
        </ShareSaveButtonsWrapper>
        {msg || ''}
      </Wrapper>
    );
  }
}

export default StackActions;
