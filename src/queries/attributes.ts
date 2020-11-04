import gql from "graphql-tag";

export const attributes = gql`
  query Attributes($id: ID!, $channel: String) {
    attributes(filter: { inCategory: $id, channel: $channel }, first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
