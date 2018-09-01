import gql from 'graphql-tag';

export const authenticateMutation = gql`
  mutation Authenticate($code: String!) {
    authenticate(code: $code) {
      token
    }
  }
`;

export const createStackMutation = gql`
  mutation CreateStack($dependencies: [InputDependency!]!) {
    createStack(dependencies: $dependencies) {
      id
    }
  }
`;

export const saveStackNewMutation = gql`
  mutation SaveStackNew($stack: InputStack!) {
    saveStackNew(stack: $stack) {
      id
    }
  }
`;
