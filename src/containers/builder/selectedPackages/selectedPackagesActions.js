import React from 'react';

import styled from 'styled-components';

import Button from '../../../components/Button';
import ShareButton from './shareButton';
import SaveButton from './saveButton';

import copy from 'copy-to-clipboard';
import {
  npmInstallCommand,
  yarnAddCommand
} from '../../../lib/installCommands';

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

  display: flex;
  flex-direction: row;
`;

const ShareSaveButtonsWrapper = styled(ButtonsWrapper)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class SelectedPackagesActions extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: null
    };

    this.setMsg = this.setMsg.bind(this);
    this.getCommandToCopy = this.getCommandToCopy.bind(this);
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
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

  handleButtonOnClick(toCopy, msg) {
    copy(toCopy);

    this.setMsg(msg);
  }

  getCommandToCopy(installer) {
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
    const { selectedPackages } = this.props;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <Button
            color={'#5ac8fa'}
            onClick={() =>
              this.handleButtonOnClick(
                this.getCommandToCopy('yarn'),
                'Yarn command coppied!'
              )
            }
          >
            {'Yarn'}
          </Button>
          <Button
            color={'#ff2d55'}
            onClick={() =>
              this.handleButtonOnClick(
                this.getCommandToCopy('npm'),
                'npm command coppied!'
              )
            }
          >
            {'npm'}
          </Button>
        </ButtonsWrapper>
        <ShareSaveButtonsWrapper>
          <ShareButton selectedPackages={selectedPackages} />
          <SaveButton
            selectedPackages={selectedPackages}
            setMsg={this.setMsg}
          />
        </ShareSaveButtonsWrapper>
        {msg || ''}
      </Wrapper>
    );
  }
}

export default SelectedPackagesActions;
