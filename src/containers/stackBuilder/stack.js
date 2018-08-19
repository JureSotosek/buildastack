import React from 'react';

import SelectionCard from '../../components/SelectionCard';
import SelectionPlaceholder from '../../components/SelectionPlaceholder';

const Stack = () => (
  <div
    style={{
      marginTop: 60,
      marginRight: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      fontSize: 25,
      fontWeight: 'bold'
    }}
  >
    <div>Your stack:</div>
    <SelectionPlaceholder />
  </div>
);

export default Stack;
