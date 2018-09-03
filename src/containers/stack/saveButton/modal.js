import React from 'react';

import styled from 'styled-components';

import { Mutation } from 'react-apollo';
import { saveStackFromIdMutation } from '../../../lib/graphql/mutations';

import { isErrorForbidden } from '../../../utils';

import { ApolloConsumer } from 'react-apollo';
import { loginWithGithub } from '../../../lib/loginWithGithub';

import Button from '../../../components/Button';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
`;

const Wrapper = styled.div`
  max-width: 500px;

  margin: 0 auto;
  padding: 30px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 30px;
  text-shadow: 2px 2px lightGrey;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  margin-top: 15px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  height: 30px;
`;

const SearchField = styled.div`
  width: 100%;
  max-width: 200px;

  padding: 7px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 7px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.25);
`;

const StyledInput = styled.input`
  width: 100%;

  border: 0 solid;
  outline: none;

  background-color: transparent;
  font-size: 20px;
`;

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loginError: null
    };

    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleOnNameChange(name) {
    this.setState({
      name
    });
  }

  async handleLogin(client, saveStackNew) {
    const { onSave } = this.props;

    loginWithGithub(client)
      .then(() => saveStackNew().then(onSave))
      .catch(() => this.setState({ loginError: true }));
  }

  render() {
    const { name, loginError } = this.state;
    const { id, onSave, closeModal } = this.props;

    return (
      <Mutation
        mutation={saveStackFromIdMutation}
        variables={{
          id,
          name
        }}
      >
        {(saveStackFromId, { loading, error }) => {
          return (
            <Background>
              <Wrapper>
                <Title>{'Save this stack'}</Title>
                {isErrorForbidden(error) ? (
                  <React.Fragment>
                    <SubTitle>{'You need to log in to save.'}</SubTitle>
                    <ButtonsWrapper>
                      <StyledButton color={'grey'} onClick={closeModal}>
                        {'Close'}
                      </StyledButton>
                      <ApolloConsumer>
                        {client => (
                          <StyledButton
                            color={'#ff954f'}
                            onClick={() =>
                              this.handleLogin(client, saveStackNew)
                            }
                          >
                            {'Login with Github!'}
                          </StyledButton>
                        )}
                      </ApolloConsumer>
                    </ButtonsWrapper>
                    {loginError && 'Error!'}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <SubTitle>{'Input name for the stack:'}</SubTitle>
                    <SearchField>
                      <StyledInput
                        type="text"
                        placeholder="Stack name..."
                        value={name}
                        onChange={event =>
                          this.handleOnNameChange(event.target.value)
                        }
                      />
                    </SearchField>
                    <ButtonsWrapper>
                      <StyledButton color={'grey'} onClick={closeModal}>
                        {'Close'}
                      </StyledButton>
                      <StyledButton
                        color={'#ff954f'}
                        onClick={() => saveStackFromId().then(onSave)}
                      >
                        {'Save'}
                      </StyledButton>
                    </ButtonsWrapper>
                    {loading ? 'Loading...' : error ? 'Error!' : null}
                  </React.Fragment>
                )}
              </Wrapper>
            </Background>
          );
        }}
      </Mutation>
    );
  }
}

export default Modal;
