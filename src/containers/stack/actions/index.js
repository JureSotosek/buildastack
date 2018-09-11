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

  padding-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

const Msg = styled.div`
  margin-top: 5px;
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
          <Button
            color={'#5ac8fa'}
            onClick={() => this.handleButtonOnClick('yarn')}
          >
            {'Yarn'}
          </Button>
          <Button
            color={'#ff2d55'}
            onClick={() => this.handleButtonOnClick('npm')}
          >
            {'npm'}
          </Button>
        </ButtonsWrapper>
        <ButtonsWrapper>
          <Button
            color={'#ff954f'}
            onClick={() => history.push('/builder/' + id)}
          >
            {'Edit'}
          </Button>
          {owner ? (
            <DeleteButton id={id} />
          ) : (
            <SaveButton id={id} setMsg={this.setMsg} />
          )}
        </ButtonsWrapper>
        <Msg>{msg || ''}</Msg>
      </Wrapper>
    );
  }
}

export default Actions;
