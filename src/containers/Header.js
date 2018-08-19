import React from 'react';

const Header = () => (
  <div
    style={{
      width: '100%',
      maxWidth: 1200,
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Signika Negative'
    }}
  >
    <div
      style={{
        fontSize: 25
      }}
    >
      BuildAStack
    </div>
    <a href="https://github.com/JureSotosek/emma-www">
      <img
        style={{ height: 30 }}
        src={
          'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
        }
      />
    </a>
  </div>
);

export default Header;
