import gql from "graphql-tag";

export const pageInfo = gql`
  fragment PageInfo on PageInfo {
    endCursor
    hasNextPage
  }
`;
