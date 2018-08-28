import React from 'react';

import styled from 'styled-components';

import Button from '../components/Button';

import copy from 'copy-to-clipboard';

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

const Link = styled.a`
  margin-top: 10px;

  text-align: center;

  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  word-break: break-all;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  margin-top: 20px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  height: 30px;
`;

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: null
    };

    this.handleCopyLink = this.handleCopyLink.bind(this);
  }

  handleCopyLink() {
    const { link } = this.props;

    copy(link);

    this.setState({
      msg: 'Link coppied!'
    });
  }

  render() {
    const { msg } = this.state;
    const { title, subTitle, link, closeModal } = this.props;

    return (
      <Background>
        <Wrapper>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Link href={'https://' + link}>{link}</Link>
          <ButtonsWrapper>
            <StyledButton color={'grey'} onClick={closeModal}>
              Close
            </StyledButton>
            <StyledButton color={'#ff954f'} onClick={this.handleCopyLink}>
              Copy link
            </StyledButton>
          </ButtonsWrapper>
          {msg || ' '}
        </Wrapper>
      </Background>
    );
  }
}

export default Modal;
