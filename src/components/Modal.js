import React from 'react';

import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
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

const Modal = ({ children }) => (
  <Background>
    <Wrapper>{children}</Wrapper>
  </Background>
);

export default Modal;
