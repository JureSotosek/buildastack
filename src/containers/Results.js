import React from 'react';

import PackageCard from '../components/PackageCard';

const ResultsStack = () => (
  <div
    style={{
      width: '100%',
      margin: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      fontSize: 20
    }}
  >
    <div>Search results:</div>
    <PackageCard />
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
