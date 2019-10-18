import React from 'react';

import styled from 'styled-components';

import AlgoliaSearch from './algoliaSearch';

import AlgoliaLogoSrc from '../../../../media/algolia.svg';
import SVG from 'react-inlinesvg';

const Wrapper = styled.div`
  grid-area: results;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
`;

const AlgoliaLogo = styled(SVG)`
  width: 260px;
  margin-top: 30px;
`;

const Results = ({ query, onSelect }) => (
  <Wrapper>
    {'Search results:'}
    <AlgoliaSearch query={query} onSelect={onSelect} />
    <a href="https://www.algolia.com">
      <AlgoliaLogo src={AlgoliaLogoSrc} />
    </a>
  </Wrapper>
);

export default Results;
