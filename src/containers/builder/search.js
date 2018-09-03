import React from 'react';

import styled from 'styled-components';

import InputField from '../../components/InputField';

const Wrapper = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchTitle = styled.div`
  margin: 10px;
  text-shadow: 1px 1px lightGrey;
  font-size: 22px;
`;

const StyledInputField = styled(InputField)`
  width: 100%;
  max-width: 500px;
  margin: 10px;
`;

class Search extends React.Component {
  constructor() {
    super();

    this.focus = this.focus.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
  }

  focus() {
    this.input.focus();
  }

  handleInputOnChange(event) {
    const { onChange } = this.props;

    onChange(event.target.value);
  }

  render() {
    const { value } = this.props;

    return (
      <Wrapper>
        <SearchTitle>{'🔎 Search to add packages:'}</SearchTitle>
        <StyledInputField
          placeholder="react, react-dom, graphql,..."
          value={value}
          onChange={this.handleInputOnChange}
          innerRef={input => {
            this.input = input;
          }}
        />
      </Wrapper>
    );
  }
}

export default Search;
