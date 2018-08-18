import React from 'react';

import StackCard from '../components/StackCard';
import StackPlaceholder from '../components/StackPlaceholder';

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
    <StackPlaceholder />
  </div>
);

export default Stack;
