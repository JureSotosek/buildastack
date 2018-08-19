import React from 'react';

import PackageCard from '../../../components/PackageCard';
import PackagePlaceholder from '../../../components/PackagePlaceholder';

const SuggestionResults = ({ title, msg, loading }) => (
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
    <PackagePlaceholder msg={msg} loading={loading} />
  </div>
);

export default SuggestionResults;
