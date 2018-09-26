import React from 'react';

import styled from 'styled-components';

import AlgoliaSearch from './algoliaSearch';

const Wrapper = styled.div`
  grid-area: results;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
`;

const AlgoliaLogo = styled.img`
  width: 260px;
  margin-top: 30px;
`;

const Results = ({ query, onSelect }) => (
  <Wrapper>
    {'Search results:'}
    <AlgoliaSearch query={query} onSelect={onSelect} />
    <a href="https://www.algolia.com">
      <AlgoliaLogo
        src="https://www.algolia.com/static_assets/images/pricing/pricing_new/algolia-powered-by-14773f38.svg"
        alt="Powered by Algolia"
      />
    </a>
  </Wrapper>
);

export default Results;
