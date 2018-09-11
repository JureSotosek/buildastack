import Cookie from 'universal-cookie';

import LoginWithGithub from 'github-oauth-popup';
import { authenticateMutation } from '../graphql/mutations';

const cookies = new Cookie();

const getToken = (client, code) => {
  return client.mutate({
    mutation: authenticateMutation,
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

    const client_id = 'ca97343db8b729b071dd';
    const scope = 'read:user';

    LoginWithGithub({ client_id, scope })
      .then(handleSuccess)
      .catch(reject);
  });
};

export const logout = () => {
  cookies.remove('token', { path: '/' });
};
