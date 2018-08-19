import React from 'react';

const PackageCard = ({
  name,
  description,
  author,
  version,
  downloads,
  popular,
  onSelect
}) => (
  <div
    style={{
      width: '100%',
      maxWidth: 400,
      minWidth: 300,
      marginTop: 20,
      borderRadius: 5,
      boxShadow: '0 5px 15px 0 rgba(37,44,97,0.30)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white'
    }}
    onClick={onSelect}
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
        <span style={{ fontSize: 20 }}>{name}</span>
        <span style={{ color: 'grey', fontSize: 15 }}>
          {popular && '🔥'}
          📉
          {downloads}
        </span>
      </div>
      <div style={{ color: 'grey', fontSize: 15 }}>{description}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2
        }}
      >
        <span style={{ fontSize: 15 }}>{version}</span>
        <span style={{ fontSize: 15 }}>{author}</span>
      </div>
    </div>
    <div
      style={{
        minWidth: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#7fffd4',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
      }}
    >
      👍🏼
    </div>
  </div>
);

export default PackageCard;
