import React from 'react';

import styled from 'styled-components';

import DeleteButton from './deleteButton';
import SaveButton from './saveButton';
import Button from '../../../components/Button';

import copy from 'copy-to-clipboard';
import { npmInstallCommand, yarnAddCommand } from '../../../utils';

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

const StyledButton = styled(Button)`
  margin-right: 5px;
  margin-left: 5px;
`;

const ShareSaveButtonsWrapper = styled(ButtonsWrapper)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class Actions extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: null
    };

    this.setMsg = this.setMsg.bind(this);
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
  }

  setMsg(msg) {
    this.setState({
      msg
    });
  }

  handleButtonOnClick(installer) {
    const { dependencies } = this.props;

    let commandToCopy;
    let msg;

    if (installer === 'yarn') {
      commandToCopy = yarnAddCommand(dependencies);
      msg = 'Yarn command coppied!';
    }

    if (installer === 'npm') {
      commandToCopy = npmInstallCommand(dependencies);
      msg = 'npm command coppied!';
    }

    copy(commandToCopy);
    this.setMsg(msg);
  }

  render() {
    const { msg } = this.state;
    const { history, id, owner } = this.props;

    return (
      <Wrapper>
        <ButtonsWrapper>
          <StyledButton
            color={'#5ac8fa'}
            onClick={() => this.handleButtonOnClick('yarn')}
          >
            {'Yarn'}
          </StyledButton>
          <StyledButton
            color={'#ff2d55'}
            onClick={() => this.handleButtonOnClick('npm')}
          >
            {'npm'}
          </StyledButton>
        </ButtonsWrapper>
        <ShareSaveButtonsWrapper>
          <StyledButton
            color={'#ff954f'}
            onClick={() => history.push('/builder/' + id)}
          >
            {'Edit'}
          </StyledButton>
          {owner ? (
            <DeleteButton id={id} />
          ) : (
            <SaveButton id={id} setMsg={this.setMsg} />
          )}
        </ShareSaveButtonsWrapper>
        {msg || ''}
      </Wrapper>
    );
  }
}

export default Actions;
