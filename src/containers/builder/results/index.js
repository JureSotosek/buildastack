import React from 'react';

import styled from 'styled-components';

import SearchResults from './searchResults';
import SuggestionsResults from './suggestionsResults';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ResultsColumnWrapper = styled.div`
  margin: 20px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
`;

const AlgoliaLogo = styled.img`
  width: 260px;
  margin-top: 30px;
`;

const NpmSuggestionsLogo = styled.a`
  margin-top: 25px;

  text-decoration: none;
  font-family: Signika Negative;
  font-size: 36px;
  color: black;
`;

const Results = ({ query, dependencies, onSelect }) => (
  <Wrapper>
    <ResultsColumnWrapper>
      {'Search results:'}
      <SearchResults query={query} onSelect={onSelect} />
      <a href="https://www.algolia.com">
        <AlgoliaLogo
          src="https://www.algolia.com/static_assets/images/pricing/pricing_new/algolia-powered-by-14773f38.svg"
          alt="Powered by Algolia"
        />
      </a>
    </ResultsColumnWrapper>
    <ResultsColumnWrapper>
      {'Suggestions:'}
      <SuggestionsResults dependencies={dependencies} onSelect={onSelect} />
      <NpmSuggestionsLogo href="https://github.com/JureSotosek/npm-suggestions">
        {'npm-suggestions'}
      </NpmSuggestionsLogo>
    </ResultsColumnWrapper>
  </Wrapper>
);

export default Results;
