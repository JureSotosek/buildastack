import React from 'react';

const Title = () => (
  <div
    style={{
      width: '100%',
      marginTop: 40,
      textAlign: 'center'
    }}
  >
    <div
      style={{
        fontSize: 70,
        textShadow: '2px 2px lightGrey'
      }}
    >
      Build your stack.
    </div>
    <div style={{ fontSize: 20, marginTop: 5 }}>
      Suggestions are packages📦 that best suit your existing dependencies👇🏼
    </div>
  </div>
);

export default Title;
