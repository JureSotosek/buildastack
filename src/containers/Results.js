import React from 'react';

import PackageCard from '../components/PackageCard';
import ResultsPlaceholder from '../components/ResultsPlaceholder';

const ResultsStack = ({ title, msg, loading }) => (
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
    <div>{title}</div>
    <ResultsPlaceholder msg={msg} loading={loading} />
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
    <ResultsStack
      title={'Search results:'}
      msg={'Start typing to get results📝'}
    />
    <ResultsStack
      title={'Suggestions:'}
      msg={'Select a package to get suggestions📦'}
    />
  </div>
);

export default Results;
