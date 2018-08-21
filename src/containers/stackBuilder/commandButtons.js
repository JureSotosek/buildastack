import React from 'react';

import styled from 'styled-components';

import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '../../components/Button';

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

class CommandButtons extends React.Component {
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
        return (
          'yarn add' +
          selectedPackages.reduce(
            (command, pkg) => command + ' ' + pkg.name,
            ''
          )
        );

      case 'npm':
        return (
          'npm install --save' +
          selectedPackages.reduce(
            (command, pkg) => command + ' ' + pkg.name,
            ''
          )
        );
    }

    return null;
  }

  render() {
    const { coppied } = this.state;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <CopyToClipboard text={this.setCommandToCopy('yarn')}>
            <Button onClick={this.setCoppied} color={'#2088b6'}>
              {'Yarn'}
            </Button>
          </CopyToClipboard>
          <CopyToClipboard text={this.setCommandToCopy('npm')}>
            <Button onClick={this.setCoppied} color={'#cb3837'}>
              {'npm'}
            </Button>
          </CopyToClipboard>
        </ButtonsWrapper>
        {coppied && 'Coppied to clipboard!'}
      </Wrapper>
    );
  }
}

export default CommandButtons;
