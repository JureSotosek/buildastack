import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';

import copy from 'copy-to-clipboard';

const Title = styled.div`
  font-size: 30px;
  text-shadow: 2px 2px lightGrey;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
`;

const StyledLink = styled(Link)`
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

  margin-top: 10px;

  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  height: 30px;
`;

const Msg = styled.div`
  margin-top: 5px;
`;

class ShareModal extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: null
    };

    this.handleOnCopyLink = this.handleOnCopyLink.bind(this);
  }

  handleOnCopyLink() {
    const { link } = this.props;

    copy('https://buildastack.io' + link);

    this.setState({
      msg: 'Link coppied!'
    });
  }

  render() {
    const { msg } = this.state;
    const { title, subTitle, link, closeModal } = this.props;

    return (
      <Modal>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <StyledLink to={link}>buildastack.io{link}</StyledLink>
        <ButtonsWrapper>
          <StyledButton color={'grey'} onClick={closeModal}>
            {'Close'}
          </StyledButton>
          <StyledButton color={'#ff954f'} onClick={this.handleOnCopyLink}>
            {'Copy link'}
          </StyledButton>
        </ButtonsWrapper>
        <Msg>{msg || ' '}</Msg>
      </Modal>
    );
  }
}

export default ShareModal;
