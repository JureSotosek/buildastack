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
    }
  }
`;

export const suggestionsQuery = gql`
  query Suggestions($dependencies: [String!]!) {
    suggestions(dependencies: $dependencies) {
      dependencies {
        name
        description
        version
        owner {
          name
        }
        humanDownloadsLast30Days
      }
    }
  }
`;
