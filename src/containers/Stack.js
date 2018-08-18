import React from 'react';

import StackCard from '../components/StackCard';

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
    <StackCard title={'react'} author={'Facebook'} />
    <StackCard title={'react-dom'} author={'Facebook'} />
    <StackCard title={'ink-divider'} author={'juresotosek'} />
  </div>
);

export default Stack;
