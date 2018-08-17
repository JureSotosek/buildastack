import React from 'react';

import PackageCard from '../components/PackageCard';

const ResultsStack = () => (
  <div
    style={{
      margin: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      fontSize: 20
    }}
  >
    <div>Search results:</div>
    <PackageCard
      title={'react'}
      description={
        'React is a JavaScript library for building user interfaces.'
      }
    />
    <PackageCard
      title={'react-dom'}
      description={'React package for working with the DOM.'}
    />
    <PackageCard title={'babel-core'} description={'Babel compiler core.'} />
  </div>
);

const Results = () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}
  >
    <ResultsStack />
    <ResultsStack />
  </div>
);

export default Results;
