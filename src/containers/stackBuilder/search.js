import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const SearchTitle = styled.div`
  margin: 20px;
  margin-right: 0px;
  text-shadow: 1px 1px lightGrey;
  fonts-size: 23px;
`;

const SearchField = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 7px;
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

class Search extends React.Component {
  constructor() {
    super();

    this.focus = this.focus.bind(this);
  }

  focus() {
    this.input.focus();
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <Wrapper>
        <SearchTitle>{'🔎 Search to add packages:'}</SearchTitle>
        <SearchField>
          <StyledInput
            type="text"
            placeholder="react, react-dom, graphql,..."
            value={value}
            onChange={event => onChange(event.target.value)}
            innerRef={input => {
              this.input = input;
            }}
          />
        </SearchField>
      </Wrapper>
    );
  }
}

export default Search;
