import React from 'react';

import styled from 'styled-components';

import Button from '../../../../components/Button';
import ShareButton from './shareButton';
import SaveButton from './saveButton';

import copy from 'copy-to-clipboard';
import { npmInstallCommand, yarnAddCommand } from '../../../../utils';

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

const StyledButton = styled(Button)`
  margin-right: 5px;
  margin-left: 5px;
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
    this.clearMsg = this.clearMsg.bind(this);
    this.getCommandToCopy = this.getCommandToCopy.bind(this);
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
  }

  setMsg(msg) {
    this.setState({
      msg
    });
  }

  clearMsg() {
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
          <StyledButton
            color={'#5ac8fa'}
            onClick={() =>
              this.handleButtonOnClick(
                this.getCommandToCopy('yarn'),
                'Yarn command coppied!'
              )
            }
          >
            {'Yarn'}
          </StyledButton>
          <StyledButton
            color={'#ff2d55'}
            onClick={() =>
              this.handleButtonOnClick(
                this.getCommandToCopy('npm'),
                'npm command coppied!'
              )
            }
          >
            {'npm'}
          </StyledButton>
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
