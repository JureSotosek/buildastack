import gql from 'graphql-tag';

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
