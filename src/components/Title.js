import React from 'react';

const Title = ({ title, subtitle }) => (
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
      {title}
    </div>
    <div style={{ fontSize: 20, marginTop: 5 }}>{subtitle}</div>
  </div>
);

export default Title;
