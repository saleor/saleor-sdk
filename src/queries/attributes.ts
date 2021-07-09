import gql from "graphql-tag";

export const attributes = gql`
  query Attributes($id: ID!, $channel: String) {
    attributes(channel: $channel, filter: { inCategory: $id }, first: 100) {
      edges {
        node {
          id
          name
          slug
          choices(first: 100) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;
