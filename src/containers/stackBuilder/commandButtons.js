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
  padding-bottom: 10px;
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
        const yarnDependencies = selectedPackages
          .filter(pkg => !pkg.dev)
          .reduce((command, pkg) => command + ' ' + pkg.name, 'yarn add');

        const yarnDevDependencies = selectedPackages
          .filter(pkg => pkg.dev)
          .reduce((command, pkg) => command + ' ' + pkg.name, 'yarn add --dev');

        const yarnCommand = yarnDependencies + ' && ' + yarnDevDependencies;

        return yarnCommand;

      case 'npm':
        const npmDependencies = selectedPackages
          .filter(pkg => !pkg.dev)
          .reduce(
            (command, pkg) => command + ' ' + pkg.name,
            'npm install --save'
          );

        const npmDevDependencies = selectedPackages
          .filter(pkg => pkg.dev)
          .reduce(
            (command, pkg) => command + ' ' + pkg.name,
            'npm install --save-dev'
          );

        const npmCommand = npmDependencies + ' && ' + npmDevDependencies;

        return npmCommand;
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

export default CommandButtons;
