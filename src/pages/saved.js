import React from 'react';

import GithubPopup from '../lib/auth/githubPopup';

const Saved = () => {
  const handleLogin = () => {
    const clientId = 'ca97343db8b729b071dd';
    const scope = 'read:user';
    const popup = GithubPopup.open({
      client_id: clientId,
      scope
    });

    popup.then(console.log, console.log);
  };

  return (
    <div>
      <button onClick={handleLogin}>hej</button>
    </div>
  );
};

export default Saved;
