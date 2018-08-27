import gql from 'graphql-tag';

export const CreateStackMutation = gql`
  mutation CreateStack($dependencies: [InputDependency!]!) {
    createStack(dependencies: $dependencies) {
      id
    }
  }
`;
