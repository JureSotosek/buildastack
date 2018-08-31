import Cookie from 'universal-cookie';

import GithubPopup from './githubPopup';
import { authenticateQuery } from '../graphql/queries';

const cookies = new Cookie();

const getToken = (client, code) => {
  return client.query({
    query: authenticateQuery,
    variables: { code }
  });
};

export const loginWithGithub = client => {
  return new Promise(async (resolve, reject) => {
    const handleSuccess = async res => {
      try {
        const tokenRes = await getToken(client, res.code);

        cookies.set('token', tokenRes.data.authenticate.token, { path: '/' });

        resolve();
      } catch (error) {
        reject(error);
      }
    };

    const clientId = 'ca97343db8b729b071dd';
    const scope = 'read:user';
    const popup = GithubPopup.open({
      client_id: clientId,
      scope
    });

    popup.then(handleSuccess, reject);
  });
};
export const logout = () => {
  cookies.remove('token', { path: '/' });
};
