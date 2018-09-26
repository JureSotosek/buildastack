import React from 'react';

import styled from 'styled-components';

import NpmSuggestions from './npmSuggestions';

const Wrapper = styled.div`
  grid-area: suggestions;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
`;

const NpmSuggestionsLogo = styled.a`
  margin-top: 25px;

  text-decoration: none;
  font-family: Signika Negative;
  font-size: 36px;
  color: black;
`;

const Suggestions = ({ dependencies, onSelect }) => (
  <Wrapper>
    {'Suggestions:'}
    <NpmSuggestions dependencies={dependencies} onSelect={onSelect} />
    <NpmSuggestionsLogo href="https://github.com/JureSotosek/npm-suggestions">
      {'npm-suggestions'}
    </NpmSuggestionsLogo>
  </Wrapper>
);

export default Suggestions;
