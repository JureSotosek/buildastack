import React from 'react';

import Skeleton from 'react-loading-skeleton';

const ResultsPlaceholder = ({ loading, msg, error }) => {
  const cardBody = () => {
    if (error) {
      return (
        <div
          style={{
            textAlign: 'center',
            marginTop: 20
          }}
        >
          ❗️An error occured🤦🏼‍
        </div>
      );
    } else if (msg) {
      return (
        <div
          style={{
            textAlign: 'center',
            marginTop: 20
          }}
        >
          {msg}
        </div>
      );
    } else if (loading) {
      return (
        <div>
          <div
            style={{
              fontSize: 25,
              padding: 5,
              paddingRight: 10,
              paddingLeft: 10
            }}
          >
            <Skeleton />
          </div>

          <div style={{ fontSize: 15, padding: 10, paddingTop: 0 }}>
            <Skeleton count={2} />
          </div>
        </div>
      );
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 400,
        minWidth: 300,
        minHeight: 70,
        marginTop: 20,
        borderRadius: 5,
        boxShadow: '0 5px 15px 0 rgba(37,44,97,0.30)',
        backgroundColor: 'white'
      }}
    >
      {cardBody()}
    </div>
  );
};
export default ResultsPlaceholder;
