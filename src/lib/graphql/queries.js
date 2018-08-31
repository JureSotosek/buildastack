import gql from 'graphql-tag';

export const authenticateQuery = gql`
  query Authenticate($code: String!) {
    authenticate(code: $code) {
      token
    }
  }
`;

export const userQuery = gql`
  query User {
    user {
      name
    }
  }
`;

export const searchQuery = gql`
  query Search($query: String!) {
    search(query: $query) {
      name
      description
      version
      owner {
        name
      }
      humanDownloadsLast30Days
      popular
    }
  }
`;

export const suggestionsQuery = gql`
  query Suggestions($dependencies: [String!]!, $devDependencies: [String!]!) {
    suggestions(
      dependencies: $dependencies
      devDependencies: $devDependencies
    ) {
      suggestions {
        name
        description
        version
        owner {
          name
        }
        humanDownloadsLast30Days
        popular
      }
    }
  }
`;

export const stackQuery = gql`
  query Stack($id: ID!) {
    stack(id: $id) {
      id
      dependencies {
        name
        version
        dev
      }
    }
  }
`;
