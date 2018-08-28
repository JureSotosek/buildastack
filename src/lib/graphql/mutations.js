import gql from 'graphql-tag';

export const createStackMutation = gql`
  mutation CreateStack($dependencies: [InputDependency!]!) {
    createStack(dependencies: $dependencies) {
      id
    }
  }
`;
