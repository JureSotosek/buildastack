import React from 'react';

import styled from 'styled-components';

import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '../../components/Button';

import { npmInstallCommand, yarnAddCommand } from '../../lib/installCommands';

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;

  padding-bottom: 10px;

  display: flex;
  flex-direction: row;
`;

class StackButtons extends React.Component {
  constructor() {
    super();

    this.state = {
      coppied: false
    };

    this.setCoppied = this.setCoppied.bind(this);
    this.setCommandToCopy = this.setCommandToCopy.bind(this);
  }

  setCoppied() {
    this.setState({
      coppied: true
    });
  }

  setCoppiedNot() {
    this.setState({
      coppied: false
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
    const { coppied } = this.state;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <CopyToClipboard text={this.setCommandToCopy('yarn')}>
            <Button onClick={this.setCoppied} color={'#5ac8fa'}>
              {'Yarn'}
            </Button>
          </CopyToClipboard>
          <CopyToClipboard text={this.setCommandToCopy('npm')}>
            <Button onClick={this.setCoppied} color={'#ff2d55'}>
              {'npm'}
            </Button>
          </CopyToClipboard>
        </ButtonsWrapper>
        {coppied && 'Coppied to clipboard!'}
      </Wrapper>
    );
  }
}

export default StackButtons;
