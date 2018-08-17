import React from 'react';

const PackageCard = ({ title, description }) => (
  <div
    style={{
      width: '100%',
      maxWidth: 400,
      minWidth: 300,
      minHeight: 70,
      marginTop: 20,
      borderRadius: 5,
      boxShadow: '0 5px 15px 0 rgba(37,44,97,0.15)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <div
      style={{
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span style={{ fontSize: 25, color: 'black' }}>{title}</span>
        <span style={{ color: 'grey', fontSize: 15 }}>🔥📉11m</span>
      </div>
      <div style={{ color: 'lightGrey', fontSize: 15 }}>{description}</div>
    </div>
    <div
      style={{
        minWidth: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'lightGrey',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        fontWeight: 'bold'
      }}
    >
      +
    </div>
  </div>
);

export default PackageCard;
