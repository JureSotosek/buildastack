import gql from 'graphql-tag';

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
