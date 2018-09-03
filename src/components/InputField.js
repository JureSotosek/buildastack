import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 100px;

  box-sizing: border-box;
  padding: 7px;
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

class InputField extends React.Component {
  constructor() {
    super();

    this.focus = this.focus.bind(this);
  }

  focus() {
    this.input.focus();
  }

  render() {
    const { className, placeholder, value, onChange } = this.props;

    return (
      <Wrapper className={className}>
        <StyledInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          innerRef={input => {
            this.input = input;
          }}
        />
      </Wrapper>
    );
  }
}

export default InputField;
